// =====> Getting all 3 boxes with class "user_options_box" <=====

// For the Sidebar's light and dark mode icons
const user_options_boxes = document.querySelectorAll(".user_options_box");

// =====> Lopping over each boxes <=====
user_options_boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    // Containing the conditions for light and dark mode
    let lightMode = event.target.classList.contains("light_mode_btn");
    let darkMode = event.target.classList.contains("dark_mode_btn");

    // =====> Changing the "active" class to toggle light and dark mode based on the conditions  <=====
    if (lightMode) {
      document.body.classList.add("active");
    } else if (darkMode) {
      document.body.classList.remove("active");
    }
  });
});
