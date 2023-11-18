
document.getElementById('accountSettingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUsername = document.getElementById('usernameInput').value;
    const newEmail = document.getElementById('emailInput').value;
    const newPassword = document.getElementById('passwordInput').value;
  
    
    updateUserSettings(newUsername, newEmail, newPassword);
  });
  
  function updateUserSettings(username, email, password) {
    
    alert(`Username: ${username}, Email: ${email}, Password: ${password}`);
    
  }
  