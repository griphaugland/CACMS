const querystring = document.location.search
const params = new URLSearchParams(querystring)
const id = params.get("id")
const shoppingCart = document.querySelector('.shoppingcart');
let shoppingCartOpen = false;
const hamburgerMenu = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
let menuOpen = false;
const username = "ck_6b5f0542fabbc20fc3ca5807c06541fed36f89a1"
const password = "cs_b0cd6babd2555e5acacfb8022b7764f3a657acf0"
const url = "https://gripdev.no/wp-json/wc/v3/products/" + id;
const container = document.querySelector('.details-container')
const productsinCart = document.querySelector('.productsinCart');
      import { products, addItemToCart, removeItemFromCart, getTotal, displayItemsCart } from './cart.js';

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
        const products = data;
        fetchJacket(data)
        hideLoader();
      })
  
    }

      function fetchJacket(jacket) {
        const {name, images, id, description, price} = jacket
         {
                let imagepath = images[0].src
                container.innerHTML += `
                <div class="shell">
             <div class="container"> 
                <div class="textcont">
                  <div class="top-name-price">
                    <h1 class="jacketName-details">${name} </h1><p class="jacketprice">NOK${price}</p>
                  </div>  
                  <div class="jacketdesccontainer"> 
                  <p class="jacketdesc">${description}</p> 
                  </div>
                  <div class="size-boxes">
                  <p class="size">Sizes</p>
                  <div class="size-container">
                    <input type="radio" id="sizesmall" name="sizebox"/>
                    <label class="small" for="sizesmall">S</label>
                    <input type="radio" id="sizemedium" name="sizebox"/>
                    <label class="medium" for="sizemedium">M</label>
                    <input type="radio" id="sizelarge" name="sizebox"/>
                    <label class="large" for="sizelarge">L</label>
                  </div>
                    </div>
                    <div class="color-boxes">
                      <p class="color">Color</p>
                      <div class="color-container">
                        <input type="radio" id="colorbtn-brown" name="colorbox"/>
                        <label class="red" for="colorbtn-brown"></label>
                        <input type="radio" id="colorbtn-maroon" name="colorbox"/>
                        <label class="blue" for="colorbtn-maroon"></label>
                        <input type="radio" id="colorbtn-black" name="colorbox"/>
                        <label class="green" for="colorbtn-black"></label>
                        </label>
                     </div>
                   </div>
                   <div class="jacketpricecontainer">
                   <div class="adcbutton">Add to cart</div> <div class="remfromCart"><i class="fa-solid fa-trash"></i></div>
                   </div>
                </div>
                <div class="image_wrapper-details">
                   <img class="imageel-details" src="${imagepath}">
               </div>      
          </div>
                `
        }
        const adcButton = document.querySelector('.adcbutton');
        const remove = document.querySelector('.remfromCart');
      
        adcButton.addEventListener("click", function() {
          remove.style.display = "flex";
          adcButton.innerHTML = "Added to cart";
          adcButton.style.color = "green";
          addItemToCart(id)
        });
        remove.addEventListener("click", function() {
          remove.style.display = "none";
          adcButton.innerHTML = "Add to cart";
          adcButton.style.color = "";
          removeItemFromCart(id)
        })
      }
      fetchFunc();