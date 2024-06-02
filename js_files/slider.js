class Slider {
    constructor(id) {
        this.id = id;
        const element = document.getElementById(this.id);
        this.createSlider(element);
        this.startLogic(element);
    }

    createSlider(element) {
        element.classList.add("slider");
        let imageCount = 0;

        //reduce images
        for (const child of element.children) {
            imageCount++;
            child.classList.add("slider__image-container__image");
        }

        //encapsulate images
        for(let i = 0; imageCount > i; ++i) {
            const image = element.children[`${i}`]
            const encapsulationDiv = document.createElement("div");
            image.before(encapsulationDiv);
            encapsulationDiv.appendChild(image);
            encapsulationDiv.classList.add("slider__image-container", "fade");
        }

        //create buttons
        const prev = document.createElement("a");
        element.appendChild(prev);
        prev.appendChild(document.createTextNode('\u276E'));
        prev.classList.add("slider__button" , "slider__button--prev");
        const next = document.createElement("a");
        element.appendChild(next);
        next.appendChild(document.createTextNode('\u276F'));
        next.classList.add("slider__button" , "slider__button--next");
        
        //create dots
        const dotContainer = document.createElement("div");
        element.appendChild(dotContainer);
        dotContainer.classList.add("slider__dot-container");
        for (let i = 1; (imageCount + 1) > i; ++i) {
            const dot = document.createElement("span");
            dotContainer.appendChild(dot);
            dot.classList.add("slider__dot-container__dot");
        }
    }

    startLogic(element) {
        let slideIndex = 1;
        const slides = element.getElementsByClassName("slider__image-container");
        const dots = element.getElementsByClassName("slider__dot-container")[0].children;
        let timer = setTimeout(() => {
            showSlides(slideIndex += 1);
        }, 5000);
        const showSlides = (n) =>{
            clearTimeout(timer);
            let i;
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].classList.remove("block")
                slides[i].classList.add("none")
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].classList.remove("none")
            slides[slideIndex-1].classList.add("block")
            dots[slideIndex-1].className += " active";
            timer = setTimeout(() => {
                showSlides(slideIndex += 1);
            }, 5000);
        }

        element.getElementsByClassName("slider__button--prev")[0].addEventListener("click", () => {
            showSlides(slideIndex += -1);
        })
        element.getElementsByClassName("slider__button--next")[0].addEventListener("click", () => {
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