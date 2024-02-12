'use strict';

import { currency_list, api } from './currency-codes.js';

const currencyForm = document.querySelector('#currency-form');
const currency1 = document.querySelector('#currency-1');
const currency2 = document.querySelector('#currency-2');
const convert = document.querySelector('.convert');
const result = document.querySelector('.result');

// append the curreny codes list to the list and select defaults
currency_list.forEach((currency) => {
  const code = currency[0];
  const countryName = currency[1];

  const newElement = document.createElement('option');
  newElement.value = code;
  newElement.textContent = `${code} - ${countryName}`;

  if (code === 'USD') newElement.selected = true;

  currency1.append(newElement);

  const newElementTo = newElement.cloneNode(true);

  if (code === 'INR') newElementTo.selected = true;

  currency2.append(newElementTo);
});

// Swap currency on "click"
document.getElementById('swap').onclick = (e) => {
  e.preventDefault();
  const fromValue = currency1.value;
  currency1.value = currency2.value;
  currency2.value = fromValue;
};

// handle "click" event for conversion
convert.onclick = (e) => {
  e.preventDefault();
  const numberInputField = document.getElementById('amount');
  const userEnteredAmount = numberInputField.value;

  if (userEnteredAmount < 1 || isNaN(userEnteredAmount)) {
    numberInputField.style.border = '1px solid red';
    result.style.color = 'red';
    result.textContent = 'Error: Only numeric values greater than 0 are allowed.';
  } else {
    numberInputField.style.border = '1px solid gray';
    result.style.color = 'black';
    convert.textContent = 'Processing: have patients...';

    convert.disabled = true;
    convert.style.color = 'gray';
    convert.style.cursor = 'not-allowed';

    convertAmount(userEnteredAmount);
  }
};

// convert the amount to different currency using Fetch API
function convertAmount(amount) {
  fetchData(api)
    .then((data) => {
      const fromRates = data.conversion_rates[currency1.value];
      const toRates = data.conversion_rates[currency2.value];

      const perRate = (1 * (toRates / fromRates)).toFixed(2);
      const convertedAmount = (amount * (toRates / fromRates)).toFixed(2);

      result.style.color = 'white';
      // status.textContent = `1 ${fromCurrencySelectTag.value} = ${perRate} ${toCurrencySelectTag.value}`;
      result.textContent = `${amount} ${currency1.value} = ${convertedAmount} ${currency2.value}`;

      convert.disabled = false;
      convert.style.color = 'black';
      convert.style.cursor = 'pointer';
      convert.textContent = 'Convert';
    })
    .catch((error) => console.log(`Additional information about error: ${error}`));
}

// Fetch API Data with proper validation
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    result.style.color = 'red';
    result.textContent = `Fetch API Error: ${error}`;
    throw error;
  }
}
