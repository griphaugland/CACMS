const username = "ck_6b5f0542fabbc20fc3ca5807c06541fed36f89a1"
const password = "cs_b0cd6babd2555e5acacfb8022b7764f3a657acf0"
const url = "https://gripdev.no/wp-json/wc/v3/products/";
const hamburgerMenu = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
let menuOpen = false;
const main = document.querySelector('.jacketspage');
const header = document.querySelector("header");
const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');
const shoppingCart = document.querySelector('.shoppingcart');
let shoppingCartOpen = false;
main.appendChild(cardContainer);
const delay = 1000;
const overlay = document.querySelector(".overlay");
const loader = document.getElementById("loader");
const productsinCart = document.querySelector('.productsinCart');
import { products, addItemToCart, removeItemFromCart, getTotal, displayItemsCart} from './cart.js';

hamburgerMenu.onclick = () => {
  if (!menuOpen) {
      hamburgerMenu.classList.toggle('active');
      navBar.classList.toggle('activenav');
      menuOpen = true;    
  } else {
      hamburgerMenu.classList.toggle('active');
      navBar.classList.toggle('activenav');
      menuOpen = false;
  }
}

function displayLoader() {
  loader.classList.add("show");
  loader.classList.remove("hide");
}
function hideLoader() {
  loader.classList.add("hide");
  loader.classList.remove("show");
}

function fetchFunc() { 
  displayLoader()
  fetch(url, {
  method: 'GET',
  headers: new Headers({
    'Authorization': 'Basic ' + btoa(username + ":" + password)
  })
})
.then(response => response.json())
.then(data =>
    {
      cardContainer.innerHTML = ''; 
      hideLoader();
  fetchJackets(data);
    })
  }

  function fetchJackets(jackets) {
    for (const {name, images, id, price} of jackets 
    ) {
    const imagePath = images[0].src
    const card = document.createElement('a');
    card.classList.add('card');
    card.href = `/pages/detailsAPI.html?id=${id}`;
    card.innerHTML += `
      <div class="jacket">
        <h1 class="jacketName">${name}</h1>
        <div class="image_wrapper">
          <img class="imageel" src="${imagePath}">
        </div>
        <div class="price">NOK${price}</div>
      </div>`;
    cardContainer.appendChild(card)
  }
}

fetchFunc();
const buttonContainer = document.querySelector(".button-container");
const featuredBtn = document.querySelector('.filterbutton');
const remFilter = document.createElement('div')
featuredBtn.onclick = () => {
remFilter.style.display = "flex";
remFilter.innerHTML = "Remove filter";
remFilter.classList.add('filterbutton')
remFilter.style.color = "red";
remFilter.style.marginLeft = "30px";
buttonContainer.appendChild(remFilter)
featuredSort();
}

function featuredSort() {
  displayLoader()
  fetch(url, {
  method: 'GET',
  headers: new Headers({
    'Authorization': 'Basic ' + btoa(username + ":" + password)
  })
})
.then(response => response.json())
.then(data =>
    {
      const featuredProducts = data.filter(product => product.featured === true);
    hideLoader();
    cardContainer.innerHTML = ''; 
    fetchJackets(featuredProducts);
    })
  }

remFilter.onclick = () => {
  fetchFunc();
  remFilter.style.display = "none";
}