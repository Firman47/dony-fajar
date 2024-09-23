const btnNav = document.getElementById("btnNav");
const nav = document.getElementById("nav-visible");
const cloSebanner = document.getElementById("close-banner");
const banner = document.getElementById("banner");
cloSebanner.addEventListener("click", function () {
  banner.classList.toggle("hidden");
  alert("");
});
btnNav.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
});
