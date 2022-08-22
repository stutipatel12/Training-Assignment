$(document).ready(function(){

    hamburger();

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