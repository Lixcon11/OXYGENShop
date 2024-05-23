import getCurrencyExchange from "./currencyExchanger.js";

const currencySymbols = {eur: {symbol: "€", goesLeft: false}, usd: {symbol: "$", goesLeft: true}, gbp: {symbol: "£", goesLeft: true}}
const setText = (prices, currency) => {
    const symbol =currencySymbols[currency].symbol;
    let leftSpace ="", rightSpace = "";
    currencySymbols[currency].goesLeft ? leftSpace = symbol: rightSpace = symbol;
    return prices.map(price => `${leftSpace}${price}${rightSpace}`);
};
const changeCurrency = async (contentsToChange, newCurrency, defaultValues) => {
    let newText = "";
    if(newCurrency === defaultValues.currency) {
        newText = setText(defaultValues.baseNumbers, defaultValues.currency);
    }
    else {
        newText = setText(await Promise.all(defaultValues.baseNumbers.map(async price =>
            Math.round(price * await getCurrencyExchange(newCurrency , defaultValues.currency)))), newCurrency)
    }
    contentsToChange.forEach((content, i) => {
        content.textContent = newText[i];
    })
};
export const setCurrencyEvent = (currencyTextObjects, currencyButtons) => {
    const objects = currencyButtons.map(button => ({trigger: button[0],currency: button[1]}))
    const defaultValues = {currency: "", baseNumbers: []}
    for(let currency in currencySymbols) {
        if(currencyTextObjects[0].textContent.includes(currencySymbols[currency].symbol)) {
            defaultValues.currency = currency;
        }
    }
    for(let object of currencyTextObjects) {
        defaultValues.baseNumbers.push(parseFloat(object.textContent.replace(/.*?(([0-9]*\.)?[0-9]+).*/g, "$1")))
    }
    for(let object of objects) {
        object.trigger.addEventListener("click", () => {
            changeCurrency(currencyTextObjects, object.currency, defaultValues);
        })
    }
};