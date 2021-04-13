// Swiper

new Swiper('.visual-mo .swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    deplay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.visual-mo .swiper-pagination',
    clickable: true
  },

});

new Swiper('.visual-pc .swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    deplay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.visual-pc .swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
});

 // 화면 크기
function funcThisSize() {
  $("#innerWidth").html( window.innerWidth );
}


 


new Swiper('.maincon2 .swiper-container', {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
  autoplay: {
    deplay: 3000
  },
});

$( document ).ready( function() {
  
  $( window ).resize( function() {
    if (window.innerWidth >= 1024) {

      new Swiper('.main #tab1 .swiper-container', {
    slidesPerView: 'auto',
    slidesPerView: 5,
    spaceBetween : 50,
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
  
    },
  });
  
  }
  } );
} );