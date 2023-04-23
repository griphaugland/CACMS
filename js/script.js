const hamburgerMenu = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
let menuOpen = false;
const shoppingCart = document.querySelector('.shoppingcart');
let shoppingCartOpen = false;
const homepage = document.querySelector('.homepage');
const delay = 1000;
const overlay = document.querySelector(".overlay");
const loader = document.getElementById("loader");
const username = "ck_6b5f0542fabbc20fc3ca5807c06541fed36f89a1"
const password = "cs_b0cd6babd2555e5acacfb8022b7764f3a657acf0"
const url = "https://gripdev.no/wp-json/wc/v3/products"


function displayLoader() {
    loader.classList.add("show");
    loader.classList.remove("hide");
}
function hideLoader() {
    loader.classList.add("hide");
    loader.classList.remove("show");
}

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

if (window.screen = 600) {

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
    fetchJackets(data);
    hideLoader();
      })
    }

    function fetchJackets(jackets) {
        for (const {name, images, featured, id, description, price} of jackets 
        ) {
            if (featured === true) {
                let imagepath = images[0].src
                homepage.innerHTML += `
                <div class="productimage">
                    <img src="${imagepath}">
                </div>
                <div class="producttext">
                    <div class="productheader">${name}</div>
                    <div class="productdescription">${description}</div>
                    <a href="pages/detailsAPI.html?id=${id}" class="send-to">Take a look</a>
                </div>
            </div>
            <div class="line"></div>
                
                
                `
            }
        }  
     
      }

    fetchFunc();