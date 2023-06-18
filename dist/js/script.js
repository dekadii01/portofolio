const cv = document.querySelector("#btn-cv");
cv.addEventListener("click", function () {
  window.open("assets/cv/myCV.pdf");
});

const grid = document.querySelector("#belajar-grid");
grid.addEventListener("click", () => {
  window.open("https://dekadii01.github.io/belajar-grid/");
});

const starbak = document.querySelector("#starbak");
starbak.addEventListener("click", () => {
  window.open("https://dekadii01.github.io/Starbuck-web/");
});

const moomoon = document.querySelector("#moomoon");
moomoon.addEventListener("click", () => {
  window.open("https://dekadii01.github.io/laba.github.io/");
});

const myPorto = document.querySelector("#my-porto");
myPorto.addEventListener("click", () => {
  window.open("https://dekadii01.github.io/my-portofolio/");
});

const teamPorto = document.querySelector("#team-porto");
teamPorto.addEventListener("click", () => {
  window.open("https://dekadii01.github.io/Porto-team-PWPB/");
});
const theMalaka = document.querySelector("#the-malaka");
theMalaka.addEventListener("click", () => {
  window.open("https://dekadii01.github.io/the-malaka/");
});
const ladiTv = document.querySelector("#ladi-tv");
ladiTv.addEventListener("click", () => {
  window.open("http://laditv.epizy.com/");
});
const skensos = document.querySelector("#skensos");
skensos.addEventListener("click", () => {
  window.open("http://skensapilketos.epizy.com/");
});

const tailwind = document.querySelector("#tailwind");
tailwind.addEventListener("click", () => {
  window.open("https://dekadii01.github.io/portfolio-tailwind-css/");
});

const loader = document.querySelector(".container-loader");
function loaderAktif() {
  loader.classList.add("loader-active");
}
function loaderAktifTime() {
  setInterval(loaderAktif, 2000);
}
window.onload = loaderAktifTime();

// website on scroll

window.onscroll = function () {
  var navbar = document.getElementById("navbar1");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

window.addEventListener("scroll", function () {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos === 0) {
    var navbar = document.getElementById("navbar1");
    navbar.classList.remove("sticky");
  }
});
