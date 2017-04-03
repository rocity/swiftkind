$(document).ready(function() {
    //owlcarouse
    $('#testimony').owlCarousel({
    rtl:false,
    loop:true,
    margin:10,
    dots:false,
    //autoplay: true,
    nav:true,
    interval: 2000,
    navText: ["<img src='assets/images/icons/arrow-left.png'>","<img src='assets/images/icons/arrow-right.png'>"],
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
    $('#team-xs').owlCarousel({
    rtl:false,
    margin:10,
    loop:true,
    dots:true,
    stagePadding:20,
    responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:2
          }
      }
    });
    
    //wow.js
    new WOW().init();

    //sidebar trigger
    var sc = $(window).width();
    $('.contact-trigger').on('click', function(){
      
      if (sc > 425){
      $('#page-wrapper').toggleClass('open');
      $('.content-wrapper').addClass('left-open');
      $('.hamburger').addClass('open');
      $('.nav-links').addClass('open');

      }
      else if(sc < 425){
         $('#page-wrapper').addClass('open');      
      }
      

    });

    $('.menu-trigger').on('click', function(){
      $('.content-wrapper').toggleClass('left-open');
      $('.hamburger').toggleClass('open');
      $('.nav-links').toggleClass('open');
      $('#page-wrapper').removeClass('open');

      
    })

    $('.close-contact').on('click', function(){
      if (sc > 425){
         $('#page-wrapper').removeClass('open');
         $('#page-wrapper').removeClass('left-open');
         $('.hamburger').removeClass('open');
         $('.nav-links').removeClass('open');
      }
      else if(sc < 425){
         $('#page-wrapper').removeClass('open');      
      }

    });

    // $(window).scroll(function(){
    //   if(sc> 768){
    //     var scroll = $('#page-wrapper').scrollTop();
    //     if(scroll > 600){
    //       $('.navbar').addClass('active');
    //     }
    //     else{

    //       $('.navbar').removeClass('active');
    //     }
    //   }
    // });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);

            $('.content-wrapper').removeClass('left-open');
            $('.hamburger').removeClass('open');
            $('.nav-links').removeClass('open');
                return false;
            }

                
        }
    });
    console.log('click');
});