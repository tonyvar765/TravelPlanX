document.getElementById('loginBtn').addEventListener('click', function() {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');
  
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Additional login-related functionality...
    } else {
      alert('Login failed. Please try again.');
    }
  });
  
  // Other functions related to login interface...
  