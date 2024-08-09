// Exchange rates
const exchangeRates = {
    USD: {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110,
        AUD: 1.35
    },
    EUR: {
        USD: 1.18,
        EUR: 1,
        GBP: 0.88,
        JPY: 129.53,
        AUD: 1.59
    },
    GBP: {
        USD: 1.33,
        EUR: 1.14,
        GBP: 1,
        JPY: 147.15,
        AUD: 1.81
    },
    JPY: {
        USD: 0.0091,
        EUR: 0.0077,
        GBP: 0.0068,
        JPY: 1,
        AUD: 0.012
    },
    AUD: {
        USD: 0.74,
        EUR: 0.63,
        GBP: 0.55,
        JPY: 82.29,
        AUD: 1
    }
};

document.getElementById('convert').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('convertedAmount').value = convertedAmount.toFixed(2);
});
