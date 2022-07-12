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

  // ------------

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var hrefAttr = $(this).attr("href");
    if( hrefAttr.length > 0 && hrefAttr != "#" ) {
        $('html, body').stop().animate({
            'scrollTop': $(hrefAttr).offset().top+2
        }, 500);
    }
    if($("#resp_nav").is(":visible") && bodyWidth <= 767) {
      $("#resp_nav").fadeOut(300);
      $(".respmenubtn").removeClass("active");
    }
  });

  // ------------

  $("[data-popup-link]").on("click", function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      $("body").addClass("fixed");
      $("body").css({
          "position" : "fixed",
          "top" :  -$(document).scrollTop() + "px",
          "overflow" : "hidden",
          "right" : 0,
          "left" : 0,
          "bottom" : 0,
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
  });
  $(".close_popup, .popup_bg").on("click", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").attr("style", "");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").removeClass("fixed");
      $(".popup_bg").fadeOut(300);
      $("[data-popup]").fadeOut(300);
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
          curTop = $("body").css("top");
          curTop = Math.abs(parseInt(curTop, 10));
          $("body").attr("style", "");
          if (curTop !== 0) {
              $("html").scrollTop(curTop);
          }
          $("body").removeClass("fixed");
          $(".popup_bg").fadeOut(300);
          $("[data-popup]").fadeOut(300);
      }
  });
  $(document).on("mouseup", function(e) {
    if($(".popup").is(":visible")) {
      e.preventDefault();
      hide_element = $(".popup_content");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          curTop = $("body").css("top");
          curTop = Math.abs(parseInt(curTop, 10));
          $("body").attr("style", "");
          if (curTop !== 0) {
              $("html").scrollTop(curTop);
          }
          $("body").removeClass("fixed");
          $(".popup_bg").fadeOut(300);
          $("[data-popup]").fadeOut(300);
      }
    }
  });

});