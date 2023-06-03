document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.querySelector('.save-button');
    saveButton.addEventListener('click', function() {
      var passwordInput = document.querySelector('.password-input');
      var password = passwordInput.value;
      
      // Send a message to the background script to save the password
      chrome.runtime.sendMessage({ action: 'savePassword', password: password });
      
      // Close the popup
      window.close();
    });
  });
  