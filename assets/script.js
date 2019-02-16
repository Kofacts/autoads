$(document).ready(function () {

  //image slider 
  $('.slide2,.slide3').hide();
  $(".sliders > .slide:gt(0)").hide();
  setInterval(changeSlides, 3000)

  function changeSlides() {
    $('.sliders > .slide:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end();
  }

  $('.second_stage').hide();
  $('.third_stage').hide();
  $('.fourth_stage').hide();
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    }

  });

});
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    }

  });
  $('.product-options').select2();

  //TESTIMONIAL SLIDER
  if ($(".ts-testimonial-slide").length > 0) {

    $(".ts-testimonial-slide").owlCarousel({
      autoPlay: 4000,
      slideSpeed: 1000,
      navigation: false,
      pagination: true,
      singleItem: true
    });
  };


  $('#nav-icon2').click(function () {
    $(this).toggleClass('open');
    $('.nav_mobile').toggle();
  });

  $('.proceed1').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    $('.link1').removeClass('is-active');
    $('.first_stage').hide();
    $('.second_stage').show();
    $('.link2').addClass('is-active');
  });
  $('.proceed2').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    $('.link2').removeClass('is-active');
    $('.first_stage').hide();
    $('.second_stage').hide();
    $('.third_stage').show();
    $('.link3').addClass('is-active');
  });
});