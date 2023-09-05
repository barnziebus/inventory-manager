import { database } from "./database.js";



console.log(`main loaded`);

buildTable()

function buildTable() {
  let table = document.getElementById("databaseTable");
  let newRow = document.createElement("tr");
  for (let paint in database.paints) {
    if (paint !== 'paint name') {
      let inputData = database['paints'][paint]
      buildRow(paint, inputData, table)
    }
  }
}

function buildRow(rowName, rowData, tableElement) {
  let newRow = document.createElement("tr");
  let nameCell = document.createElement("td");
  let paintCol = document.createElement("td");
  let paintType = document.createElement("td");
  let owned = document.createElement("td");
  let wishlist = document.createElement("td");
  let price = document.createElement("td");
  let deleteCell = document.createElement("td");

  nameCell.innerText = rowName
  paintCol.innerText = rowData['color type'];
  paintType.innerText = rowData['range'];

  paintCol.style.backgroundColor = rowData['hex']
  paintCol.style.color = getContrastColor(rowData['hex'])

  newRow.appendChild(nameCell)
  newRow.appendChild(paintCol)
  newRow.appendChild(paintType)

  tableElement.appendChild(newRow)

}

function getContrastColor(hexColor) {
  // Remove the # symbol if it exists
  hexColor = hexColor.replace(/^#/, '');

  // Convert the hex color to RGB
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  // Calculate the relative luminance (perceived brightness)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Choose a contrasting text color based on luminance
  return luminance > 0.5 ? 'black' : 'white';
}