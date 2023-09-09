export class dbHandler {
    constructor() {
      this.db = null; // Initialize db as null
  
      this.loadDatabase().then(jsonData => {
        this.db = jsonData; // Store jsonData in the class property
        console.log(this.db);
      });
    }
  
    loadDatabase() {
      return fetch('database.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
    // Create a method to retrieve the database
    getDatabase() {
      return this.db;
    }
  }  