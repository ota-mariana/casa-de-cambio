import fetchCurrency from "../api";
import Swal from 'sweetalert2';

// Selection of elements
const buttonSearch = document.querySelector('.search-btn');
const currencyInput = document.querySelector('#currency-input');
const currencyList = document.querySelector('.currency');
const titleBaseCurrency = document.querySelector('.currency-title')

// Functions
const createLiHtml = (currency) => {
  const [currencyName, value] = currency;

  const li = document.createElement('li');
    li.textContent = `${currencyName} - ${value}`;
    currencyList.appendChild(li);
};

const handleSearch = async () => {
  const currencyValue = currencyInput.value;

  titleBaseCurrency.innerHTML = `MOEDA BASE: ${currencyInput.value}`;
  
  if(!currencyValue) {
    return Swal.fire({
      icon: 'error',
      title: 'Ops...',
      text: 'Você precisa digitar um tipo de moeda'
    })
  }

  const currencies = await fetchCurrency(currencyValue)
  const arrayData = Object.entries(currencies.rates); //Transformo o objeto de array em array de array.
  
  
  arrayData.forEach(createLiHtml);
};

// Events
buttonSearch.addEventListener('click', handleSearch);