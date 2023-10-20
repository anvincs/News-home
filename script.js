const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const hamburger = document.querySelector(".hamburger-menu");
const layer = document.querySelector(".layer");

closeIcon.addEventListener("click", function () {
  hamburger.classList.remove("active");
  menuIcon.classList.remove("close");
  layer.style.display = "none";
});

menuIcon.addEventListener("click", function () {
  hamburger.classList.add("active");
  menuIcon.classList.add("close");
  layer.style.display = "block";
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 700) {
    hamburger.classList.remove("active");
    layer.style.display = "none";
    menuIcon.classList.remove("close");
  }
});
