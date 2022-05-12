$(document).ready(function() {
  $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
         $('.header').addClass('active');
      } else {
         $('.header').removeClass('active');
      }
  });
});

$('.slider-slick').slick({
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    prevArrow: '<img class="slick-arrow prev" src="public/images/admin-arrow.png" alt="arrow-image">',
    nextArrow: '<img class="slick-arrow next" src="public/images/admin-arrow.png" alt="arrow-image">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          variableWidth: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    ]
  });

$(document).ready(function(){
  $(".fa-bars").click(function(){
    document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden'
  });   
  $(".overlay").click(function(){
    document.body.style.overflow = 'auto'
  });
  $(".fa-times").click(function(){
    document.body.style.overflow = 'auto'
  })
})