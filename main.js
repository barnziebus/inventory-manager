import { database } from "./database.js";
import { Row } from "./row.js";


console.log(`main loaded`);

buildTable()

function buildTable() {
  let table = document.getElementById("databaseTable");
  for (let paint in database.paints) {
    let newRow = document.createElement("tr");
    if (paint !== 'paint name') {
      let inputData = database['paints'][paint]
      new Row(newRow, inputData)
      table.appendChild(newRow)
    }
  }
}

// function buildTable() {
//   let table = document.getElementById("databaseTable");
//   let newRow = document.createElement("tr");
//   for (let paint in database.paints) {
//     if (paint !== 'paint name') {
//       let inputData = database['paints'][paint]
//       buildRow(paint, inputData, table)
//     }
//   }
// }

// function buildRow(rowName, rowData, tableElement) {
//   let newRow = document.createElement("tr");
//   let nameCell = document.createElement("td");
//   let paintCol = document.createElement("td");
//   let paintType = document.createElement("td");
//   let owned = document.createElement("td");
//   let wishlist = document.createElement("td");
//   let price = document.createElement("td");
//   let deleteCell = document.createElement("td");

//   nameCell.innerText = rowName
//   paintCol.innerText = rowData['color type'];
//   paintType.innerText = rowData['range'];

//   paintCol.style.backgroundColor = rowData['hex']
//   paintCol.style.color = getContrastColor(rowData['hex'])

//   newRow.appendChild(nameCell)
//   newRow.appendChild(paintCol)
//   newRow.appendChild(paintType)

//   tableElement.appendChild(newRow)

// }

// function getContrastColor(hexColor) {
//   // Remove the # symbol if it exists
//   hexColor = hexColor.replace(/^#/, '');

//   // Convert the hex color to RGB
//   const r = parseInt(hexColor.slice(0, 2), 16);
//   const g = parseInt(hexColor.slice(2, 4), 16);
//   const b = parseInt(hexColor.slice(4, 6), 16);

//   // Calculate the relative luminance (perceived brightness)
//   const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

//   // Choose a contrasting text color based on luminance
//   return luminance > 0.5 ? 'black' : 'white';
// }

// function sortTable(columnIndex) {
//   const table = document.getElementById("databaseTable");
//   const rows = Array.from(table.getElementsByTagName("tr"));
  
//   rows.shift(); // Remove the table header row from the array
  
//   rows.sort((a, b) => {
//     const cellA = a.getElementsByTagName("td")[columnIndex].textContent;
//     const cellB = b.getElementsByTagName("td")[columnIndex].textContent;
    
//     // You can modify the comparison logic here based on your data type
//     return cellA.localeCompare(cellB);
//   });
  
//   // Clear the table body
//   const tbody = table.getElementsByTagName("tbody")[0];
//   while (tbody.firstChild) {
//     tbody.removeChild(tbody.firstChild);
//   }
  
//   // Append sorted rows to the table body
//   rows.forEach((row) => {
//     tbody.appendChild(row);
//   });
// }