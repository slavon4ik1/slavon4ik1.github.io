$(document).ready(function () {

  $(".reviews__slider").owlCarousel({
    items: 1,
    utoplay: false,
    nav: true,
    navText: [$('.left'), $('.right')],
    loop: true
  }); 

  $('.header__menu--box').on('click', function() {
    $('.header__menu-hamburger').toggleClass('header__menu--box-active');
		$('.header__menu-list').toggleClass('active-menu');
  });

  $(function(){
    $('a[href^="#"]').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1500);
       return false;
    });
  });

  $("#client").on('click', show);

  function show(e) {
    e.preventDefault();
    $(this).addClass('shadow');
    $(".client").addClass("active-swich");
    $(".client1").addClass("active-swich");
    $("#admin").removeClass("shadow");
    $(".admin1").removeClass("active-swich");
    $(".admin").removeClass("active-swich");
  };

   $("#admin").on('click', hide);

  function hide(e) {
    e.preventDefault();
    $("#client").removeClass("shadow");
    $(".client1").removeClass("active-swich");
    $(".client").removeClass("active-swich");
    $(this).addClass('shadow');
    $(".admin1").addClass("active-swich");
    $(".admin").addClass("active-swich");
  };


});