$(document).ready(function() {
 
  $('.bxslider').bxSlider({
    easing: 'ease-in-out',
    auto: true,
    speed: 600,
    pause: 6000
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
      $(".parallax-img").css('-webkit-transform', 'translate3d(0,' +  (scroll/3)  + 'px, 0)');
    }else {
      var scroll = $(window).scrollTop();
      $(".parallax-img").css('transform', 'translate3d(0,' +  (scroll/3)  + 'px, 0)');
    }

  });

  $('#navTrigger a').click(function(e) {
    e.preventDefault();
    $('#globalNav').toggleClass('show');
    if ($('#globalNav').hasClass('show')) {
      $('body').addClass('nav-opened');
      $(this).addClass('opened');
      $(this).children('i').removeClass('icon-menu').addClass('icon-close')
    } else {
      $('body').removeClass('nav-opened');
      $(this).children('i').removeClass('icon-close').addClass('icon-menu');
      $(this).removeClass('opened');
    }
  });


  $('body:not(.search-in-focus) .search-panel input.search-input').change(function() {
    $(this).parents('.search-panel').addClass('in-focus');
    $('body').addClass('search-in-focus');
  });

  $('.search-panel input.search-input').focus(function(e) {
    $(this).parents('.search-panel').addClass('typed');
  });

    $(window).click(function() {
    if ($('.sub-wrap').hasClass('open')) {
      $('.sub-wrap.open').removeClass('open');
    }

    if ($('body').hasClass('search-in-focus')) {
      $('.search-panel').removeClass('in-focus');
      $('body').removeClass('search-in-focus');
    }
  });

  $('.user-nav > div').click(function(event){
      event.stopPropagation();
  });

  $('body:not(.search-in-focus) .search-panel').click(function(event){
      event.stopPropagation();
  });



});


