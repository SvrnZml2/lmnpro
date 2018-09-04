/*----------------------BURGER-------------*/



$(document).ready(function () {
    $('.burger, .mask3').click(function () {
      $('.mask3').toggleClass('closed');
      $('.menu').toggleClass('nav-mobil');
      $('.burger').toggleClass('active');
      
    });
    $( "li" ).click(function() {
      
      $( ".menu" ).removeClass("nav-mobil");
      $('.mask3').removeClass('closed');
      $('.burger').removeClass('active');

    });
  });

   
