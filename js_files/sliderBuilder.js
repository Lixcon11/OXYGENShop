import Slider from "./slider.js";
import { divWithImages } from "./helper.js";

const sliderBuilder = (idName, startPosition, aboveElementPosition, images) => {
    const imageDiv = divWithImages(images);

    imageDiv.id = idName;
    
    const aboveElement = document.querySelector(`.${aboveElementPosition}`);
    
    imageDiv.className = `${startPosition}__slider`;
    
    aboveElement.before(imageDiv);

    const mySlider = new Slider(imageDiv.id)
};

export default sliderBuilder;