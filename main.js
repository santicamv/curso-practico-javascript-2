const menuEmail = document.querySelector(".navbar-email");
menuEmail.addEventListener("click",activarMenu);

const desktopMenu = document.querySelector(".desktop-menu");

const inact = document.querySelector(".inactive");

function activarMenu(){
    desktopMenu.classList.toggle("inactive");
}

desktopMenu.addEventListener("mouseleave",desactivarMenu);

function desactivarMenu(){
    desktopMenu.classList.toggle("inactive");
}



const menuMobileCategorias = document.querySelector(".mobile-menu");

const menuIconoMobile = document.querySelector(".menu");

menuIconoMobile.addEventListener("click",activarMenu2);

function activarMenu2(){
    menuMobileCategorias.classList.toggle("containerInactive")
}

