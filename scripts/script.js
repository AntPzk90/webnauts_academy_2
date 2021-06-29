// let popUp = document.querySelector(".pop-up");
// let popUpBtn = document.querySelector(".btn-pop-up");
// let popUpClose = popUp.querySelector(".pop-up-close");
// let footerBtn = document.querySelector(".btn-dark");

// function showPopUpOnClick() {
//   popUp.classList.add("pop-up-show");
// }

// function closePopUpOnClick() {
//   popUp.classList.remove("pop-up-show");
// }

// popUpBtn.addEventListener("click", showPopUpOnClick);
// footerBtn.addEventListener("click", showPopUpOnClick);
// popUpClose.addEventListener("click", closePopUpOnClick);

let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.2,
  centeredSlides: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
