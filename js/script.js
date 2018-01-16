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
        

 


$(".div--container__technologies > ul").on("mousedown touchstart", function(e) {

    if (!$(this).hasClass("active")) {
      console.log('clicked');
    // hide any open menus and remove all other classes
    $(".collapsible-body").slideUp(300);
    $(".div--container__technologies > ul").removeClass("active");

    // open our new menu and add the open class
    $(this).next("div").slideDown(300);
    $(this).addClass("active");
    }

    else if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).next("div").slideUp(300);
    console.log("slideback");
    }

});
});