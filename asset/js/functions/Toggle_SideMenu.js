// <===== For Sidebar Toggling =====>
const menuToggler = document
  .querySelector(".hamburger_icon")
  .addEventListener("click", () => {
    const sidebar = document.querySelector(".side_bar");
    sidebar.classList.toggle("side_bar_active");
  });
