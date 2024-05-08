import sendData from "./apiToFetch.js"

const email = document.querySelector("#email");
const name = document.querySelector("#name");
const checkbox = document.querySelector(".main__questions__invoice__check-container__checkbox");
const checkmark = document.querySelector(".main__questions__invoice__check-container__checkmark");
const sendButton = document.querySelector(".main__questions__invoice__button-container__button");
const invalidFormClass = "main__questions__invoice__input--invalid-input";
const uncheckedClass = "main__questions__invoice__check-container__checkmark--unchecked";

const wordChecker = (word) => {
    return [...word].every(char => isNaN(char))
}
const checkValidation = () => {
    sendButton.addEventListener("click",() => {
    
        if(wordChecker(name.value)) {
            name.classList.remove(invalidFormClass);
        }
        else if(!wordChecker(name.value)) {
            name.classList.add(invalidFormClass);
        }
        if(email.value == "https://www.emailregex.com/") {
            email.classList.remove(invalidFormClass);
        }
        else if(email.value != "https://www.emailregex.com/") {
            email.classList.add(invalidFormClass);
        }
        if(checkbox.checked) {
            checkmark.classList.remove(uncheckedClass);
        }
        else if(!checkbox.checked) {
            checkmark.classList.add(uncheckedClass);
        }
    
        if(wordChecker(name.value) && email.value == "https://www.emailregex.com/" && checkbox.checked) {
            sendData({name: name.value, email: email.value});
        }
    })  
}

export default checkValidation;