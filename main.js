import { dbHandler } from "./databaseHandler.js";

console.log(`main loaded`);

// Example usage:
const myDbHandler = new dbHandler();

let rawDatabase;

// Later, log the database when it's available using a .then() block
myDbHandler.loadDatabase().then(database => {
  handleDatabase(database)
});

let debugButton = document.getElementById("debugButton");
debugButton.addEventListener("click", () => {
    rawDatabase = myDbHandler.getDatabase()
    handleDatabase(rawDatabase)
})

function handleDatabase(database) {
    
    console.log(database)
}