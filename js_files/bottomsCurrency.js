import { setCurrencyEvent } from "./currencyEvents.js";

const eventFromButtons = () => {
    const basicElement = document.querySelector(".main__pricing__options-container__option__features__header__price--red");
    const professionalElement = document.querySelector(".main__pricing__options-container__option__features__header__price--blue");
    const premiumElement = document.querySelector(".main__pricing__options-container__option__features__header__price--green");
    const eurButton = document.querySelector(".main__pricing__divise-options__button--EUR");
    const gbpButton = document.querySelector(".main__pricing__divise-options__button--GBP");
    const usdButton = document.querySelector(".main__pricing__divise-options__button--USD");
    const currencyTextObjects = [basicElement, professionalElement, premiumElement]
    const currencyButtons = [[eurButton, "eur"], [gbpButton, "gbp"], [usdButton, "usd"]];

    setCurrencyEvent(currencyTextObjects, currencyButtons);
}

export default eventFromButtons;