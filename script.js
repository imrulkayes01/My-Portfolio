// script.js
// const menuToggle = document.getElementById("menuToggle");
// const nav = document.querySelector("header nav");

// menuToggle.addEventListener("click", () => {
//   nav.classList.toggle("active");
// });

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("header nav");
const navLinks = document.querySelectorAll("header nav a");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
