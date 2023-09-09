import { DatabaseHandler } from "./database.js";
import { Table } from "./table.js";
import { PopupForm } from "./popup.js";


console.log(`main loaded`);

let dbHandler = new DatabaseHandler()
let popupForm = new PopupForm(saveForm)
let table = new Table(dbHandler, popupForm)

function saveForm(name, owned, wishlist, price) {
    table.updateTableRow(name, owned, wishlist, price)
    dbHandler.updateData(name, owned, wishlist, price)
    dbHandler.saveData()
}