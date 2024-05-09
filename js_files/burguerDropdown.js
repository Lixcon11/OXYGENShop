const burger = document.querySelector(".header__navbar__menu__img");
const cross = document.querySelector(".header__navbar__menu__close");
const dropDown = document.querySelector(".header__navbar__dropdown");

const dropdown = () => {
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
}

export default dropdown;