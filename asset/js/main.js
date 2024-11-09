const menuToggler = document.querySelector(".hamburger_icon");
const lightModeBtn = document
  .querySelector(".light_mode_btn")
  .addEventListener("click", () => document.body.classList.toggle("active"));
const darkModeBtn = document
  .querySelector(".dark_mode_btn")
  .addEventListener("click", () => document.body.classList.toggle("active"));
