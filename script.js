let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints:{
    900:{slidesPerView:3,}},
  autoplay:{
    delay:2500,
    disableOnInteraction:false,},
  loop:false,
  loopAdditionalSlides: 1,
  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  });
