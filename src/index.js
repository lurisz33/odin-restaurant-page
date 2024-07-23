import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadAboutPage from "./about";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

loadHomePage();

homeButton.addEventListener("click", function () {
    content.innerHTML = "";
    loadHomePage();
})

menuButton.addEventListener("click", function () {
    content.innerHTML = "";
    loadMenuPage();
})

aboutButton.addEventListener("click", function () {
    content.innerHTML = "";
    loadAboutPage();
})