const currency_one = document.getElementById('currency-one')
const amountEl_one = document.getElementById('amount-one');
const currency_two = document.getElementById('currency-two')
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    const currencyOne = currency_one.value;
    const currencyTwo = currency_two.value;

    let myApiKey = "1b2c0bec06f9dba490fed661"

    fetch(`https://v6.exchangerate-api.com/v6/${myApiKey}/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const rate = data.conversion_rates[currencyTwo]
        rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}` 

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

currency_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currency_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currency_one.value

    currency_one.value = currency_two.value
    currency_two.value = temp
    calculate();

})





calculate();

     