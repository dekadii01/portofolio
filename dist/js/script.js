const loader = document.querySelector(".container-loader");

function loaderAktif() {
  loader.classList.add("loader-active");
}

function loaderAktifTime() {
  setInterval(loaderAktif, 2000);
}

window.onload = loaderAktifTime();
