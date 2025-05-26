// script.js
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
