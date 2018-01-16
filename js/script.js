$( document ).ready(function(){

  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({
            dist:0,
            shift: 1,
            fullWidth: true
      });
  $('.next').click(function() {
    $('.carousel.carousel-slider').carousel('next');
  });
  $('.prev').click(function() {
    $('.carousel.carousel-slider').carousel('prev');
  });
        

  $('.collapsible').collapsible();
  
});