const menu = document.querySelector("#mobile-menu");
const menu_links = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menu_links.classList.toggle("active");
})