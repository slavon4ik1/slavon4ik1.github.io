$(document).ready(function () {

  $('.header-menu__mobile').on('click', toggleMenu);

  function toggleMenu() {
    $('.menu').fadeToggle();
    $('.close').fadeToggle();
    $('.header-small').slideToggle();
  }

  var oddHead = $('.blog-item__head:odd');
  var evenHead = $('.blog-item__head:even');

  oddHead.addClass('odd');
  evenHead.addClass('even');
  console.log(evenHead);

  $(".scroll").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  function postsCarousel() {

    var checkWidth = $(window).width();

    var owlPost = $("#service-slider");

    if (checkWidth > 998) {

      if (typeof owlPost.data('owl.carousel') != 'undefined') {

        owlPost.data('owl.carousel').destroy();

      }

      owlPost.removeClass('owl-carousel');

    } else if (checkWidth < 992) {

      owlPost.addClass('owl-carousel');

      owlPost.owlCarousel({
        items: 1,
        slideSpeed: 500,
        dots: true,
        dotsContainer: '.dots .services-dots'
      });
    }
  }

  postsCarousel();

  $(window).resize(postsCarousel)

  $('.main-description').addClass('active');
  $('.main-image__wrap').addClass('active');

 var owl = $("#main-carousel");
  owl.owlCarousel({
    animateOut: 'fadeInDown',
    animateIn: 'fadeInDown',
    items: 1,
    loop: false,
    rewind: true,
    mouseDrag: false,
    pullDrag: false,
    touchDrag: false,
    nav: true,
    slideBy: 2,
    navContainer: '.owl-nav',
    dotsContainer: '.dots-main .services-dots'
  });

  owl.on('change.owl.carousel', function(event) {
    $('.main-description').removeClass('active');
    $('.main-image__wrap').removeClass('active');

    var currentSlide = $('.owl-item.active .slide .main-container .main-wrap .main-description');
    var currentSlide2 = $('.owl-item.active .slide .main-container .main-wrap .main-image__wrap');

    setTimeout(() => {
      currentSlide.addClass('active');
      currentSlide2.addClass('active');
    }, 10);

  }); 

  var target = $('.about-us-head');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
      $('.about-us-head').addClass('active');
      $('.about-us-txt').addClass('active');
      $('.about-us-cap').addClass('active');
    }
  });

  var target2 = $('.benefits-items');
  var targetPos2 = target2.offset().top;
  var winHeight2 = $(window).height();
  var scrollToElem2 = targetPos2 - winHeight2;
  $(window).scroll(function () {
    var winScrollTop2 = $(this).scrollTop();
    if (winScrollTop2 > scrollToElem2) {
      $('.benefits-items').addClass('active');
    }
  });

  var target3 = $('.algorythm-item');
  var targetPos3 = target3.offset().top;
  var winHeight3 = $(window).height();
  var scrollToElem3 = targetPos3 - winHeight3;
  $(window).scroll(function () {
    var winScrollTop3 = $(this).scrollTop();
    if (winScrollTop3 > scrollToElem3) {
      $('.algorythm-item').addClass('active');
    }
  });

  $('.our-services-head').on('click', showServ);
  $('.our-services-body__up').on('click', closeServ);

  function showServ() {
    $('.our-services-head').removeClass('active');
    $('.our-services-body').removeClass('active');
    $('.our-services-head__txt').removeClass('active');
    $(this).addClass('active');
    var num = $(this).attr('data-num');
    var clas = 'our-services-body-' + num;
    $(this).find('.our-services-head__txt').addClass('active');
    $('.' + clas).slideDown();
    $('.' + clas).addClass('active');
  }

  function closeServ() {
    $(this).parent().slideUp();
  }

});  