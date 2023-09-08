export class PopupForm{
    constructor() {
        this.popupBackground = document.getElementById("popup-background");
        this.popupForm = document.getElementById("popup-form");

        this.popupEls = {
            name: document.getElementById("formName"),
            color: document.getElementById("formColour"),
            colorSwatch: document.getElementById("colorSwatch"),
            type: document.getElementById("formType"),
            owned: document.getElementById("formOwned"),
            wishlist: document.getElementById("formWishlist"),
            price: document.getElementById("formPrice")
        }

        this.addListeners()
    }

    addListeners() {
        this.popupBackground.addEventListener("click", (event) => {
            // Check if the clicked element is NOT a descendant of the popup form
            event.preventDefault()
            if (!this.popupForm.contains(event.target)) {
                this.closePopupForm();
            }
        });
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

    closePopupForm() {
        console.log("close popup")

        this.popupBackground.style.display = "none";
        this.popupForm.style.display = "none"
    }

    setFormHeading(paintName) {
        this.popupEls["name"].innerText = paintName
    }

    setFormColour(paintHex) {
        this.popupEls["color"].innerText = paintHex
        this.popupEls["colorSwatch"].style.backgroundColor = paintHex
    }

    setFormType(paintType) {
        this.popupEls["type"].innerText = paintType
    }

    setFormOwned(owned) {
        this.popupEls["owned"].placeholder = owned
    }

    setFormWishlist(wishlist) {
        this.popupEls["wishlist"].placeholder = wishlist
    }

    setFormPrice(price) {
        this.popupEls["price"].placeholder = "£" + price
    }
}