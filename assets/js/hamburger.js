const hamBtn = document.querySelector("#ham-menu");
let sidebar = document.querySelector("#sideBar");
const navbar = document.querySelector(".navbar");

let isOpen = false;
let backdrop = document.createElement("div");
backdrop.classList.add("backdrop");

const toggleMenu = () => {
  isOpen = !isOpen;
  if (isOpen) {
    hamBtn.classList.remove("menu-open");
    hamBtn.classList.add("menu-close");
    navbar.append(backdrop);
    sidebar.style.opacity = "1";
    sidebar.style.width = "70%";
  } else {
    hamBtn.classList.add("menu-open");
    hamBtn.classList.remove("menu-close");
    sidebar.style.opacity = "0";
    sidebar.style.width = "0";
    backdrop.remove();
  }
};

const closeMenu = () => {
  hamBtn.classList.add("menu-open");
  hamBtn.classList.remove("menu-close");
  sidebar.style.opacity = "0";
  sidebar.style.width = "0";

  backdrop.remove();
};

hamBtn.addEventListener("click", toggleMenu);

backdrop.addEventListener("click", closeMenu);
