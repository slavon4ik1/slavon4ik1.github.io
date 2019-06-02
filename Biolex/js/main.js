$(window).on('load', function () {
  var preloader = $('.preloader');
  preloader.delay(3000).fadeOut(500);
});

$(document).ready(function () {

  $('.header-menu__hamburger').click(function () {
    $('.header-main').addClass('active');
    $('.header').toggleClass('active');
    $(this).toggleClass('active');
    $('.production-wrap').addClass('active');
  });

  $('.close-head').on('click', function() {
    $('.header-menu__hamburger').removeClass('active');
    $('.header').removeClass('active');
    $('.header-main').removeClass('active');
    $('.production-wrap').removeClass('active');
  });

  $('.open').on('click', shForm);

  function shForm() {
    $(this).toggleClass('active');
    $('.main-form').toggleClass('active');
  };

  $('.close').on('click', hForm)

  function hForm() {
    $('.main-form').removeClass('active');
    $('.open').removeClass('active');
    $('.contact-main').css({
      display : 'block'
    });
  }

  $('#production-slider').owlCarousel({
    center: true,
    items: 1,
    dots: false, 
    navContainer: '.production-nav'
  });


  var width = parseInt($(window).width());
  
  if(width > 992) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      direction: 'vertical',
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    }); 
  }

  else {

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      centeredSlides: true,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  }
});