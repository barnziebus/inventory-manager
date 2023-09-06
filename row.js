export class Row{
    constructor(rowContainer, rowData) {
        this.rowContainer = rowContainer;
        this.rowData = rowData;
        this.cellContainers = {
            "name": document.createElement("td"),
            "color": document.createElement("td"),
            "type": document.createElement("td"),
            "owned": document.createElement("td"),
            "wishlist": document.createElement("td"),
            "price": document.createElement("td"),
            "delete": document.createElement("td"),
        };

        this.buildRow();
    }

    buildRow() {
        for (let element in this.cellContainers) {
            this.rowContainer.appendChild(this.cellContainers[element]);
        };
        this.populateData(this.cellContainers, this.rowData);
        this.addDeleteButton(this.cellContainers['delete'])
    };

    populateData(containers, rowData) {
        this.paintName(containers['name'], rowData['name']);
        this.paintCol(containers['color'], rowData["hex"]);
        this.paintType(containers["type"], rowData["type"]);
        this.owned(containers['owned'], rowData["owned"]);
        this.wishlist(containers['wishlist'], rowData["wishlist"]);
        this.price(containers["price"], rowData["price"]);
    }

    paintName(cellContainer, name) {
        let paintNameEl = document.createElement("span");
        paintNameEl.innerText = name
        cellContainer.appendChild(paintNameEl)

        //format func here to capitalise each word
    }

    paintCol(cellContainer, color) {
        let paintColEl = document.createElement("span");
        paintColEl.innerText = color

        cellContainer.style.backgroundColor = color
        cellContainer.appendChild(paintColEl)
        
        //function to determine text colour based on background col
    }

    paintType(cellContainer) {
        let paintTypeEl = document.createElement("span");
        paintTypeEl.innerText = this.rowData['type'];
        cellContainer.appendChild(paintTypeEl);
    }

    owned(cellContainer) {
        let ownedEl = document.createElement("span");
        ownedEl.innerText = this.rowData['owned']
        cellContainer.appendChild(ownedEl);
    }

    wishlist(cellContainer) {
        let wishlistEl = document.createElement("span");
        wishlistEl.innerText = this.rowData['wishlist'];
        cellContainer.appendChild(wishlistEl);
    }

    price(cellContainer) {
        let priceEl = document.createElement("span");
        priceEl.innerText = this.rowData["price"];
        cellContainer.appendChild(priceEl)
    }

    addDeleteButton(cellContainer) {
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "❌"
        cellContainer.appendChild(deleteButton)

        deleteButton.addEventListener("click", () => {
            this.rowContainer.remove()
        })
    }
}