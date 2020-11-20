
 document.addEventListener("DOMContentLoaded", function (event) {
  window.onload = function ()  {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none'
  }
  window.addEventListener('scroll', function () {
    let header = document.getElementById('header');
    let topPos = window.pageYOffset ;
    if(topPos > 80) {
      header.classList.add("bg__active")
    } else {
      header.classList.remove("bg__active")
    }
  });
 });