import { setAttributesByArray as easySet, divWithImages } from "./helper.js";

/*
const selectedElement = document.querySelector(".header__navbar__title__without-space");

const bigPinkUnderlineLetters = ["font-weight: 800", "color: pink", "text-decoration: underline"]

easySet(selectedElement, bigPinkUnderlineLetters);
*/

const showCaseImages = ["../jpg/keyboard.jpg", "../jpg/plane.jpg", "../jpg/moon.jpg"];

//const imageInDiv = ["width: 100%", "height: 100%"]

const imageDiv = divWithImages(showCaseImages);

imageDiv.id = "slider";

const starttingPosition = "main";

const belowElement = document.querySelector(".main__pricing");

imageDiv.className = starttingPosition + "__slider";

belowElement.after(imageDiv);

class Slider {
    constructor(id) {
        this.id = id;
        this.classPosition = document.getElementById(this.id).className;
        this.imageContainerPosition = this.classPosition + "__image-container";
        this.dotContainerPosition = this.classPosition + "__dot-container";
        this.prevPositionButton = this.classPosition + "__prev";
        this.nextPositionButton = this.classPosition + "__next";
    }

    //classPosition = document.getElementById(this.id).className;

    createSlider() {
        //const classPosition = document.getElementById(this.id).className;
        const container = document.getElementsByClassName(this.classPosition)[0];
        easySet (container, ["max-width: 65%", "max-height:1%","position: relative", "margin: auto"]);
        //const imageContainerPosition = classPosition + "__image-container";
        const imagePosition = this.imageContainerPosition + "__image";
        let imageCount = 0;

        //reduce images
        for (const child of container.children) {
            easySet(child, ["width: 100%"]);
            imageCount++;
            child.className = imagePosition + imageCount;
        }

        //encapsulate images
        for (let i = 1; (imageCount + 1) > i; ++i) {
            const position = imagePosition + i;
            const classElement = document.getElementsByClassName(position)[0];
            const encapsulationDiv = document.createElement("div");
            encapsulationDiv.className = `${this.imageContainerPosition} fade `;
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
                            "background-color: #00000050",
                            "font-weight: bold",
                            "font-size: 18px",
                            "transition: 0.6s ease",
                            "border: 1px solid #fff5ee",
                            "border-radius: 50px",
                            "user-select: none"];
        const prev = document.createElement("a");
        container.appendChild(prev);
        prev.appendChild(document.createTextNode('\u276E'));
        prev.className = this.prevPositionButton;
        easySet(prev, buttonStyle);
        const next = document.createElement("a");
        container.appendChild(next);
        next.appendChild(document.createTextNode('\u276F'));
        next.className = this.nextPositionButton;
        const nextButtonStyle = buttonStyle.concat(["right: 0"]);
        easySet(next, nextButtonStyle);
        
        //create dots
        const dotContainer = document.createElement("div");
        container.appendChild(dotContainer);
        //const dotPosition = this.classPosition + "__dot-container";
        dotContainer.className = this.dotContainerPosition;
        easySet(dotContainer, ["text-align:center"]);
        for (let i = 1; (imageCount + 1) > i; ++i) {
            const dot = document.createElement("span");
            dot.className = dotContainer.className + `__dot-${i}`;
            dotContainer.appendChild(dot);
            easySet(dot, ["cursor: pointer",
                            "height: 15px",
                            "width: 15px",
                            "margin: 0 2px",
                            "background-color: #bbb",
                            "border-radius: 50%",
                            "display: inline-block",
                            "transition: background-color 0.6s ease",
                            "transform: translateY(-25px)"]
            )
            dot.addEventListener('mouseover',() => {
                dot.style.backgroundColor = "#717171";
            })
            dot.addEventListener('mouseout',() => {
                dot.style.backgroundColor = "#bbb";
            })
        }
        console.log(this.imageContainerPosition);

    }

    startLogic() {
        let slideIndex = 1;

        const showSlides = (n) =>{
          let i;
          console.log(this.imageContainerPosition);
          let slides = document.getElementsByClassName(this.imageContainerPosition);
          let dots = document.getElementsByClassName(this.dotContainerPosition)[0].children;
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }

          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
        }

        showSlides(slideIndex);

        // Next/previous controls
        document.getElementsByClassName(this.prevPositionButton)[0].addEventListener("click", () => {
            showSlides(slideIndex += -1);
        })

        document.getElementsByClassName(this.nextPositionButton)[0].addEventListener("click", () => {
            showSlides(slideIndex += 1);
        })


        function plusSlides(n) {
            showSlides(slideIndex += n);
          }
          
          // Thumbnail image controls
          function currentSlide(n) {
            showSlides(slideIndex = n);
          }
    }

}



const mySlider = new Slider(imageDiv.id)

mySlider.createSlider();
mySlider.startLogic();

//const atributteExample = ["height: 300px"];

//mySlider.setAttributes(atributteExample);
