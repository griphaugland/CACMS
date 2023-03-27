const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url = '/js/jackets.json';
const main = document.querySelector('.detailsmain');
const header = document.querySelector('header');
const delay = 1000;
const loader = document.getElementById("loader");

const getSingleJacket = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Error displaying jacket');
    }
    const data = await res.json();
    const jacket = data[id];
    main.innerHTML = 
    `<div class="shell">
       <div class="container"> 
          <div class="textcont">
            <div class="top-name-price">
              <h1 class="jacketName-details">${jacket.name} </h1><p class="jacketprice">$${jacket.price}</p>
            </div>  
            <div class="jacketdesccontainer"> 
            <p class="jacketdesc">${jacket.description}</p> 
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
                  <label class="${jacket.color1}" for="colorbtn-brown"></label>
                  <input type="radio" id="colorbtn-maroon" name="colorbox"/>
                  <label class="${jacket.color2}" for="colorbtn-maroon"></label>
                  <input type="radio" id="colorbtn-black" name="colorbox"/>
                  <label class="${jacket.color3}" for="colorbtn-black"></label>
                  </label>
               </div>
             </div>
             <div class="jacketpricecontainer">
             <div class="adcbutton">Add to cart</div>
             </div>
          </div>
          <div class="image_wrapper-details">
             <img class="imageel-details" src="${jacket.src}">
         </div>      
    </div>`
  } catch (error) {
    console.error(error);
  }
};


getSingleJacket();
