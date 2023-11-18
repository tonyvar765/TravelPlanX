document.getElementById('itineraryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const destination = document.getElementById('destinationInput').value;
    const activity = document.getElementById('activityInput').value;
    const budget = document.getElementById('budgetInput').value;
  
    
    addToItinerary(destination, activity, budget);
  });
  
  function addToItinerary(destination, activity, budget) {
    const itineraryList = document.getElementById('itineraryList');
    const listItem = document.createElement('li');
    listItem.textContent = `Destination: ${destination}, Activity: ${activity}, Budget: ${budget}`;
    itineraryList.appendChild(listItem);
  }
  