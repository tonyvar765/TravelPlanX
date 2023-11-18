
document.getElementById('itineraryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const destination = document.getElementById('destinationInput').value;
    const activity = document.getElementById('activityInput').value;
    
    addToItinerary(destination, activity);
  });
  
  function addToItinerary(destination, activity) {
    const itineraryList = document.getElementById('itineraryList');
    const listItem = document.createElement('li');
    listItem.textContent = `${destination}: ${activity}`;
    itineraryList.appendChild(listItem);
  }
  
  
  document.getElementById('loginBtn').addEventListener('click', function() {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');
  
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      
    } else {
      alert('Login failed. Please try again.');
    }
  });
  