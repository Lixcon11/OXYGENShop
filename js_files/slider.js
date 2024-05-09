import { setAttributesByArray as easySet} from "./helper.js";

class Slider {
    constructor(id) {
        this.id = id;
        this.classPosition = document.getElementById(this.id).className;
        this.imageContainerPosition = this.classPosition + "__image-container";
        this.dotContainerPosition = this.classPosition + "__dot-container";
        this.prevPositionButton = this.classPosition + "__prev";
        this.nextPositionButton = this.classPosition + "__next";
        this.createSlider();
        this.startLogic();
    }

    createSlider() {
        const container = document.getElementsByClassName(this.classPosition)[0];
        easySet (container, ["max-width: 65%", "max-height:1%","position: relative", "margin: 30px auto"]);
        const imagePosition = this.imageContainerPosition + "__image";
        let imageCount = 0;

        //reduce images
        for (const child of container.children) {
            easySet(child, ["width: 100%"]);
            imageCount++;
            child.className = imagePosition + imageCount;
        }

        //encapsulate images
        for(let i = 1; (imageCount + 1) > i; ++i) {
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
        prev.addEventListener('mouseover',() => {
            prev.style.backgroundColor = "#717171";
        })
        prev.addEventListener('mouseout',() => {
            prev.style.backgroundColor = "#00000050";
        })
        const next = document.createElement("a");
        container.appendChild(next);
        next.appendChild(document.createTextNode('\u276F'));
        next.className = this.nextPositionButton;
        const nextButtonStyle = buttonStyle.concat(["right: 0"]);
        easySet(next, nextButtonStyle);
        next.addEventListener('mouseover',() => {
            next.style.backgroundColor = "#717171";
        })
        next.addEventListener('mouseout',() => {
            next.style.backgroundColor = "#00000050";
        })
        
        //create dots
        const dotContainer = document.createElement("div");
        container.appendChild(dotContainer);
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
    }

    startLogic() {
        let slideIndex = 1;
        const slides = document.getElementsByClassName(this.imageContainerPosition);
        const dots = document.getElementsByClassName(this.dotContainerPosition)[0].children;

        const showSlides = (n) =>{
          let i;
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

        document.getElementsByClassName(this.prevPositionButton)[0].addEventListener("click", () => {
            showSlides(slideIndex += -1);
        })

        document.getElementsByClassName(this.nextPositionButton)[0].addEventListener("click", () => {
            showSlides(slideIndex += 1);
        })

        for(let i = 0; dots.length   > i; ++i) {
            dots[i].addEventListener("click", () => {
                showSlides(slideIndex = i+1);
            })
        }

        showSlides(slideIndex);
    }
}

export default Slider;