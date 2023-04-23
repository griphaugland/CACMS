const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const username = "ck_6b5f0542fabbc20fc3ca5807c06541fed36f89a1"
const password = "cs_b0cd6babd2555e5acacfb8022b7764f3a657acf0"
const url = "https://gripdev.no/wp-json/wc/v3/products/";
const main = document.querySelector('.detailsmain');
const delay = 1000;
const adcbutton = document.querySelector('.adcbutton')
const productsinCart = document.querySelector('.productsinCart');
const shoppingCart = document.querySelector('.shoppingcart');
const cartIcon = document.querySelector('#cart');
let shoppingCartOpen = false;

function fetchFunc() { 
    fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'Basic ' + btoa(username + ":" + password)
    })
  })
.then(function(response){
    return response.json();
})
.then(function(data) {
    localStorage.setItem("products", JSON.stringify(data));
    if(!localStorage.getItem("cart")){
        localStorage.setItem("cart", "[]");
    }
})}
fetchFunc();
let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addItemToCart(productId) {
    let product = products.find(function(product){
        return product.id == productId;
    });
    if(product){
        if(cart.length == 0) {
            cart.push(product);
        } else {
            let res = cart.find(element => element.id == productId);
            if(res === undefined) {
                cart.push(product);
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        displayItemsCart()
    }
}

export function removeItemFromCart(productId) {
    let temp = cart.filter(item => item.id != productId)
    localStorage.setItem("cart", JSON.stringify(temp))
    displayItemsCart()
}

export function getTotal() {
    let temp = cart.map(function(item){
        return parseFloat(item.price);
    });

    let sum = temp.reduce(function(prev, next) {
        return prev + next
    }, 0);
    return sum
}
cartIcon.onclick = () => {
    displayItemsCart();
    if (!shoppingCartOpen) {
        shoppingCart.style.display = "flex";
        shoppingCartOpen = true;    
    } else {
        shoppingCart.style.display = "none";
       shoppingCartOpen = false;
       
    }
}

export function displayItemsCart() {
    if (cart.length == 0) {
      productsinCart.innerHTML = "You have no products in the shopping cart";
    } else {
      let html = "";
      for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        html += `
        <div class="container-cart">
            <div class='product'>${product.name}</div>
            <div class="imgcart-cont">
            <img class="imagecart" src="${product.src}">
            </div>
            <div class="pricecart">NOK${product.price}</div>
        </div>
        `;
      }
      productsinCart.innerHTML = html;
    }
  }
    let totalcost = getTotal();
  const total = document.createElement('p');
  total.classList.add('price-cart');
  total.innerHTML = `Total: NOK${totalcost}`
  shoppingCart.appendChild(total)
  const checkoutbtn = document.createElement('a');
  checkoutbtn.classList.add('checkoutbtn');
  checkoutbtn.href = "/pages/checkout.html";
  checkoutbtn.innerHTML = "Checkout"
  shoppingCart.appendChild(checkoutbtn)

  export let products = [
    {
    name: "Heat",
    id: 39,
    price: 950,
    description: "<p>A durable and thick wool jacket perfect for camping trips</p>\n",
    src: "https://gripdev.no/wp-content/uploads/2023/04/RainyDays_Jacket7.png",
    color1: "red",
    color2: "blue",
    color3: "black"
      },
      {
    name: "Sleek",
    id: 38,
    price: 890,
    description: "<p>Water-resistant lightweight jacket with breathable mesh lining</p>\n",
    src: "https://gripdev.no/wp-content/uploads/2023/04/RainyDays_Jacket6.png",
    color1: "",
    color2: "",
    color3: ""
      },
    {
    name: "Charge",
    id: 34,
    price: 2750,
    description: "p>Windproof and water-resistant jacket with detachable hood</p>\n",
    src: "https://gripdev.no/wp-content/uploads/2023/04/RainyDays_Jacket5.png",
    color1: "red",
    color2: "blue",
    color3: "black",
    },
    {
    name: "Storm",
    id: 33,
    price: 1250,
    description: "<p>A durable and thick wool jacket perfect for camping trips</p>\n",
    src: "https://gripdev.no/wp-content/uploads/2023/04/RainyDays_Jacket4.png",
    color1: "red",
    color2: "blue",
    color3: "black",
    },
    {
    name: "Hercules",
    id: 32,
    price: 740,
    description: "<p>A durable and thick wool jacket perfect for camping trips</p>\n",
    src: "https://gripdev.no/wp-content/uploads/2023/04/RainyDays_Jacket3.png",
    color1: "red",
    color2: "blue",
    color3: "black",
    },
    {
    name: "Explorer",
    id: 31,
    price: 980,
    description: "<p>A durable and thick wool jacket perfect for camping trips</p>\n",
    src: "https://gripdev.no/wp-content/uploads/2023/04/RainyDays_Jacket2.png",
    color1: "red",
    color2: "blue",
    color3: "black",
    },
    {
    name: "Expedition",
    id: 18,
    price: 1850,
    description: "<p>A durable and thick wool jacket perfect for camping trips</p>\n",
    src: "https://gripdev.no/wp-content/uploads/2023/04/RainyDays_Jacket1.png",
    color1: "red",
    color2: "blue",
    color3: "black",
        },
    
    ];