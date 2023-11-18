function addToItinerary(destination, activity) {
    const itineraryList = document.getElementById('itineraryList');
    const listItem = document.createElement('li');
    listItem.textContent = `${destination}: ${activity}`;
    itineraryList.appendChild(listItem);
  }
  
  // Other functions related to form submission...
  