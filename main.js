import { database } from "./database.js";
import { Table } from "./table.js";
import { PopupForm } from "./popup.js";


console.log(`main loaded`);

let popupForm = new PopupForm(saveForm)
let table = new Table(database, popupForm)

function saveForm() {
    console.log("saved form")
    table.updateTableData()
}