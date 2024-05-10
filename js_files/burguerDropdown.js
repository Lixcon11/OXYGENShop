const dropdown = () => {
    const burger = document.querySelector(".header__navbar__menu__image");
    const cross = document.querySelector(".header__navbar__menu__close");
    const dropDown = document.querySelector(".header__navbar__dropdown");
    const widthMatch = window.matchMedia("(min-width: 1000px)")

    burger.addEventListener("click", () => {
        cross.style.display = "block";
        dropDown.style.display = "block";
        burger.style.display = "none";
    });
    cross.addEventListener("click", () => {
        cross.style.display = "none";
        dropDown.style.display = "none";
        burger.style.display = "inline-block";
    });
    widthMatch.addEventListener("change", (mm) => {
        if (mm.matches) {
            cross.style.display = "none";
            dropDown.style.display = "none";
            burger.style.display = "inline-block";
        }
    })
}

export default dropdown;