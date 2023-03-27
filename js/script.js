const hamburgerMenu = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
const menu = document.querySelector('.menu')
const menuJackets = document.querySelector('#jackets');
let menuOpen = false;



hamburgerMenu.onclick = () => {
    if (!menuOpen) {
        hamburgerMenu.classList.toggle('active');
        navBar.classList.toggle('activenav')
    menuOpen = true;    
    } else {
        hamburgerMenu.classList.toggle('active');
        navBar.classList.toggle('activenav')
        menuOpen = false;
    }
}
