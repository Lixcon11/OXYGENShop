import Slider from "./slider.js";

const sliderBuilder = (idName, startPosition, aboveElementPosition, images) => {
    const imageDiv = divWithImages(images);
    imageDiv.id = idName;
    const aboveElement = document.querySelector(`.${aboveElementPosition}`);
    aboveElement.before(imageDiv);
    const mySlider = new Slider(imageDiv.id)
};

const divWithImages = (imageArray) => {
    const newDiv = document.createElement("div");

    imageArray.forEach(element => {
        const image = new Image();
        image.src = element;
        newDiv.appendChild(image);
    });
    return newDiv;
};

export default sliderBuilder;