export class PopupForm{
    constructor(saveData) {
        this.popupBackground = document.getElementById("popup-background");
        this.popupForm = document.getElementById("popup-form");

        this.popupEls = {
            name: document.getElementById("formName"),
            color: document.getElementById("formColour"),
            colorSwatch: document.getElementById("colorSwatch"),
            type: document.getElementById("formType"),
            owned: document.getElementById("formOwned"),
            wishlist: document.getElementById("formWishlist"),
            price: document.getElementById("formPrice"),
            save: document.getElementById("formSave"),
            cancel: document.getElementById("formCancel")
        }

        this.addListeners(saveData)
    }

    addListeners(saveData) {
        this.popupBackground.addEventListener("click", (event) => {
            // Check if the clicked element is NOT a descendant of the popup form
            event.preventDefault()
            if (!this.popupForm.contains(event.target)) {
                this.closePopupForm();
            }
        });

        this.popupEls.save.addEventListener("click", () => {
            this.saveButtonPressed(saveData)
            this.closePopupForm()
        })

        this.popupEls.cancel.addEventListener("click", () => {
            this.closePopupForm()
        })
    }

    openPopupForm(rowData) {
        this.popupBackground.style.display = "block"
        this.popupForm.style.display = "block"

        this.setFormHeading(rowData.name)
        this.setFormColour(rowData.hex)
        this.setFormType(rowData.type)
        this.setFormOwned(rowData.owned)
        this.setFormWishlist(rowData.wishlist)
        this.setFormPrice(rowData.price)
    }

    saveButtonPressed(saveData) {
        let name = this.popupEls["name"].innerText
        let owned = this.popupEls["owned"].value;
        let wishlist = this.popupEls["wishlist"].value;
        let price = this.popupEls["price"].value;

        saveData(name, owned, wishlist, price)
    }

    closePopupForm() {
        this.popupEls["owned"].value = "";
        this.popupEls["wishlist"].value = "";
        this.popupEls["price"].value = "";

        this.popupBackground.style.display = "none";
        this.popupForm.style.display = "none"
    }

    setFormHeading(paintName) {
        this.popupEls["name"].innerText = paintName
    }

    setFormColour(paintHex) {
        this.popupEls["color"].innerText = paintHex;
        // this.popupEls["colorSwatch"].style.backgroundColor = paintHex;
        this.popupForm.style.backgroundColor = paintHex;
    
        // Function to determine text colour based on background color
        let color = paintHex.replace(/^#/, '');
        const r = parseInt(color.slice(0, 2), 16);
        const g = parseInt(color.slice(2, 4), 16);
        const b = parseInt(color.slice(4, 6), 16);
    
        // Calculate relative luminance
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    
        // Choose contrasting color
        const textColor = luminance > 0.5 ? '#000000' : '#FFFFFF';
    
        // Apply the text color to all elements within the popup container
        const popupElements = this.popupForm.querySelectorAll('*');
        popupElements.forEach((element) => {
            element.style.color = textColor;
        });
    }

    setFormType(paintType) {
        this.popupEls["type"].innerText = paintType
    }

    setFormOwned(owned) {
        this.popupEls["owned"].placeholder = owned
    }

    setFormWishlist(wishlist) {
        let wishlistText = "❌";
        if (wishlist) {
            wishlistText = "✅"
        }
        this.popupEls["wishlist"].placeholder = wishlistText
    }

    setFormPrice(price) {
        this.popupEls["price"].placeholder = "£" + price
    }
}