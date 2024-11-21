// <===== Changing the active class between the sidemenu buttons =====>

const Button_box = document
  .querySelector(".menu_btns_box")
  .addEventListener("click", (event) => {
    const buttons_list = Array.from(document.querySelectorAll(".menu_btns"));
    const sidebar = document.querySelector(".side_bar");

    if (event.target.classList.contains("menu_btns")) {
      buttons_list.forEach((button) => {
        button.classList.remove("active");
      });
      event.target.classList.add("active");
      console.log("Changed the active buttton")
      // Closing the sidebar after changing the tab
      sidebar.classList.toggle("side_bar_active");
    }
  });

const buttons_list = Array.from(document.querySelectorAll(".menu_btns"));
console.log(buttons_list)