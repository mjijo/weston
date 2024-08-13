
// Create clone of menu, right next to original.
// Create clone of menu, right next to original.

// ******************
// $('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
// scrollIntervalID = setInterval(stickIt, 10);

// function stickIt() {
//   var orgElementPos = $('.original').offset();
//   orgElementTop = orgElementPos.top;               
//   if ($(window).scrollTop() >= (orgElementTop)) {
//     // scrolled past the original position; now only show the cloned, sticky element.
//     // Cloned element should always have same left position and width as original element.     
//     orgElement = $('.original');
//     coordsOrgElement = orgElement.offset();
//     leftOrgElement = coordsOrgElement.left;  
//     widthOrgElement = orgElement.css('width');
//     $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
// $('.original').css('visibility','hidden');
//   } else {
//   // not scrolled past the menu; only show the original menu.
//     $('.cloned').hide();
// $('.original').css('visibility','visible');
//   }
// }
// *****************

// Start News

// var galleryTop = new Swiper('.gallery-top', {
//   slidesPerView: 1,  
//   loop: true,
//   autoplay: true,
//   loopedSlides: 30,
//   pagination: {
// el: ".swiper-pagination",
// clickable: true,
// },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   direction: 'vertical',
//   slidesPerView: 4,
//   slideToClickedSlide: true,
//   spaceBetween: 0,
//   loopedSlides: 30,
//   loop: true,
// });
// galleryTop.controller.control = galleryThumbs;
// galleryThumbs.controller.control = galleryTop;

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 6,
//   spaceBetween: 30,
//   slidesPerGroup: 6,
//   loop: true,
//   loopFillGroupWithBlank: true,

// });


$(document).ready(function() {
  // Get the header element
  var menuHeader = $(".menu");

  // Set a scroll event listener
  $(window).scroll(function() {
    // Check the scroll position
    var scrollPosition = $(window).scrollTop();

    // Add or remove the .bg-white class and .shadow-sm class based on the scroll position
    if (scrollPosition > 100) { // Adjust this value based on when you want the class to be added
      menuHeader.addClass("shadow-sm");
    } else {
      menuHeader.removeClass("shadow-sm");
    }
  });
});
    