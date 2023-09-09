import { DatabaseHandler } from "./Database/database.js";
import { Table } from "./Table Scripts/table.js";
import { PopupForm } from "./Table Scripts/popup.js";


console.log(`main loaded`);

let dbHandler = new DatabaseHandler()
let popupForm = new PopupForm(saveForm)
let table = new Table(dbHandler, popupForm)

function saveForm(name, owned, wishlist, price) {
    console.log(name + owned + wishlist + price)
    table.updateTableRow(name, owned, wishlist, price)
    dbHandler.updateData(name, owned, wishlist, price)
    dbHandler.saveData()
}