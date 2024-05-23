const dropdown = () => {
    const burger = document.querySelector(".header__navbar__menu__image");
    const cross = document.querySelector(".header__navbar__menu__close");
    const dropDown = document.querySelector(".header__navbar__dropdown");
    const widthMatch = window.matchMedia("(min-width: 1000px)")
    const isDropdownVisible = answer => {
        const state = answer ? "add": "remove"
        cross.classList[`${state}`]("block");
        dropDown.classList[`${state}`]("block");
        burger.classList[`${state}`]("none");
    }

    burger.addEventListener("click", () => {
        isDropdownVisible(true);
    });
    cross.addEventListener("click", () => {
        isDropdownVisible(false);
    });
    widthMatch.addEventListener("change", (mm) => {
        
        if (mm.matches) {
            isDropdownVisible(false);
        }
    })
}

export default dropdown;