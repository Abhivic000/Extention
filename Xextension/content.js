// Function to handle form submissions
function handleFormSubmit(event) {
    var passwordInput = event.target.querySelector('input[type="password"]');
    if (passwordInput) {
      event.preventDefault(); 
  
     
      chrome.runtime.sendMessage({ action: 'savePassword', password: passwordInput.value });
  
      
      var popup = document.createElement('div');
      popup.classList.add('popup');
      popup.textContent = 'Password saved!';
      document.body.appendChild(popup);
      setTimeout(function() {
        popup.remove();
      }, 2000);
    }
  }
  
  document.addEventListener('submit', function(event) {
    if (event.target.ownerDocument !== document) {
    
      var iframeOrigin = event.target.ownerDocument.defaultView.origin;
  
      chrome.runtime.sendMessage({ action: 'checkOrigin', origin: iframeOrigin }, function(response) {
        if (response.allowed) {
         
          handleFormSubmit(event);
        }
      });
    } else {
     
      handleFormSubmit(event);
    }
  });
  