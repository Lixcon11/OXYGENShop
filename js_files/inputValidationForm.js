import sendData from "./apiToFetch.js"

const email = document.querySelector("#email");
const name = document.querySelector("#name");
const checkbox = document.querySelector(".main__questions__invoice__check-container__checkbox");
const checkmark = document.querySelector(".main__questions__invoice__check-container__checkmark");
const sendButton = document.querySelector(".main__questions__invoice__button-container__button");
const invalidFormClass = "main__questions__invoice__input--invalid-input";
const uncheckedClass = "main__questions__invoice__check-container__checkmark--unchecked";
const validEmail = "https://www.emailregex.com/"

const checkValidation = () => {
    sendButton.addEventListener("click",() => {
        const nameCondition = wordChecker(name.value) && name.value.length >= 2 && name.value.length <= 100;
        const emailCondition = email.value == validEmail;
        const checkCondition = checkbox.checked;

        checkIfValid(nameCondition, name, invalidFormClass)
        checkIfValid(emailCondition, email, invalidFormClass)
        checkIfValid(checkCondition, checkmark, uncheckedClass)

        if(nameCondition && emailCondition && checkCondition) {
            sendData({name: name.value, email: email.value});
        }
        
    })  
}

const checkIfValid = (condition, object, style) => {
    if(condition) {
        object.classList.remove(style)
    }
    else {
        object.classList.add(style)
    }
}
const wordChecker = (word) => {
    return [...word].every(char => isNaN(char))
}



export default checkValidation;
export { checkIfValid, wordChecker, validEmail};