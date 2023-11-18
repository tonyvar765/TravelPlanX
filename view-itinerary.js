// Sample data for demonstration (you'd typically retrieve this from a database)
const itineraryData = [
    { destination: 'Paris', activity: 'Eiffel Tower Visit', budget: 500 },
    { destination: 'London', activity: 'British Museum Tour', budget: 400 },
    // Add more itinerary items here as needed
  ];
  
  // Display existing itinerary items
  window.onload = function() {
    const itineraryList = document.getElementById('itineraryList');
    itineraryData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `Destination: ${item.destination}, Activity: ${item.activity}, Budget: ${item.budget}`;
      itineraryList.appendChild(listItem);
      // Add buttons for edit and delete (you can customize these buttons)
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function() {
        // Populate form fields with the selected item's data for editing
        document.getElementById('editDestination').value = item.destination;
        document.getElementById('editActivity').value = item.activity;
        document.getElementById('editBudget').value = item.budget;
      };
      listItem.appendChild(editButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        // Remove the selected item from the list
        itineraryList.removeChild(listItem);
        // Update or delete the item from the database (simulated array in this example)
        const index = itineraryData.indexOf(item);
        if (index !== -1) {
          itineraryData.splice(index, 1);
          // Add code here to update/delete from the actual database
        }
      };
      listItem.appendChild(deleteButton);
    });
  };
  
  // Handling form submission for editing an itinerary item
  document.getElementById('editForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newDestination = document.getElementById('editDestination').value;
    const newActivity = document.getElementById('editActivity').value;
    const newBudget = document.getElementById('editBudget').value;
  
    // Update the displayed item with the new values
    const updatedItem = document.createElement('li');
    updatedItem.textContent = `Destination: ${newDestination}, Activity: ${newActivity}, Budget: ${newBudget}`;
    const itineraryList = document.getElementById('itineraryList');
    itineraryList.replaceChild(updatedItem, itineraryList.childNodes[0]); // Replace the first item (for demo)
  
    // Update the item in the database (simulated array in this example)
    itineraryData[0] = { destination: newDestination, activity: newActivity, budget: newBudget };
    // Add code here to update in the actual database
  });
  