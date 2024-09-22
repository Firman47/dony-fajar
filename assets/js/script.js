const btnNav = document.getElementById("btnNav");
const nav = document.getElementById("nav-visible");

btnNav.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
});
