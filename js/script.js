$( document ).ready(function(){

  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({
            dist:0,
            shift: 0,
            fullWidth: true
      });

  $('.next').bind("touchstart click", function(e) {
    $('.carousel.carousel-slider').carousel('next');
  });

  $('.prev').bind("touchstart click", function(e) {
    $('.carousel.carousel-slider').carousel('prev');
  });
        
  $('.toggle').bind("touchstart mousedown", function(e) {
    e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
  });
});