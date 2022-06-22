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

  // header search model open/close 
$('.search-btn').on('click', function(e) {
    e.preventDefault();
    $('.modal-search').toggleClass('is-visible');
  });


//   function header_adj() {
// 	var header_height = $(".header").outerHeight();
// 	$(".main-wrap").css({ "padding-top": header_height + "px" });  
//   $(".header").click(function() {
//     $('html, body').animate({
//         scrollTop: $(".img-wrapper").offset().top -  header_height
//     }, 1500);
// });
// }

// $(document).ready(function(){
//     header_adj();
//   });
// $(window).on("resize", function(){
//   header_adj();
// })


// function footer_adj() {
//   var footer_height = $(".footer").outerHeight();
//   $(".wrapper").css({
//       "padding-bottom": footer_height + "px"
//   });
//   $(".footer").css({
//       "margin-top": -footer_height + "px"
//   });
// }

// $(document).ready(function(){
//   footer_adj();
// });
// $(window).on("resize", function(){
//   footer_adj();
// })