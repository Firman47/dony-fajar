const btnNav = document.getElementById("btnNav");
const nav = document.getElementById("nav-visible");
const cloSebanner = document.getElementById("close-banner");
const cloSebanner2 = document.getElementById("close-banner2");
const banner = document.getElementById("banner");
const banner2 = document.getElementById("banner2");

btnNav.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
});

cloSebanner.addEventListener("click", function () {
  banner.classList.toggle("hidden");
  banner2.classList.toggle("hidden");
});

cloSebanner2.addEventListener("click", function () {
  banner.classList.toggle("hidden");
  banner2.classList.toggle("hidden");
});