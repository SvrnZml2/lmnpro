/*----------------------BURGER-------------*/



$(document).ready(function () {
    $('.burger, .mask3').click(function () {
      $('.mask3').toggleClass('closed');
      $('.menu').toggleClass('nav-mobil');
      $('.burger').toggleClass('active');
      $('.close-menu').toggleClass('exit'); 
    });
  });

   
