// JavaScript specifically for handling login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
  
    // For demo purposes, checking hardcoded credentials
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Redirect to dashboard or another page on successful login
      window.location.href = 'dashboard.html'; // Change this to your desired page
    } else {
      alert('Login failed. Please try again.');
    }
  });
  