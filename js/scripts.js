var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".slider").length > 0 ) {
      $(".slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 3,
          slidesToScroll: 1,
          // fade: true,
          // responsive: [
          //     {
          //       breakpoint: 900,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 2
          //       }
          //     },
          //     {
          //       breakpoint: 540,
          //       settings: {
          //         slidesToShow: 1,
          //         slidesToScroll: 1
          //       }
          //     }
          //   ]
      });
    }

    if( $(".testimonials_slider").length > 0 ) {
      $(".testimonials_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 2,
          slidesToScroll: 1,
          // fade: true,
          // responsive: [
          //     {
          //       breakpoint: 900,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 2
          //       }
          //     },
          //     {
          //       breakpoint: 540,
          //       settings: {
          //         slidesToShow: 1,
          //         slidesToScroll: 1
          //       }
          //     }
          //   ]
      });
    }

    // ----------------

    $(".tab_link").click(function(e) {
      parent = $(this).closest(".tab_list");
      parent.find(".tab_link").removeClass("active");
      $(this).addClass("active");
    });

    // ----------------

    $(".tab_link_2").click(function(e) {
      if(!$(this).hasClass("active")) {
        parent = $(this).closest(".tab_list_2");
        parent.find(".tab_link_2").removeClass("active");
        $(this).addClass("active");
        $(".slider_2").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/slick_prev.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/slick_next.svg"></button>'
        });
      }
      
    });

    if( $(".slider_2").length > 0 ) {
        $(".slider_2").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/slick_prev.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/slick_next.svg"></button>'
        });
    }

});