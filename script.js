async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const selectedCurrency = document.getElementById('currency').value;

    try {
      const apiKey = 'd56e6e2b26efafb319681734';
      const apiUrl = `https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      const exchangeRates = data.rates;

      if (exchangeRates[selectedCurrency] !== undefined) {
        const convertedAmount = (amount * exchangeRates[selectedCurrency]).toFixed(2);
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `Converted Amount:<br>
                                   ${convertedAmount} ${selectedCurrency}`;
      } else {
        alert("Exchange rate not available for the selected currency.");
      }
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
      alert("An error occurred while fetching exchange rates. Please try again later.");
    }
  }