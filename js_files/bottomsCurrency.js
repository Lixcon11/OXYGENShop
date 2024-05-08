import getCurrencyExchange from "./currencyExchanger.js";

const usdBasicPrice = 0;
const usdProfessionalPrice = 25;
const usdPremiumPrice = 60;
const basicElement = document.querySelector(".main__pricing__options-container__option__features__header__price--red");
const professionalElement = document.querySelector(".main__pricing__options-container__option__features__header__price--blue");
const premiumElement = document.querySelector(".main__pricing__options-container__option__features__header__price--green");

const eventFromButtons = () => {

    document.querySelector(".main__pricing__divise-options__button--EUR").addEventListener("click", async () => {
        const eurUsdExchange = await getCurrencyExchange("eur" ,"usd");
        const eurBasicPrice = Math.round(usdBasicPrice * eurUsdExchange);
        const eurProfessionalPrice = Math.round(usdProfessionalPrice * eurUsdExchange);
        const eurPremiumPrice = Math.round(usdPremiumPrice * eurUsdExchange);
        basicElement.textContent = `${eurBasicPrice}€`;
        professionalElement.textContent = `${eurProfessionalPrice}€`;
        premiumElement.textContent = `${eurPremiumPrice}€`;
    })
    
    document.querySelector(".main__pricing__divise-options__button--GBP").addEventListener("click", async () => {
        const gbpUsdExchange = await getCurrencyExchange("gbp" ,"usd");
        const gbpBasicPrice = Math.round(usdBasicPrice * gbpUsdExchange);
        const gbpProfessionalPrice = Math.round(usdProfessionalPrice * gbpUsdExchange);
        const gbpPremiumPrice = Math.round(usdPremiumPrice * gbpUsdExchange);
        basicElement.textContent = `£${gbpBasicPrice}`;
        professionalElement.textContent = `£${gbpProfessionalPrice}`;
        premiumElement.textContent = `£${gbpPremiumPrice}`;
    })
    
    document.querySelector(".main__pricing__divise-options__button--USD").addEventListener("click", () => {
        basicElement.textContent = `$${usdBasicPrice}`;
        professionalElement.textContent = `$${usdProfessionalPrice}`;
        premiumElement.textContent = `$${usdPremiumPrice}`;
    })
}

export default eventFromButtons;