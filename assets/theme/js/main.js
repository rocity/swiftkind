$(document).ready(function() {
    $('.horizontal-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
    });

    $('.vertical-slider').slick({
        arrows: false,
        dots: true,
        edgeFriction: .5,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
    });

    $('.vertical-slider').mousewheel(function(e) {
        if (e.deltaY < 0) {
            if ($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
                return
            }

            e.preventDefault()
            $(this).slick('slickNext')
        } else {
            if ($(this).slick('slickCurrentSlide') == 0) {
                return
            }

            e.preventDefault()
            $(this).slick('slickPrev')
        }
    });

    //owlcarouse
    $('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='/static/theme/images/icons/arrow-left.png'>","<img src='/static/theme/images/icons/arrow-right.png'>"],
    responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });
    $('.carousel').carousel({
       interval: 2000
    });
    //wow.js
    new WOW().init();

    //sidebar trigger
    $('.contact-trigger').on('click', function(){
      $('#page-wrapper').toggleClass('open');
      $('#page-wrapper').addClass('left-open');
      $('.hamburger').addClass('open');
      $('.nav-links').addClass('open');
    });

    $('.menu-trigger').on('click', function(){
      $('#page-wrapper').toggleClass('left-open');
      $('.hamburger').toggleClass('open');
      $('.nav-links').toggleClass('open');

      
    })

    $('.close-contact').on('click', function(){
       $('#page-wrapper').removeClass('open');
       $('#page-wrapper').removeClass('left-open');
       $('.hamburger').removeClass('open');
       $('.nav-links').removeClass('open');

    });

    $(window).scroll(function(){
      var scroll = $('#page-wrapper').scrollTop();
      if(scroll > 600){
        $('.navbar').addClass('active');
      }
      else{

        $('.navbar').removeClass('active');
      }
    });
});