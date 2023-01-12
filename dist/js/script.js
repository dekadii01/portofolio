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

const loader = document.querySelector(".container-loader");
function loaderAktif() {
  loader.classList.add("loader-active");
}
function loaderAktifTime() {
  setInterval(loaderAktif, 2000);
}
window.onload = loaderAktifTime();
