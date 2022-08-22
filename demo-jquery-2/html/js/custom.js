$(document).ready(function(){
header_adj();


  //SHOW IMG ON MOUSE MOVE
  var $background = $(".bg-img"),
  backgroundWHalf = $background.width() / 2;
    $(document).on("mousemove", function(e) {
      $background.css({"left": e.pageX - backgroundWHalf, "top": e.pageY - backgroundWHalf});
    });
  
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

  var scale_tween = TweenMax.to('#scale-animation', 1, {
    transform: 'scale(.75)',
    ease: Linear.easeNone
  });
  var scale_scene = new ScrollMagic.Scene({
    triggerElement: '#scale-trigger'
  })
  .setTween(scale_tween);
  controller.addScene([
    scale_scene,
  ]);
  
  new ScrollMagic.Scene({triggerElement: "#sec1"})
					.setClassToggle("#high1", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec2"})
					.setClassToggle("#high2", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec3"})
					.setClassToggle("#high3", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec4"})
					.setClassToggle("#high4", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

          var tween = TweenMax.to("#animate", 0.5, {scale: 1.3, repeat: 5, yoyo: true});

	// build scene and set duration to window height
var scene_2 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "100%"})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

var scene_3  = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#animate1", "zap")
					.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);

 //create tween
var tween = TweenMax.to('#animation', 3, {
  x: 1200,
  y:200,
  ease: Cubic.easeOut
});

//create new scene and call tween.
var scene_4 = new ScrollMagic.Scene({
 triggerElement: "#move",
 offset:300 
})
 .addIndicators()
 .setTween(tween)
 .addTo(controller);         

  //Move bg img on mouse hover
  var move_img = document.querySelector('.et-img');
  var windowWidth = window.innerWidth / 4;
  var windowHeight = window.innerHeight / 4;
  
  move_img.addEventListener('mousemove', (mouse) => { //addEventListener() method attaches an event handler to the specified element. ('type of event',(func we want to call))
    var mouseX = mouse.clientX / windowWidth; //returns the horizontal coordinate (according to the client area) of the mouse pointer when a mouse event was triggered
    var mouseY = mouse.clientY / windowHeight; //returns the vertical coordinate (according to the client area) of the mouse pointer when a mouse event was triggered
    
    move_img.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  });
})
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

$(window).scroll(function() {
  var windscroll = $(window).scrollTop();    
  if (windscroll >= 100) {
      $('.sections').each(function(link) {
      // The number at the end of the next line is how pany pixels you want from the top you want it to activate.
          if ($(this).position().top  <= windscroll + 80) {
              $('.slider-nav .lists li').removeClass('active');
              $('.slider-nav .lists li').eq(link).addClass('active');
          }
      });
  } else {
    $('.slider-nav .lists li:first').addClass('active');
      $('.slider-nav .lists li.active').removeClass('active');
  }
}).scroll();
$(document).on('click', '.slider-nav .lists li a', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 60
  }, 800);                                //800--miliseconds it takes to scroll at specified area.
});


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
 
  // Header Adjust
function header_adj(){
  var header_height = $(".header-2").outerHeight();
  $(".main-wrap").css({"padding-top": header_height + "px"});
} 