$( document ).ready(function() {

    $('.product-owl .owl-carousel').owlCarousel({
        items:4,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    /**** slideshow */

    $('.slideshow .owl-carousel').owlCarousel({
      items: 1,
      slideSpeed: 1000,
      nav: false,
      pagination: true,
      animateOut: 'fadeOut',
      mouseDrag: false,
      touchDrag: false,
      autoplay:true,
      autoplayTimeout:4000
    });
    
});
