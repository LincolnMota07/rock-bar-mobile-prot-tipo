const swiper = new Swiper('.swiper', {
    
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1728: {
      slidesPerView: 3,
      spaceBetween: 100
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
   
  },
  loop: true,

});







