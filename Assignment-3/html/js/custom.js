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
            breakpoint: 1024,
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
            breakpoint: 480,
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
            breakpoint: 1024,
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
            breakpoint: 480,
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
            breakpoint: 1024,
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
            breakpoint: 480,
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

/*---------------fixed-navbar------------*/
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 150) {
	    $(".navbar").css({"background":"white","box-shadow":"5px 10px 18px #888888"});
      $(".navbar ul li a").css("color", "#44a9c9");
      $(".login-btn").css({"border":"1px solid #44a9c9","color":"#44a9c9"})
      $('.logo img').attr("src","./images/logo.png");


      $(".login-btn").hover(function(){
        $(this).css({"background-color":"#44a9c9","color":"white"});
        }, function(){
        $(this).css({"background-color":"transparent","color":"#44a9c9"});
      });
	  }

	  else{
		  $(".navbar").css({"background":"transparent","box-shadow":"none"});  	
      $("a").css("color", "white");
      $(".login-btn").css({"border":"1px solid white","color":"white"})
      $('.logo img').attr("src","./images/logo_1.png");

      $(".login-btn").hover(function(){
        $(this).css({"background-color":"white","color":"#44a9c9"});
      },function(){
        $(this).css({"background-color":"transparent","color":"white"});
      });

	  }
  })
})
// $(document).ready(function(){
//   $(".login-btn").hover(function(){
//     $(this).css("background-color", "yellow");
//     }, function(){
//     $(this).css("background-color", "pink");
//   });
// });
