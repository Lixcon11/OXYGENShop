import sliderBuilder from "./sliderBuilder.js";
import eventFromButtons from "./bottomsCurrency.js";
import getUp from "./upButton.js";
import checkValidation from "./inputValidationForm.js";
import getPopup from "./popup.js"
import activateProgressBar from "./activateProgressBar.js"
import displayDropdow from "./burguerDropdown.js";
import Slider from "./slider.js";

//create Slider
//const showCaseImages = [ "./jpg/plane.jpg", "./jpg/moon.jpg", "./jpg/be-you.jpg"];
//sliderBuilder("anotherslider", "main", "main__questions", showCaseImages);

//activate Slider
const newSlider = new Slider("slider");

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

//burger
displayDropdow();