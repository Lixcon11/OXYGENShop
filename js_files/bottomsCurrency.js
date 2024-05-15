import getCurrencyExchange from "./currencyExchanger.js";

const currencySymbols = {eur: {symbol: "€", goesLeft: false}, usd: {symbol: "$", goesLeft: true}, gbp: {symbol: "£", goesLeft: true}}
const setText = (prices, currency) => {
    const textArray = [];
    const symbol =currencySymbols[currency].symbol;
    let i = 0;
    if(currencySymbols[currency].goesLeft) {
        for(let price in prices) {
            textArray[i] = `${symbol}${prices[price]}`
            i++;
        }
    }
    else {
        for(let price in prices) {
            textArray[i] = `${prices[price]}${symbol}`
            i++;
        }
    }
    return textArray;
};
const currencyExchanger = async (defaultCurrency, exchanceCurrency, basePrices) => {
    const newExchangePrices = {}
    for(let price in basePrices) {
        newExchangePrices[price] = 0;
    }
    
    const exchange = await getCurrencyExchange(exchanceCurrency , defaultCurrency);
    for(let price in newExchangePrices) {
        newExchangePrices[price] = Math.round(basePrices[price] * exchange);
    }
    return newExchangePrices;
};
const changeCurrency = async (contentsToChange, newCurrency, defaultValues) => {
    let newText = "";
    if(newCurrency === defaultValues.currency) {
        newText = setText(defaultValues.baseNumbers, defaultValues.currency);
    }
    else {
        newText = setText( await currencyExchanger(defaultValues.currency, newCurrency, defaultValues.baseNumbers), newCurrency)
    }
    contentsToChange.forEach((content, i) => {
        content.textContent = newText[i];
    })
};
const getCurrencyObjects = (array) => {
    const newArray = [];
    for(let i = 0; array.length > i; ++i) {
        newArray.push({trigger: array[i][0], currency: array[i][1]})
    }
    return newArray;
};
const setCurrencyEvent = (currencyTextObjects, currencyButtons) => {
    const objects = getCurrencyObjects(currencyButtons);
    const defaultValues = {currency: "", baseNumbers: []}
    for(let currency in currencySymbols) {
        if(currencyTextObjects[0].textContent.includes(currencySymbols[currency].symbol)) {
            defaultValues.currency = currency;
        }
    }
    for(let object of currencyTextObjects) {
        defaultValues.baseNumbers.push(parseFloat(object.textContent.replace(currencySymbols[defaultValues.currency].symbol, "")))
    }
    for(let object of objects) {
        object.trigger.addEventListener("click", () => {
            changeCurrency(currencyTextObjects, object.currency, defaultValues);
        })
    }
};

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