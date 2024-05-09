import { checkIfValid, validEmail } from "./inputValidationForm.js";
import sendData from "./apiToFetch.js"

//localStorage.removeItem("main__popup");
const popup = document.querySelector(".main__popup");
const popupInput = document.querySelector(".main__popup__content__input");
const popupButton = document.querySelector(".main__popup__content__button-container__button");
const popupCross = document.querySelector(".main__popup__content__close");

const getPopup = () => {
    const exit = () => {
        popup.style.display = "none";
        localStorage.setItem("main__popup", "true");
    }
    setTimeout(() => {
        if(!localStorage.getItem("main__popup")) {
            popup.style.display = "block";
        }
    }, 5000);
    window.addEventListener("scroll", () => {
        if(window.scrollY > document.documentElement.offsetHeight/4 && !localStorage.getItem("main__popup")){
            popup.style.display = "block";
        }
    });
    popupButton.addEventListener("click", () => {
        checkIfValid(popupInput.value == validEmail, popupInput, "main__popup__content__input--invalid-input");

        if(popupInput.value == validEmail) {
            sendData({email: popupInput.value})
        }
    })
    popupCross.addEventListener("click", () => {
        exit();
    })
    window.addEventListener("click", (event) => {
        if(event.target === popup) {
            exit();
        }
    })
    const EscapePressed = () => {
        exit();
        document.removeEventListener('keydown', OnEscapePressed);
    };
    const OnEscapePressed = (event) => event.key === 'Escape' && EscapePressed();
    document.addEventListener('keydown', OnEscapePressed);
}

export default getPopup;