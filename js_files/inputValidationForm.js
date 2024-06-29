import sendData from "./apiToFetch.js"

const email = document.querySelector("#email");
const emailWarning = document.querySelector("#emailWarning");
const name = document.querySelector("#name");
const nameWarning = document.querySelector("#nameWarning");
const checkbox = document.querySelector(".main__questions__invoice__check-container__checkbox");
const checkmark = document.querySelector(".main__questions__invoice__check-container__checkmark");
const sendButton = document.querySelector(".main__questions__invoice__button-container__button");
const invalidFormClass = "main__questions__invoice__container__input--invalid-input";
const invalidFormWarningClass = "main__questions__invoice__container__symbol--invalid"
const uncheckedClass = "main__questions__invoice__check-container__checkmark--unchecked";
const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const checkValidation = () => {
    sendButton.addEventListener("click",() => {
        const nameCondition = wordChecker(name.value) && name.value.length >= 2 && name.value.length <= 100;
        const emailCondition = validEmail.test(email.value);
        const checkCondition = checkbox.checked;

        checkIfValid(nameCondition, [name, nameWarning], [invalidFormClass, invalidFormWarningClass])
        checkIfValid(emailCondition, [email, emailWarning], [invalidFormClass, invalidFormWarningClass])
        checkIfValid(checkCondition, [checkmark], [uncheckedClass])

        if(nameCondition && emailCondition && checkCondition) {
            sendData({name: name.value, email: email.value});
        }
        
    })  
}

const checkIfValid = (condition, object, style) => {
    if(condition) {
        for(let i = 0; object.length > i; i++) {
            object[i].classList.remove(style[i])
        }
    }
    else {
        console.log("asdasd")
        for(let i = 0; object.length > i; i++) {
            object[i].classList.add(style[i])
        }
    }
}
const wordChecker = (word) => {
    return [...word].every(char => isNaN(char))
}



export default checkValidation;
export { checkIfValid, wordChecker, validEmail};