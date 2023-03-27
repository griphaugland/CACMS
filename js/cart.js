const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url = '/js/jackets.json';
const main = document.querySelector('.detailsmain');
const delay = 1000;
const adcbutton = document.querySelector('.adcbutton')

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

let products = {
    1: {
    name: "Expedition",
    id: 1,
    price: 194,
    description: "A durable and thick jacket designed to keep you warm and dry on your adventures.",
    src: "../media/RainyDays_Jacket1.png",
    color1: "grey",
    color2: "black",
    color3: "orange"
    },
    2: {
    name: "Explorer",
    id: 2,
    price: 96,
    description: "Warm and insulated jacket with zippered hand pockets",
    src: "../media/RainyDays_Jacket2.png",
    color1: "grey",
    color2: "black",
    color3: "white"
    },
    3: {
    name: "Hercules",
    id: 3,
    price: 74,
    description: "Waterproof and breathable jacket with underarm vents and adjustable cuffs",
    src: "../media/RainyDays_Jacket3.png",
    color1: "red",
    color2: "blue",
    color3: "black"
    },
    4: {
    name: "Storm",
    id: 4,
    price: 125 ,
    description: "Insulated and windproof jacket with adjustable hem and cuffs",
    src: "../media/RainyDays_Jacket4.png",
    color1: "grey",
    color2: "white",
    color3: "black"
    },
    5:   {
    name: "Charge",
    id: 5,
    description: "Windproof and water-resistant jacket with detachable hood",
    price: 274,
    src: "../media/RainyDays_Jacket5.png",
    color1: "grey",
    color2: "blue",
    color3: "black"
    },
    6: {
    name: "Sleek",
    id: 6,
    price: 83,
    description: "Water-resistant lightweight jacket with breathable mesh lining",
    src: "../media/RainyDays_Jacket6.png",
    color1: "grey",
    color2: "black",
    color3: "yellow"
    },
     7: {
     name: "Heat",
     id: 7,
     price: 95,
     description: "A durable and thick wool jacket perfect for camping trips",
     src: "../media/RainyDays_Jacket7.png",
     color1: "red",
     color2: "blue",
     color3: "black"
      }

    }

/* let products = JSON.parse(localStorage.getItem("products")) || []; */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addItemToCart(productId) {
    let product = products.find(function(product){
        console.log(product.id)
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
    }
}
addItemToCart(2);

/* adcbutton.onclick = () => {
    addItemToCart(id)
} */
