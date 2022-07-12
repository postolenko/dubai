var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

$(window).load(function() {
  getAnimation();
});

$(window).resize(function() {
  getAnimation();
});

$(document).scroll(function() {
  getAnimation();
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
          responsive: [
              {
                breakpoint: 1240,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
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
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
    }

    // ----------------

    $(".tab_link").click(function(e) {
      parent = $(this).closest(".tab_list");
      parent.find(".tab_link").removeClass("active");
      $(this).addClass("active");
    });

    // ----------------

    $(".tab_link_2").each(function() {
      if($(this).hasClass("active")){
        id = $(this).attr("for");
        if($("#"+id).is(":checked")) {
          sliderWrapp = $("#"+id).next(".tab_content");
          slider = sliderWrapp.find(".slider_2");
          slider.not(".slick-initialized").slick({
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
      }
      return true;
    });

    $(".tab_link_2").click(function(e) {
      if(!$(this).hasClass("active")) {
        parent = $(this).closest(".tab_list_2");
        parent.find(".tab_link_2").removeClass("active");
        $(this).addClass("active");
        id = $(this).attr("for");
        sliderWrapp = $("#"+id).next(".tab_content");
        slider = sliderWrapp.find(".slider_2");
        setTimeout(function() {
          slider.not(".slick-initialized").slick({
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
        },200);
      }      
    });

    // if( $(".slider_2").length > 0 ) {
    //     $(".slider_2").not(".slick-initialized").slick({
    //         dots: false,
    //         arrows: true,
    //         autoplay: true,
    //         autoplaySpeed: 4000,
    //         speed: 1200,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         fade: true,
    //         prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/slick_prev.svg"></button>',
    //         nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/slick_next.svg"></button>'
    //     });
    // }

  // --------------

  $(".respmenubtn").click(function(e) {
    e.preventDefault();
    if( $("#resp_nav").is(":hidden") ) {
        $("#resp_nav").fadeIn(300);
        $(this).addClass("active");
    } else {
        $("#resp_nav").fadeOut(300);
        $(this).removeClass("active");
    }
  });

  $(".close_nav").click(function(e) {
    e.preventDefault();
    $("#resp_nav").fadeOut(300);
  });
  
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 767) {
              $("#resp_nav").fadeOut(300);
              $(".respmenubtn").removeClass("active");
      }
  });

});