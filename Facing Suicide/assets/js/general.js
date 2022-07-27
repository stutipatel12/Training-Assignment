$(document).ready(function() {
$('.slider').slick({
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
        breakpoint: 1285,
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
        breakpoint:480,
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

  $('.slider-2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });  
});

//counter home page
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
// $('count').addClass('animated fadeIn');

// Search Model
$(document).ready(function(){
  $( ".search-btn" ).click(function() {
    $( ".search-model" ).toggle();
    document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden';
  });
  $( ".close-icon" ).click(function() {
    $( ".search-model" ).toggle();
    document.body.style.overflow = 'auto';
  });
})


/*--------------Watch- modal-------------*/
$(document).ready(function(){
  $( ".watch-btn" ).click(function() {
    $( ".watch-modal" ).toggle();
    document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden';
  });
  $( ".close" ).click(function() {
    $( ".watch-modal" ).toggle();
    document.body.style.overflow = 'auto';
    });

})

//add/remove active class on scroll in header
$(document).ready(function() {
  $(window).scroll(function(){
      if ($(this).scrollTop() > 30) {
         $('.global-header').addClass('active-global');
      } else {
         $('.global-header').removeClass('active-global');
      }
  });
});

// header search model open/close 
$('.search-btn').on('click', function(e) {
  e.preventDefault();
  $('.modal-search').toggleClass('is-visible');
});


//Tabs in give help page
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

/*--------------ACTIVE NAV------------------*/


$(window).scroll(function() {
  var windscroll = $(window).scrollTop();    
  if (windscroll >= 100) {
      $('section').each(function(i) {
      // The number at the end of the next line is how pany pixels you from the top you want it to activate.
          if ($(this).position().top  <= windscroll - 200) {
              $('nav li.active').removeClass('active');
              $('nav li').eq(i).addClass('active');
          }
      });
  } else {
      $('nav li.active').removeClass('active');
      $('nav li:first').addClass('active');
  }
}).scroll();
$(document).on('click', '.sub-nav ul li a', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 260
  }, 500);
});



/*----------hamburger menu-------------*/
function onClickMenu(){
  document.getElementById("body").classList.toggle("open-menu");
}

// --------------story block---------
function left_image(){
 if ($(".story-block").length > 0){
   if ($(window).width()> 766){
     var img_right = $('.story-block .right-block').offset().left;
     $('.story-block .bg-img').css({
       "width": img_right
     });
   } else{
     $('.story-block .bg-img').css({
       "width": "100%"
     });
   }
 }
}
$(document).ready(function(){
  setTimeout(function(){
    left_image();
  },1000);
});
$(window).on("load", function(){
  setTimeout(function(){
    left_image();
  },1000);
});
$(window).on("resize", function(){
  left_image();
});

//Animations

AOS.init({
  once:true,
  duration: 1000,
  easing: 'ease', 
}
);

function header_adj() {
	var header_height = $(".header").outerHeight();
	$(".main-wrap").css({ "padding-top": header_height + "px" });  
  $(".header").click(function() {
    $('html, body').animate({
        scrollTop: $(".img-wrapper").offset().top -  header_height
    }, 1500);
});
}

$(document).ready(function(){
    header_adj();
  });
$(window).on("resize", function(){
  header_adj();
})


function footer_adj() {
  var footer_height = $("footer").outerHeight();
  $(".wrapper").css({
      "padding-bottom": footer_height + "px"
  });
  $("footer").css({
      "margin-top": -footer_height + "px"
  });
}

$(document).ready(function(){
  footer_adj();
});
$(window).on("resize", function(){
  footer_adj();
})