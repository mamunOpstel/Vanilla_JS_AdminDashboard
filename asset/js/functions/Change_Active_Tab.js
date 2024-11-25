// =====> New Version To Change Active Class To Both View Sidebar <=====
// =====> HTML Structure is important to maintain in order to work properly <=====

// Getting the buttons boxes
const button_box_1 = document.querySelector(".normal_view_box .menu_btns_box");
const button_box_2 = document.querySelector(".icon_view_box .menu_btns_box");

// Getting the buttons lists
const buttons_list_1 = Array.from(
  document.querySelectorAll(".normal_view_box .menu_btns")
);
const buttons_list_2 = Array.from(
  document.querySelectorAll(".icon_view_box .menu_btns")
);
const tabs_list = Array.from(document.querySelectorAll(".main_contant .tabs"));

const changeAvtivebutton = (index) => {
  buttons_list_1.forEach((button) => {
    button.classList.remove("active");
  });
  buttons_list_1[index].classList.add("active");

  buttons_list_2.forEach((button) => {
    button.classList.remove("active");
  });
  buttons_list_2[index].classList.add("active");
  // changing the active tabs
  if (tabs_list[index]) {
    tabs_list.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabs_list[index].classList.add("active");
  } else {
    console.error("This Tab is not available");
  }
};

const getButtonIndex = (event, buttons_list) => {
  // Check if the clicked target is one of the buttons
  if (
    event.target.classList.contains("menu_btns") ||
    event.target.closest(".menu_btns")
  ) {
    // Get the button element (in case the <i> tag is clicked)
    const button = event.target.classList.contains("menu_btns")
      ? event.target
      : event.target.closest(".menu_btns");

    // Get the index of the clicked button in the buttons list provided as an argument
    const index = buttons_list.indexOf(button);

    changeAvtivebutton(index);
    // For closing the menu after changing the tab
    const sidebar = document.querySelector(".side_bar");
    sidebar.classList.remove("side_bar_active");
  }
};

// Adding an event listener to the button box 1
button_box_1.addEventListener("click", (event) => {
  getButtonIndex(event, buttons_list_1);
});
// Adding an event listener to the button box 2
button_box_2.addEventListener("click", (event) => {
  getButtonIndex(event, buttons_list_2);
});
