// Handle messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'savePassword') {
      var password = request.password;
      
      // Retrieve the existing saved passwords from storage
      chrome.storage.sync.get(['savedPasswords'], function(result) {
        var savedPasswords = result.savedPasswords || [];
        
        // Check if the password is already saved
        if (savedPasswords.includes(password)) {
          console.log('Password already saved:', password);
        } else {
          // Add the password to the saved passwords list
          savedPasswords.push(password);
          
          // Save the updated passwords list in storage
          chrome.storage.sync.set({ savedPasswords: savedPasswords }, function() {
            console.log('Password saved:', password);
          });
        }
      });
    }
  });
  