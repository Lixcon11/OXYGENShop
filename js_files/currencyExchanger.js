const getCurrencyExchange = async (from, to) => {
    const baseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
    const params = `${from}.json`
    const urlToFetch = baseUrl + params;
    try {
        const response = await fetch(urlToFetch);
        if(response.ok) {
            const jsonResponse = await response.json();
            const exchange = jsonResponse[from][to];
            return exchange;
        }
    }
    catch(e) {
        console.log(e);
    }
}

export default getCurrencyExchange;