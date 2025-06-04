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
});
const video = document.getElementById("video-comeco");

const textoAbaixo = document.getElementById("historia");
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
}
