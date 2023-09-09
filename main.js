import { DatabaseHandler } from "https://barnziebus.github.io/inventory-manager/Database/database.js";
import { Table } from "https://barnziebus.github.io/inventory-manager/Table Scripts/table.js";
import { PopupForm } from "https://barnziebus.github.io/inventory-manager/Table Scripts/popup.js";


console.log(`main loaded`);

let dbHandler = new DatabaseHandler()
let popupForm = new PopupForm(saveForm)
let table = new Table(dbHandler, popupForm)

function saveForm(name, owned, wishlist, price) {
    table.updateTableRow(name, owned, wishlist, price)
    dbHandler.updateData(name, owned, wishlist, price)
    dbHandler.saveData()
}