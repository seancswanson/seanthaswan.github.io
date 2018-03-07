$(document).ready(function() {

    var landing = $('#div--container__landing');
    landing.animate({ opacity: 1 });

  $('#fullpage').fullpage({
    lockAnchors: false,
    anchors: ['hello-world', 'portfolio', 'about', 'get_in_touch'],
    navigation: false,
    navigationPosition: 'top',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    sectionsColor: ['#349fda'],

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: false,
    fitToSection: false,
    fitToSectionDelay: 500,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: true,
    interlockedSlides: false,
    dragAndMove: true,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    paddingTop: '0',
    paddingBottom: '0',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){var loadedSlide = $(this).find('img');loadedSlide.animate({ opacity: 1 });},
  });

  var tech = ['React.JS', 'JavaScript', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'];

  var change = setInterval(function() {
    var randomNumber = Math.round( Math.random() * (tech.length-1) );
    $('.p--landing__skills').text(tech[randomNumber]);
  }, 1400);


  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    onClose: function(){document.body.style.overflow="visible"}
  })


});