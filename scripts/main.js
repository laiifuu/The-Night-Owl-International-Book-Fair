const button = document.querySelector(".burger-menu");
const menu = document.querySelector(".nav-list");
const menuLinks = [...menu.children];
const img = button.querySelector("img");
const body = document.querySelector("body");


function removeMenu() {
  menu.classList.remove("toggled-menu");
  button.classList.remove("burger-menu-toggled");
  button.classList.remove("open");
  button.setAttribute("data-toggled", "false");
  body.classList.remove("overflow");
}

button.addEventListener("click", () => {
  if (button.getAttribute("data-toggled") === "false") {
    button.classList.add('open');
    button.setAttribute("data-toggled", "true");
  } else {
    button.classList.remove('open');
    button.setAttribute("data-toggled", "false");
  }
  button.classList.toggle("burger-menu-toggled");
  menu.classList.toggle("toggled-menu");
  body.classList.toggle("no-scroll");
});



menuLinks.forEach((link) => {
  link.addEventListener("click", removeMenu);
});

window.addEventListener(
  "resize",
  () => {
    const query = window.matchMedia("(min-width: 768px)");
    if (query.matches) {
      removeMenu();
    }
  },
  true
);