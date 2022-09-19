const menuEmail = document.querySelector(".navbar-email");
menuEmail.addEventListener("click", activarMenu);

const desktopMenu = document.querySelector(".desktop-menu");

const inact = document.querySelector(".inactive");

function activarMenu() {
    desktopMenu.classList.toggle("inactive");
}

desktopMenu.addEventListener("mouseleave", desactivarMenu);

function desactivarMenu() {
    desktopMenu.classList.toggle("inactive");
}



const menuMobileCategorias = document.querySelector(".mobile-menu");

const menuIconoMobile = document.querySelector(".menu");

menuIconoMobile.addEventListener("click", activarMenu2);

function activarMenu2() {
    let isMenuCarritoInactivo = menuCarrito.classList.contains("containerInactive");

    if(!isMenuCarritoInactivo){
        menuCarrito.classList.add("containerInactive")
    }
    menuMobileCategorias.classList.toggle("containerInactive");
}




const menuCarrito = document.querySelector(".product-detail");
const iconoCarrito = document.querySelector(".navbar-shopping-cart");
iconoCarrito.addEventListener("click", mostrarMenuCarrito);

function mostrarMenuCarrito() {
    let isMenuCategoriasInactivo = menuMobileCategorias.classList.contains("containerInactive");

    if(!isMenuCategoriasInactivo){
        menuMobileCategorias.classList.add("containerInactive");
    }

    menuCarrito.classList.toggle("containerInactive")
}
