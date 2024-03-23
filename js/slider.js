var swiper = new Swiper(".bannerSwiper", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        578: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
          },
        1400:{
            slidesPerView:6

        }
      },
  });