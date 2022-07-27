
$(document).ready(function(){

  //scroll slider
  let controller = new ScrollMagic.Controller(); //controlls all the scroll animations
  
  let timeline1 = new TimelineMax(); //controlls all the scroll animations
  timeline1
  .to('.section-1', 4, {
      autoAlpha: 0 //When you animate autoAlpha to 0. autoAlpha will set visibility hidden to visible then animate opacity from 0 to 1
  })
  .from('.section-2', 4, {
      autoAlpha: 0
  },'-=4')  //-=4 is an offset value passed which means that animation start before the 4sec of fisrt from animation completed
  .from('.section-3', 4, {
      autoAlpha: 0
  })
  .from('.section-4', 4, {
      autoAlpha: 0
  })

  let scene1 = new ScrollMagic.Scene({
      triggerElement: '.scroll-slider-section',
      duration: '100%',
      triggerHook: 0,
      offset: '100'
  })
  .setTween(timeline1) // A tween can be a timeline consisting of multiple tweens and even contain events attached
  .setPin('.scroll-slider-section') //set-pin-donot pass the first section without completing animations
  .addTo(controller); //scene added to controller


hamburger();
  header_adj();
// ACCORDION
$('.heading').click(function(event){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected');
      $(this).next().slideUp();
      $(this).parent().removeClass('active');
    }
    else{
      $('.heading').removeClass('selected');
      $(this).addClass('selected');
      $('.heading').next().slideUp();
      $(this).next().slideDown();
      $('#accordion-1').removeClass('active');
      $(this).parent().addClass('active');
    }
   })

// TABS
/*------- Active tab --------*/
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  //tab nav Left scroll when clicked on tab
  var Scroll = $(this).position();
        scroll = $('#tabs-nav').scrollLeft();
        $('#tabs-nav').animate({
            'scrollLeft': scroll + Scroll.left - 70
        }, 200);

  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn(900);
  return false;

});



// TAB TO ACCORDION
/* tab */
	$('.tabs li:first-child').addClass('active');
$('.tab-content-2').hide();
$('.tab-content-2:first').show();

$('.tabs li').click(function(){
  $('.tabs li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content-2').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn(900);
  return false;

});

	/* accordion */
	$('.tab-heading').click(function(event){
		if($(this).hasClass('tab-active')){
		  $(this).removeClass('tab-active');
		  $(this).next().slideUp();
		  $(this).parent().removeClass('active');
		}
		else{
		  $('.tab-heading').removeClass('tab-active');
		  $(this).addClass('tab-active');
		  $('.tab-heading').next().slideUp();
		  $(this).next().slideDown();
		  $('.tab-content-2').removeClass('active');
		  $(this).parent().addClass('active');
		}
	   })

	

//3 LEVEL MENU
$('.menu-links .arrow').click(function () {
  if ($(window).width() <= 768) {
    $(this).closest('.menu-links').find('.sub-menu').slideToggle(768);
	$(this).toggleClass('openslide');
  }
});
$('.sub-menu-link .arrow-2').click(function () {
  if ($(window).width() <= 768) {
    $(this).closest('.sub-menu').find('.sub-sub-menu').slideToggle(768);
    $(this).toggleClass('openslide');
  }

});

// SLIDER
var slideLength;
var Slide = slideLength;
var slideCount, slideWidth, sliderUlWidth;

$(function slider(){
 slideCount = $('#slider .slider-block .slider-content').length;
 slideWidth = $('#slider').width();
 sliderUlWidth = slideCount * slideWidth;
 $('#slider .slider-block .slider-content').css({ width: slideWidth });
 $('#slider .slider-block').css({ width: sliderUlWidth, marginLeft: - slideWidth });
 $('#slider .slider-block .slider-content:last-child').prependTo('#slider .slider-block'); //add element at first

 function moveLeft()
 {
  $('#slider .slider-block ').animate(
  {
   left: + slideWidth
  }, 800,
  function()
  { 
  //bring the last li to the beginning of the ul
   $('#slider .slider-block .slider-content:last-child').prependTo('#slider .slider-block');
  //reset the ul's 'left' property as empty string 
   $('#slider .slider-block').css('left', '');
  });
  Slide = slideLength;
 };

 function moveRight()
 {
  $('#slider .slider-block').animate(
  {
   left: - slideWidth
  }, 800,
  function()
  { 
    //bring the first li to the end of the ul
   $('#slider .slider-block .slider-content:first-child').appendTo('#slider .slider-block'); //add element at last
   //reset the ul's 'left' property as empty string
   $('#slider .slider-block').css('left', '');
  });
  Slide = slideLength;
 };

 /*=========== slider arrows ========*/
 $('.prev-arrow').click(function()
 {
  moveLeft();
 });
 $('.next-arrow').click(function()
 {
  moveRight();
 });
 setInterval(function()
 {
  if( Slide == 0 )
  {
   moveRight();
  }
 } );
});
})


$(".btn").click(function(){
  $(".btn-text").slideToggle();
});
$(window).resize(function()
{
 slideCount = $('#slider .slider-block .slider-content').length;
 slideWidth = $('#slider').width();
 sliderUlWidth = slideCount * slideWidth;
 $('#slider .slider-block .slider-content').css({ width: slideWidth });
 $('#slider .slider-block').css({ width: sliderUlWidth, marginLeft: - slideWidth });

 header_adj();
});

$(window).on("load", function(){
  header_adj();
})

/*---- hamburger menu ----*/
function hamburger() {
  $('#menu-bar ,.overlay ').click(function () {
    $('body').toggleClass('open-menu');
    $('.menu-links ul li a').click(function () {
      $('body').removeClass('open-menu');
    });
  });
}

// active nav
$(window).scroll(function() {
  var windscroll = $(window).scrollTop();    
  if (windscroll >= 100) {
      $('.section').each(function(link) {
      // The number at the end of the next line is how pany pixels you want from the top you want it to activate.
          if ($(this).position().top  <= windscroll + 180) {
              $('.menu-links ul li').removeClass('active');
              $('.menu-links ul li').eq(link).addClass('active');
          }
      });
  } else {
    $('.menu-links ul li:first').addClass('active');
      $('.menu-links ul li.active').removeClass('active');
  }
}).scroll();
$(document).on('click', '.menu-links ul li a', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 110
  }, 800);                                //800--miliseconds it takes to scroll at specified area.
});

// Header Adjust
function header_adj(){
  var header_height = $(".header-2").outerHeight();
  $(".main-wrap").css({"padding-top": header_height + "px"});
}

// Back to top Button
$(window).scroll(function(){
var showAfter = 100;  // Show button after 100px
  if ( $(this).scrollTop() > showAfter ) { 
   $('.back-to-top').fadeIn();
  } else { 
   $('.back-to-top').fadeOut();
  }
 });
 
 $('.back-to-top').click(function(){//Click event to scroll to top
  $('html, body').animate({scrollTop : 0},800);
  return false;
 });

  
 