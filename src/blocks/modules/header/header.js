const burger = document.querySelector(".burger");
const mobMenu = document.querySelector(".mobile__menu");
const closeBg = document.querySelector(".bg-close");
const closeIcon= document.querySelector(".close-icon");


burger.addEventListener("click", () => {
    mobMenu.classList.toggle("is-active");
});
closeBg.addEventListener("click", () => {
    mobMenu.classList.toggle("is-active");
});
closeIcon.addEventListener("click", () => {
    mobMenu.classList.toggle("is-active");
});