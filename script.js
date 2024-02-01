const wrapper = document.getElementById("coin-wrapper")

const fetchCoins = async () => {
   const response = await fetch ("https://api.coincap.io/v2/assets?" +
   new URLSearchParams({
    limit: 20,
   })
   )
    const coins = await response.json()
    console.log(coins);

    coins.data.sort((a, b) => a.name.localeCompare(b.name));


    coins.data.forEach((coin) => {
        const card = document.createElement('div')
        card.setAttribute("class", "bitcoin-card")
        card.innerHTML = coin.name + ' - ' + coin.priceUsd
        card.addEventListener('click', () => {
            console.log(coin.name);
        })

        coin.priceUsd > 100 ? card.setAttribute("class", "golden-card bitcoin-card") : card.setAttribute("class", "silver-card bitcoin-card")
        
        console.log(coin);
        wrapper.append(card)
    })
}

fetchCoins()