
const itineraryData = [
    { destination: 'Paris', activity: 'Eiffel Tower Visit', budget: 500 },
    { destination: 'London', activity: 'British Museum Tour', budget: 400 },
    
  ];
  
  
  window.onload = function() {
    const itineraryList = document.getElementById('itineraryList');
    itineraryData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `Destination: ${item.destination}, Activity: ${item.activity}, Budget: ${item.budget}`;
      itineraryList.appendChild(listItem);
      
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function() {
        
        document.getElementById('editDestination').value = item.destination;
        document.getElementById('editActivity').value = item.activity;
        document.getElementById('editBudget').value = item.budget;
      };
      listItem.appendChild(editButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
       
        itineraryList.removeChild(listItem);
       
        const index = itineraryData.indexOf(item);
        if (index !== -1) {
          itineraryData.splice(index, 1);
          
        }
      };
      listItem.appendChild(deleteButton);
    });
  };
  
  
  document.getElementById('editForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newDestination = document.getElementById('editDestination').value;
    const newActivity = document.getElementById('editActivity').value;
    const newBudget = document.getElementById('editBudget').value;
  
    
    const updatedItem = document.createElement('li');
    updatedItem.textContent = `Destination: ${newDestination}, Activity: ${newActivity}, Budget: ${newBudget}`;
    const itineraryList = document.getElementById('itineraryList');
    itineraryList.replaceChild(updatedItem, itineraryList.childNodes[0]); 
  
    
    itineraryData[0] = { destination: newDestination, activity: newActivity, budget: newBudget };
    
  });
  