const hamburgerMenu = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
let menuOpen = false;
const shoppingCart = document.querySelector('.shoppingcart');




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