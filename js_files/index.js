import { setAttributesByArray as easySet, divWithImages } from "./helper.js";

/*
const selectedElement = document.querySelector(".header__navbar__title__without-space");

const bigPinkUnderlineLetters = ["font-weight: 800", "color: pink", "text-decoration: underline"]

easySet(selectedElement, bigPinkUnderlineLetters);
*/

const showCaseImages = ["../jpg/keyboard.jpg", "../jpg/moon.jpg", "../jpg/plane.jpg"];

//const imageInDiv = ["width: 100%", "height: 100%"]

const imageDiv = divWithImages(showCaseImages);

imageDiv.id = "slider";

const pricingClass = "main__pricing";

const belowPricing = document.getElementsByClassName(pricingClass)[0];

imageDiv.className = pricingClass + "__slider";

belowPricing.appendChild(imageDiv);
//imageDiv.after(belowPricing);

class Slider {
    constructor(id) {
        this.id = id;
        this.sliderDiv = document.querySelector(`#${id}`);
    }

    createSlider() {
        const classPosition = document.getElementById(this.id).className;
        const container = document.getElementsByClassName(classPosition)[0];
        easySet (container, ["max-width: 90%", "position: relative", "margin: auto"]);
        const imageContainerPosition = classPosition + "__image-container";
        const imagePosition = imageContainerPosition + "__image";
        let imageCount = 0;
        //reduce images
        for (const child of this.sliderDiv.children) {
            easySet(child, ["width: 100%"]);
            imageCount++;
            child.className = imagePosition + imageCount;
        }

        //encapsulate images
        for (let i = 1; (imageCount + 1) > i; ++i) {
            const position = imagePosition + i;
            const classElement = document.getElementsByClassName(position)[0];
            const encapsulationDiv = document.createElement("div");
            encapsulationDiv.className = `${imageContainerPosition} fade `;
            classElement.before(encapsulationDiv);
            encapsulationDiv.appendChild(classElement);
            easySet(encapsulationDiv, ["display: none"]);
        }

        //create buttons
        const buttonStyle = ["cursor: pointer", 
                            "position: absolute", 
                            "top: 50%", "width: auto", 
                            "margin-top: -22px",
                            "padding: 6px 12px",
                            "color: #fff5ee",
                            "background-color: #fff5ee50",
                            "font-weight: bold",
                            "font-size: 18px",
                            "transition: 0.6s ease",
                            "border: 1px solid #fff5ee",
                            "border-radius: 50px",
                            "user-select: none"];
        const prev = document.createElement("a");
        container.appendChild(prev);
        prev.appendChild(document.createTextNode('\u276E'));
        prev.className = classPosition + "__prev";
        easySet(prev, buttonStyle);
        const next = document.createElement("a");
        container.appendChild(next);
        next.appendChild(document.createTextNode('\u276F'));
        next.className = classPosition + "__next";
        const nextButtonStyle = buttonStyle.concat(["right: 0"]);
        console.log(buttonStyle);
        console.log(nextButtonStyle);
        easySet(next, nextButtonStyle);
        


    }

    setAttributes(attributeArray) {
        easySet(this.sliderDiv, attributeArray);
    }
}



const mySlider = new Slider(imageDiv.id)

mySlider.createSlider();

//const atributteExample = ["height: 300px"];

//mySlider.setAttributes(atributteExample);
