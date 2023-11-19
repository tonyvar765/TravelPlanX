
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
  
    
    if (username === 'tony' && password === 'password') {
      alert('Login successful!');
     
      window.location.href = 'dashboard.html'; 
    } else {
      alert('Login failed. Please try again.');
    }
  });
  