// Search Model
    $( ".search-btn" ).click(function() {
      $( ".search-model" ).toggle();
      document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden';
    });
    $( ".close-icon" ).click(function() {
      $( ".search-model" ).toggle();
      document.body.style.overflow = 'auto';
    });

  // header search model open/close 
$('.search-btn').on('click', function(e) {
    e.preventDefault();
    $('.modal-search').toggleClass('is-visible');
  });



function header_adj(){
  var header_height = $(".header").outerHeight();
  $(".main-wrap").css({"padding-top": header_height + "px"});
}


function footer_adj() {
  var footer_height = $(".footer").outerHeight();
  $(".wrapper").css({
      "padding-bottom": footer_height + "px"
  });
  $(".footer").css({
      "margin-top": -footer_height + "px"
  });
}

$(document).ready(function(){
  footer_adj();
  header_adj();
  setTimeout(function(){
    equalHeight();
  },1000)
});
$(window).on("resize", function(){
  footer_adj();
  header_adj();
  setTimeout(function(){
    equalHeight();
  },1000)
})
$(window).on("load", function(){
  footer_adj();
  header_adj();
  setTimeout(function(){
    equalHeight();
  },1000)
})


/*===== Banner slider ====*/
$('.slider').slick({
  dots: true,
});

/*===== Fixed Header =====*/
$(window).scroll(function(){
  if ($(this).scrollTop() > 30) {
     $('.header').addClass('fixed-header');
  } else {
     $('.header').removeClass('fixed-header');
  }
});

/*------- Active tab --------*/
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn(900);
  return false;
});



/*========================EQUAL HEIGHT=============*/
function equalHeight() {
  jQuery.fn.extend({
      equalHeight: function () {
          var top = 0;
          var row = [];
          var classname = ('equalHeight' + Math.random()).replace('.', '');
          $(this).each(function () {
              var thistop = $(this).offset().top;
              if (thistop > top) {
                  $('.' + classname).removeClass(classname);
                  top = thistop;
              }
              $(this).addClass(classname);
              $(this).height('auto');
              var h = (Math.max.apply(null, $('.' + classname).map(function () {
                  return $(this).outerHeight();
              }).get()));
              $('.' + classname).height(h);
          }).removeClass(classname);
      }
  });

  setTimeout(function () {
    $('.tabs-block .tabs .tab-content .text-content .card-block .card-item .text-block .text-wrap').equalHeight();
    $('.slider-section .content-block .slider-2 .slide').equalHeight();
    $('.bottom-product-block .product-card-block .card-block .card-item .content-block .head-wrap').equalHeight();
    $('.bottom-product-block .product-card-block .card-block .card-item .content-block .text-wrap').equalHeight();
    $('.bottom-product-block .product-card-block .card-block .card-item .content-block .text-wrap .equal-text p').equalHeight();
    $('.bottom-product-block .product-card-block .card-block .card-item .content-block').equalHeight();
  }, 1000);
}

/*========== Slider 2 ==========*/
$('.slider-2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
       infinite: false,
      }
    },
    {
      breakpoint:992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        infinite: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint:612,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint:375,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
      }
    }
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*----------hamburger menu-------------*/
function onClickMenu(){
  document.getElementById("body").classList.toggle("open-menu");
}


//Animations

AOS.init({
  once:true,
  duration: 1000,
  easing: 'ease', 
}
);

// ACCORDION

 $('.head').click(function(event){
  if($(this).hasClass('selected')){
    $(this).removeClass('selected');
    $(this).next().slideUp();
    $(this).parent().removeClass('active');
  }
  else{
    $('.head').removeClass('selected');
    $(this).addClass('selected');
    $('.head').next().slideUp();
    $(this).next().slideDown();
    $('#accordion-1').removeClass('active');
    $(this).parent().addClass('active');
  }
 })

 function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("body").classList.toggle("open-filter");
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}