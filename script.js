// Function to fetch cryptocurrency data
async function fetchCryptoData() {
    const url = "https://api.coincap.io/v2/assets?limit=14"; // Get top 10 cryptocurrencies
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayCryptoData(data.data);
        console.log(data.data)
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display cryptocurrency data
function displayCryptoData(cryptos) {
    const cryptoList = document.getElementById('coin-List');
    cryptoList.innerHTML = ''; // Clear any existing content

    cryptos.forEach(crypto => {
        const cryptoItem = document.createElement('div');
        cryptoItem.className = 'coin';
        cryptoItem.innerHTML = `
            
            <span>${crypto.name} (${crypto.symbol})</span>
            <span>$${parseFloat(crypto.priceUsd).toFixed(2)}</span>
        `;
        cryptoList.appendChild(cryptoItem);
    });
}

// Fetch and display data on page load
fetchCryptoData();