export class PopupForm{
    constructor() {
        this.popupBackground = document.getElementById("popup-background");
        this.popupForm = document.getElementById("popup-form");

        this.addListeners()
    }

    addListeners() {
        this.popupBackground.addEventListener("click", (event) => {
            // Check if the clicked element is NOT a descendant of the popup form
            if (!this.popupForm.contains(event.target)) {
                this.closePopupForm();
            }
        });
    }

    openPopupForm() {
        console.log("open popup")

        this.popupBackground.style.display = "block"
        this.popupForm.style.display = "block"
    }

    closePopupForm() {
        console.log("close popup")

        this.popupBackground.style.display = "none";
        this.popupForm.style.display = "none"
    }
}