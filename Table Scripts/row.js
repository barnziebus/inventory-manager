export class Row{
    constructor(rowContainer, rowData, popupForm) {
        this.popupForm = popupForm;
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

        this.buildRow(popupForm);
    }

    buildRow(popupForm) {
        for (let element in this.cellContainers) {
            this.rowContainer.appendChild(this.cellContainers[element]);
        };
        this.populateData(this.cellContainers, this.rowData);
        //this.addDeleteButton(this.cellContainers['delete'])
        this.setRowListener(popupForm)
    };

    setRowListener(popupForm) {
        this.rowContainer.addEventListener("click", () => {
            popupForm.openPopupForm(this.rowData) //function to open the popup form goes here
        })
    }

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
        color = color.replace(/^#/, '');
        const r = parseInt(color.slice(0, 2), 16);
        const g = parseInt(color.slice(2, 4), 16);
        const b = parseInt(color.slice(4, 6), 16);
      
        // Calculate relative luminance
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      
        // Choose contrasting color
        if (luminance > 0.5) {
            cellContainer.style.color = '#000000'; // Black for lighter colors
        } else {
            cellContainer.style.color = '#FFFFFF'; // White for darker colors
        }
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
        
        let wishlist = this.rowData['wishlist'];
        let wishlistText = "❌";
        if (wishlist) {
            wishlistText = "✅"
        }

        wishlistEl.innerText = wishlistText;
        cellContainer.appendChild(wishlistEl);
    }

    price(cellContainer) {
        let priceEl = document.createElement("span");
        priceEl.innerText = "£" + this.rowData["price"];
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

    updateRow(owned, wishlist, price) {
        //console.log(`update row: - owned var: ${owned}, wishlist var: ${wishlist}, price var: ${price}`)

        let ownedCell = this.cellContainers["owned"].getElementsByTagName("span")[0];
        let wishlistCell = this.cellContainers["wishlist"].getElementsByTagName("span")[0];
        let priceCell = this.cellContainers["price"].getElementsByTagName("span")[0];

        if (owned !== '') {
            ownedCell.textContent = owned;
        };

        if (wishlist !== "") {
            wishlistCell.innerText = wishlist;
        };

        if (price !== "") {
            priceCell.innerText = price;
        };
        
    }
}