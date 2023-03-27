const itemsCheckout = document.querySelector(".items-checkout");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url = '/js/jackets.json';
const main = document.querySelector('.detailsmain');
const delay = 1000;
const adcbutton = document.querySelector('.adcbutton')
const productsinCart = document.querySelector('.productsinCart');
const shoppingCart = document.querySelector('.shoppingcart');
const cartIcon = document.querySelector('#cart');
const formCheckout = document.querySelector(".form-checkout")
let shoppingCartOpen = false;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data) {
    localStorage.setItem("products", JSON.stringify(data));
    if(!localStorage.getItem("cart")){
        localStorage.setItem("cart", "[]");
    }
});

export let products = [
    {
    name: "Expedition",
    id: 1,
    price: 194,
    description: "A durable and thick jacket designed to keep you warm and dry on your adventures.",
    src: "../media/RainyDays_Jacket1.png",
    color1: "grey",
    color2: "black",
    color3: "orange",
    },
    {
    name: "Explorer",
    id: 2,
    price: 96,
    description: "Warm and insulated jacket with zippered hand pockets",
    src: "../media/RainyDays_Jacket2.png",
    color1: "grey",
    color2: "black",
    color3: "white",
    },
    {
    name: "Hercules",
    id: 3,
    price: 74,
    description: "Waterproof and breathable jacket with underarm vents and adjustable cuffs",
    src: "../media/RainyDays_Jacket3.png",
    color1: "red",
    color2: "blue",
    color3: "black",
    },
    {
    name: "Storm",
    id: 4,
    price: 125 ,
    description: "Insulated and windproof jacket with adjustable hem and cuffs",
    src: "../media/RainyDays_Jacket4.png",
    color1: "grey",
    color2: "white",
    color3: "black",
    },
     {
    name: "Charge",
    id: 5,
    description: "Windproof and water-resistant jacket with detachable hood",
    price: 274,
    src: "../media/RainyDays_Jacket5.png",
    color1: "grey",
    color2: "blue",
    color3: "black",
    },
    {
    name: "Sleek",
    id: 6,
    price: 83,
    description: "Water-resistant lightweight jacket with breathable mesh lining",
    src: "../media/RainyDays_Jacket6.png",
    color1: "grey",
    color2: "black",
    color3: "yellow",
    },
     {
     name: "Heat",
     id: 7,
     price: 95,
     description: "A durable and thick wool jacket perfect for camping trips",
     src: "../media/RainyDays_Jacket7.png",
     color1: "red",
     color2: "blue",
     color3: "black",
      }
]

export function getTotal() {
    let temp = cart.map(function(item){
        return parseFloat(item.price);
    });

    let sum = temp.reduce(function(prev, next) {
        return prev + next
    }, 0);
    return sum
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
if (cart.length == 0) {
  itemsCheckout.innerHTML = "You have no products in the shopping cart";
} else {
  let html = "";
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    html += `
    <div class="container-cart-checkout">
        <div class='product'>${product.name}</div>
        <div class="imgcart-cont">
        <img class="imagecart" src="${product.src}">
        </div>
        <div class="pricecart">$${product.price}</div>
    </div>
    `;
  }
  itemsCheckout.innerHTML = html;
  let totalcost = getTotal();
  const total = document.createElement('p');
  total.classList.add('finalprice-cart');
  total.innerHTML = `Total: $${totalcost}`
  itemsCheckout.appendChild(total)
}

const nameReg = /^[a-zA-Z]{3,}$/;
const subjectReg = /^.{10,}$/;
const commonEmail =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const addressReg = /^[a-zA-Z0-9\s,'-]*.{25,}$/;

const regexTester = (input, rule) => {
  if (input === '') {
    console.log('RegTest:', 'false, empty string');
    return false;
  }
  console.log('RegTest:', rule.test(input));
  return rule.test(input);
};
const nameInput = document.querySelector('#nameInput')
const subjectInput = document.querySelector('#subjectInput')
const emailInput = document.querySelector('#emailInput')
const addressInput = document.querySelector('#addressInput')
const form = document.querySelector('.contactForm');
const submit = document.querySelector('#formButton');
const feedback = document.createElement('div');
const nameFeedback = document.querySelector('.nameFeedback')
const subjectFeedback = document.querySelector('.subjectFeedback')
const emailFeedback = document.querySelector('.emailFeedback')
const addressFeedback = document.querySelector('.addressFeedback')
form.appendChild(feedback);

form.onsubmit = (e) => {
    e.preventDefault();
    if(!regexTester(nameInput.value, nameReg) || !regexTester(subjectInput.value, subjectReg) || !regexTester(emailInput.value, commonEmail) || !regexTester(addressInput.value, addressReg)) {
        feedback.innerHTML = "Wrong format, check the guidelines and try again.";
        return;
    }

    const formBtn = document.querySelector('#formButton');
    formBtn.addEventListener("click", 
    form.innerHTML = "Order Placed! Thanks for shopping with us! We will ship your items within 2-3 business days.");
};
