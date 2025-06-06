$(document).ready(function () {
  $("#banners ul").bxSlider({
    auto: true,
    speed: 1000,
    // mode: 'fade'
    // pager: false
  });

  $("#fotos #galeria").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });

  $(".magnificPopup").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });
});
const video = document.getElementById("video-comeco");

const textoAbaixo = document.getElementById("historia");
const botaoMutar = document.querySelector("#mute");
const volumeControle = document.getElementById("volume");
if (video) {
  function estaNaTela(elemento) {
    const caixaElemento = elemento.getBoundingClientRect();
    return caixaElemento.top < window.innerHeight && caixaElemento.bottom > 0;
  }

  document.addEventListener("keydown", function (event) {
    if (estaNaTela(video)) {
      textoAbaixo.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });

  botaoMutar.addEventListener("click", () => {
    console.log("mute");
    console.log(video.muted);
    video.muted = !video.muted;
    const icon = botaoMutar.querySelector("i");

    if (icon.classList.contains("fa-volume-high")) {
      icon.classList.remove("fa-volume-high");
      icon.classList.add("fa-volume-xmark");
    } else {
      icon.classList.remove("fa-volume-xmark");
      icon.classList.add("fa-volume-high");
    }
  });

  volumeControle.addEventListener("input", () => {
    video.volume = volumeControle.value;
  });

  volumeControle.addEventListener("click", () => {
    video.muted = false;
    botaoMutar.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
  });
}
