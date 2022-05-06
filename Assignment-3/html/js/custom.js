$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
    
    $('.slider1').slick({
        nextArroe:'.next-arrow',
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.slider2').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint:400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.slider3').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 788,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint:600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});
$(document).ready(function() {
  $('.date-slider').slick({
    nextArroe:'.next-arrow',
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });   
 
});

/*---------------fixed-navbar------------*/
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 0) {
      $(".navbar").addClass("fixed-white-header");
      $('.logo img').attr("src","./images/logo.png");
	  }

	  else{
      $(".navbar").removeClass("fixed-white-header");
      $('.logo img').attr("src","./images/logo_1.png");

	  }
  })
})
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 0) {
      $(".white-header").addClass("fixed-white-header");
      $('.search-result .logo img').attr("src","./images/logo.png");
	  }
    else{
      $(".white-header").removeClass("fixed-white-header");
      $('.search-result .logo img').attr("src","./images/logo.png");

	  }
  })
})

/*-------------------------------------------------*/
function onClickMenu(){
  document.getElementById("body").classList.toggle("open-menu");
}


$(document).ready(function(){
  $(".open-apply-btn button").click(function(){
    $(".hide").toggle();
  });
});

/*--------------active-nav--------------------*/

$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
      $('.active-nav section').each(function(i) {
      // The number at the end of the next line is how many pixels you from the top you want it to activate.
          if ($(this).position().top  <= windscroll) {
              $('.link.active').removeClass('active');
              $('.link').eq(i).addClass('active');
          }
      });
  } else {
      $('.link.active').removeClass('active');
      $('.link:first').addClass('active');
  }
}).scroll();


$(document).on('click', '.active-nav ul li a', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 150
  }, 500);
});

/*-----date picker--------------*/
$('.datepicker').datepicker({
  format: 'mm/dd/yyyy',    
});

/*-------------------Search result slider------------------------*/
$('.search-result-slider').slick({
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1, 
  responsive: [
      {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
      }
      },
  ] 
});
/*-----------------------------------------------------*/
/*-----------------------Filter noui slider-------------------*/
$(document).ready(function(){
var keypressSlider = document.getElementById("slider-keypress");
var skipValues = [
  document.getElementById("skip-value-min"),
  document.getElementById("skip-value-max")
];

noUiSlider.create(keypressSlider, {
  start: [1, 11],
  connect: true,
  behaviour: "drag",
  step: 1,
  range: {
    min: 1,
    max: 30
  },
  format: {
    from: function (value) {
        return parseInt(value);
    },
    to: function (value) {
        return parseInt(value);
    }
}
});

keypressSlider.noUiSlider.on("update", function(values, handle) {
  skipValues[handle].innerHTML = values[handle];
});
})

/*--------------------More-filter toggle------------------*/
$(document).ready(function(){
  $("#toggle-btn").click(function(){
    $("#panel").slideToggle("slow");
    document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden' ;
  });
});
$(document).ready(function(){
  $("#toggle-btn").click(function(){
    $(".toggle-overlay").slideToggle("fast");
  });
});

