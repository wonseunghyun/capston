var swiper = new Swiper('.swiper', {
    slidesPerView: 10, //레이아웃 뷰 개수 
    spaceBetween: 30, //위 slidesPerview 여백
    slidesPerView: 4,
    centeredSlides: 'ture',
    autoplay:{
        dleay:2500,
        disableOnInteraction:false,
    },
    loop: true,
    loopAdditionalSlides:1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});