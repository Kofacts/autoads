$(document).ready(function(){
    $('.second_stage').hide();
    $('.third_stage').hide();
    $('.fourth_stage').hide();
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
      if (scrollTop >= 100) {
        $('#global-nav').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#global-nav').removeClass('scrolled-nav');
      } 
      
    }); 
    
});
$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    } 
    
  }); 
  $('.product-options').select2();

  $('.proceed1').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.link1').removeClass('is-active');
    $('.first_stage').hide();
    $('.second_stage').show();
    $('.link2').addClass('is-active');
  });
  $('.proceed2').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.link2').removeClass('is-active');
    $('.first_stage').hide();
    $('.second_stage').hide();
    $('.third_stage').show();
    $('.link3').addClass('is-active');
  });
});