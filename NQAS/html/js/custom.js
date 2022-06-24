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
  equalHeight();
});
$(window).on("resize", function(){
  footer_adj();
  header_adj();
  equalHeight();
})
$(window).on("load", function(){
  footer_adj();
  header_adj();
  equalHeight();
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

/*------- Active yab --------*/
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
    $('.tabs-block .tabs .tab-content .text-content .card-block .card .text-block p').equalHeight();
    $('.tabs-block .tabs .tab-content .text-content .card-block .card .img-block').equalHeight();
  }, 700);
}


