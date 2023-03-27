const url = '/js/jackets.json';
const path = '';
const main = document.querySelector('.jacketspage');
const header = document.querySelector("header");
const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');
main.appendChild(cardContainer);
const delay = 1000;
const overlay = document.querySelector(".overlay");
const loader = document.getElementById("loader");
const productsinCart = document.querySelector('.productsinCart');
import { products, addItemToCart, removeItemFromCart, getTotal, displayItemsCart} from './cart.js';

const getJackets = async () => {
    loader.classList.add("hide");
    loader.classList.remove("show");
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Error displaying jackets');
      }
      const data = await res.json();
      for (let jacketName in data) {
        const jacket = data[jacketName];
        const res = await fetch(jacket.src);
        if (!res.ok) {
          continue;
        }
        const card = document.createElement('a');
        card.classList.add('card');
        card.href = `/pages/details.html?id=${jacket.id}`;
        card.innerHTML += 
        `<div class="jacket">
            <h1 class="jacketName">${jacket.name}</h1>
            <div class="image_wrapper">
              <img class="imageel" src="${jacket.src}">
            </div>
            <div class="price">${jacket.price}$</div>
          </div>`;
        cardContainer.appendChild(card)
      }
    } catch (error) {
      console.error(error);
      loader.classList.remove("show");
      loader.classList.add("hide");
    }
  };
  
  setTimeout(() => {getJackets()}, delay);
  