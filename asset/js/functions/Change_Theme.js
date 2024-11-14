// <===== For LightMode and Darkmode =====>
// For the top navbar's light and dark mode icons
const navbar_icon_box = document
  .querySelector(".navbar_icon_box")
  .addEventListener("click", (event) => {
    // Containing the conditions for light and dark mode
    let lightMode = event.target.classList.contains("light_mode_btn");
    let darkMode = event.target.classList.contains("dark_mode_btn");

    if (lightMode) {
      document.body.classList.add("active");
    } else if (darkMode) {
      document.body.classList.remove("active");
    }
  });

// For the Sidebar's light and dark mode icons
const sidebar_icon_box = document
  .querySelector(".sidebar_icon_box")
  .addEventListener("click", (event) => {
    // Containing the conditions for light and dark mode
    let lightMode = event.target.classList.contains("sidebar_light_mode_btn");
    let darkMode = event.target.classList.contains("sidebar_dark_mode_btn");

    if (lightMode) {
      document.body.classList.add("active");
    } else if (darkMode) {
      document.body.classList.remove("active");
    }
  });
