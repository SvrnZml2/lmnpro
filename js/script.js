/*----------------------BURGER-------------*/



$(document).ready(function () {
    $('.close-menu, .burger, .mask3').click(function () {
      $('.close-menu').toggleClass('closed');
      $('.mask3').toggleClass('closed');
      $('.menu').toggleClass('nav-mobil');
      $('.burger').toggleClass('active');
  
    });
  });