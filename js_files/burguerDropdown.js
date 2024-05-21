const dropdown = () => {
    const burger = document.querySelector(".header__navbar__menu__image");
    const cross = document.querySelector(".header__navbar__menu__close");
    const dropDown = document.querySelector(".header__navbar__dropdown");
    const widthMatch = window.matchMedia("(min-width: 1000px)")

    const dropdownState = state => {
        cross.classList[`${state}`]("block");
        dropDown.classList[`${state}`]("block");
        burger.classList[`${state}`]("none");
    }

    burger.addEventListener("click", () => {
        dropdownState("add");
    });
    cross.addEventListener("click", () => {
        dropdownState("remove");
    });
    widthMatch.addEventListener("change", (mm) => {
        
        if (mm.matches) {
            dropdownState("remove");
        }
    })
}

export default dropdown;