//import { setAttributesByArray as easySet, divWithImages } from "./helper.js";
import sliderBuilder from "./sliderBuilder.js";
import eventFromButtons from "./bottomsCurrency.js";
import getUp from "./upButton.js";
import checkValidation from "./inputValidationForm.js";
import getPopup from "./popup.js"
import activateProgressBar from "./activateProgressBar.js"

//create Slider
const showCaseImages = ["./jpg/keyboard.jpg", "./jpg/plane.jpg", "./jpg/moon.jpg"];

sliderBuilder("slider", "main", "main__questions", showCaseImages);

//Botton Currency
eventFromButtons();

//Up Button
getUp();


//Form input
checkValidation();

//Popup
getPopup();

//ProgressBar
activateProgressBar();