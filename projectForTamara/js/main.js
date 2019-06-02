$(document).ready(function() {
  $('.next').click(function(){
    $('.step_1').hide('slow', function() { 
    });
    $('.step_2').show('slow', function() {
      
    });
  });
  $('.back').click(function() {
    $('.step_2').hide('500', function() {
      $('.step_1').show('500');
    });
  });
  $('.next_2').click(function() {
    $('.step_2').hide('slow', function() {  
    });
    $('.step_3').show((500), function() {
     setTimeout(function() { $(".step_3").hide('slow'); }, 3000);
     setTimeout(function() { $(".step_4").show('slow'); }, 3000);
    });
  });
});