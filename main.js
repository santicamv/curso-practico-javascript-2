const menuEmail = document.querySelector(".navbar-email");
menuEmail.addEventListener("click",toggleDesktopMenu);

const desktopMenu = document.querySelector(".desktop-menu");

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}