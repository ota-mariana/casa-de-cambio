const fetch = require('node-fetch');

const BASE_URL = 'https://api.exchangerate.host';
const LATEST_ENDPOINT = '/latest';

const urlBasedOnCurrency = (currency) => {
  return `${BASE_URL}${LATEST_ENDPOINT}/?base${currency}`;
};

const fetchCurrency = async (currency) => {
  const endpoint = urlBasedOnCurrency(currency)

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  urlBasedOnCurrency,
  fetchCurrency,
};