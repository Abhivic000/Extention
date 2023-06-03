// Retrieve the saved passwords from storage
chrome.storage.sync.get(['savedPasswords'], function(result) {
    var savedPasswords = result.savedPasswords || [];
    
    // Display the saved passwords in the options page
    var savedPasswordsList = document.querySelector('.saved-passwords');
    savedPasswords.forEach(function(password) {
      var listItem = document.createElement('li');
      listItem.textContent = password;
      savedPasswordsList.appendChild(listItem);
    });
  });
  