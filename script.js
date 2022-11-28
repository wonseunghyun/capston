let swiper = new Swiper('#swiper-1', {
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
    nextEl:"#sbn1",
    prevEl:"#sbp1",
  },
  observer:true,
  observeParents:true,
  });

  let swiper2 = new Swiper('#swiper-2', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints:{
      900:{slidesPerView:3,}},
    autoplay:{
      delay:3000,
      disableOnInteraction:false,},
    loop:false,
    loopAdditionalSlides: 1,
    pagination:{
      el:"#swiper-pagination",
      clickable:true,
    },
    navigation:{
      nextEl:"#sbn2",
      prevEl:"#sbp2",
    },
    observer:true,
    observeParents:true,
    });