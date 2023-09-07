import { Row } from "./row.js";

export class Table{
    constructor(database) {
        this.table = document.getElementById("databaseTable");

        this.headerEls = {
            "name": document.getElementById("nameHeader"),
            "color": document.getElementById("colorHeader"),
            "type": document.getElementById("typeHeader"),
            "owned": document.getElementById("ownedHeader"),
            "wishlist": document.getElementById("wishlistHeader"),
            "price": document.getElementById("priceHeader"),
            "delete": document.getElementById("deleteHeader"),
        };

        this.searchEls = {
            "name": document.getElementById("nameSearchInput"),
            "color": document.getElementById("colorSearchInput"),
            "type": document.getElementById("typeSearchInput"),
            "owned": document.getElementById("ownedSearchInput"),
            "wishlist": document.getElementById("wishlistSearchInput"),
            "price": document.getElementById("priceSearchInput"),
        }

        this.buildTable(database)
        this.setHeaderListeners()
        this.setSearchListeneres()
    }

    buildTable(database) {
        for (let paint in database.paints) {
            let newRow = document.createElement("tr");
            if (paint !== 'paint name') {
            let inputData = database['paints'][paint]
            new Row(newRow, inputData)
            this.table.appendChild(newRow)
            }
        }
    }

    setSearchListeneres() {
        this.searchEls["name"].addEventListener("input", () => {
            this.searchTableCol(this.searchEls["name"], 0)
        })
        this.searchEls["color"].addEventListener("input", () => {
            this.searchTableCol(this.searchEls["color"], 1)
        })
        this.searchEls["type"].addEventListener("input", () => {
            this.searchTableCol(this.searchEls["type"], 2)
        })
        this.searchEls["owned"].addEventListener("input", () => {
            this.searchTableCol(this.searchEls["owned"], 3)
        })
        this.searchEls["wishlist"].addEventListener("input", () => {
            this.searchTableCol(this.searchEls["wishlist"], 4)
        })
        this.searchEls["price"].addEventListener("input", () => {
            this.searchTableCol(this.searchEls["price"], 5)
        })
    }

    setHeaderListeners() {
        this.headerEls["name"].addEventListener("click", () => {
            this.sortTable(0)
        })
        this.headerEls["color"].addEventListener("click", () => {
            this.sortTable(1)
        })
        this.headerEls["type"].addEventListener("click", () => {
            this.sortTable(2)
        })
        this.headerEls["owned"].addEventListener("click", () => {
            this.sortTable(3)
        })
        this.headerEls["wishlist"].addEventListener("click", () => {
            this.sortTable(4)
        })
        this.headerEls["price"].addEventListener("click", () => {
            this.sortTable(5)
        })
        
    }

    searchTableCol(inputEl, columnIndex) {
        let filter = inputEl.value.toUpperCase();
        let rows = this.table.getElementsByTagName("tr");

        for (let i=2; i < rows.length; i++) {
            let td = rows[i].getElementsByTagName("span")[columnIndex];
            if (td) {
                let textValue = td.textContent || td.innerText;
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none"
                }
            }
        }
    }

    sortTable(n) {
        let switching = true;
        let dir = "asc";
        let switchCount = 0;
        let shouldSwitch
        let i

        while(switching) {
            switching = false;
            let rows = this.table.rows;

            for (i=2; i < (rows.length - 1); i++) { //loop through all rows except the header row
                shouldSwitch = false;

                let x = rows[i].getElementsByTagName("span")[n];
                let y = rows[i + 1].getElementsByTagName("span")[n];

                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }

            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchCount ++;
            } else {
                if (switchCount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }

}
