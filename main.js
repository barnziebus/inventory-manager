import { database } from "./database.js";
import { Table } from "./table.js";
import { PopupForm } from "./popup.js";


console.log(`main loaded`);

let popupForm = new PopupForm()
new Table(database, popupForm)