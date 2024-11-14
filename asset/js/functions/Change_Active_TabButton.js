// <===== Changing the active class between the sidemenu buttons =====>

const Button_box = document
  .querySelector(".menu_btns_box")
  .addEventListener("click", (event) => {
    const buttons_list = Array.from(document.querySelectorAll(".menu_btns"));

    if (event.target.classList.contains("menu_btns")) {
      buttons_list.forEach((button) => {
        button.classList.remove("active");
      });
      event.target.classList.add("active");
    }
  });
