(function ($) {  

  $(".header-menu__btn").click(function() {
    $(this).toggleClass("active");
    $(".header-menu").toggleClass("active");
  });

})(jQuery);