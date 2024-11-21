// <===== For Sidebar Toggling =====>
const menuToggler = Array.from(document.querySelectorAll(".hamburger_icon"));

// global variables
const sidebar = document.querySelector(".side_bar");

menuToggler.forEach((icon) => {
  icon.addEventListener("click", () => {
    sidebar.classList.toggle("side_bar_active");
  });
});

// For changing/toggling the view of sidebar
const hamburger_icon_view = document.querySelector(".hamburger_icon_view");
const icon_view_box = document.querySelector(".icon_view_box");
const normal_view_box = document.querySelector(".normal_view_box");
const search_icon = document.querySelector(".icon_view_box .search_icon");

hamburger_icon_view.addEventListener("click", () => {
  icon_view_box.classList.toggle("d-none");
  normal_view_box.classList.toggle("d-none");
  sidebar.classList.toggle("side_bar_icon_view");
});
search_icon.addEventListener("click", () => {
  console.log("Search icon clicked");
  if (normal_view_box.classList.contains("d-none")) {
    normal_view_box.classList.remove("d-none");
    sidebar.classList.remove("side_bar_icon_view");
    icon_view_box.classList.add("d-none");
  }
});
