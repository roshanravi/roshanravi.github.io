$(function() {

	$('.slider').bxSlider({
		mode: 'fade',
		auto: true,
		autoControls: false,
		controls: false,
		stopAutoOnClick: true,
		pager: false,
		pause: 7000,
		onSliderLoad: function(currentIndex) {     
			$('.slider').find('.bx-viewport').find('ul').children().eq(currentIndex + 1).addClass('active-slide');
		},
		onSlideBefore: function($slideElement){
			$('.slider').find('.bx-viewport').find('ul').children().removeClass('active-slide');
			$slideElement.addClass('active-slide');
		}
	});

  var Spanizer = (function() {

    /**
     * Global settings
     */
     var settings = {
      letters: $('.js-letters'),
      mast: $('.mast'),
      animateClass: 'active-slide',
    };
    
    return {

      /**
       * Init
       */
       init: function() {
        this.bind();
      },
      
      /**
       * Bind Events
       */
       bind: function(){
        // Spanize Letters
        Spanizer.doSpanize();
        // Refresh animation
      },
      
      /**
       * Spanizer
       * Wraps letters in a span
       */
       doSpanize: function(){
        settings.letters.html(function (i, el) {
          var spanize = $.trim(el).split("");
          var template = '<em>' + spanize.join('</em><em>') + '</em>'
          return template;
        });
      },
      /**
       * Refresh/Rerun our animation
       */
       refreshAnimation: function(){
        settings.mast.removeClass(settings.animateClass);
        mast.offsetWidth = mast.offsetWidth;  
        settings.mast.addClass(settings.animateClass);
      },
    };
  })();
  // Let's GO!
  Spanizer.init();


  /*navigation*/

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.top-nav').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.top-nav').removeClass('nav-down').addClass('nav-up');
      } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('.top-nav').removeClass('nav-up').addClass('nav-down');
        }
      } 

      lastScrollTop = st;
    };


    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $(".parallax-img").css('-webkit-transform', 'translate3d(0,' +  (scroll/5)  + 'px, 0)');
      }else {
        var scroll = $(window).scrollTop();
        $(".parallax-img").css('transform', 'translate3d(0,' +  (scroll/5)  + 'px, 0)');
      }
    });


    $('.parallax-feature').on('inview', function(event, isInView) {
      if (isInView) {
        $(this).children('.feature-img').addClass('inview');
      } else {
        $(this).children('.feature-img').removeClass('inview');
      }
    });

    $('.newsletter-wrap').on('click', function(e) {
      $(this).addClass('active');
    });


    $('.newsletter-wrap input').on('focusout', function(e) {
      $(this).parents('.newsletter-wrap').removeClass('active');
    });



    $('.nav-trigger').click(function(e) {
      e.preventDefault();
      $('.main-navigation').addClass('open-nav');
      $('body').addClass('nav-opened');
    });

    $('.close-nav').click(function(e) {
      e.preventDefault();
      $('.main-navigation').removeClass('open-nav');
      $('body').removeClass('nav-opened');
    });

    $('.main-post .half-thumb').waypoint(function(direction) {
        if (direction == 'up') {
          $(this.element).removeClass("animate");
        } else {
          $(this.element).addClass("animate");
        };
      
    }, { offset: '30%' });

  });


$(window).on('load', function(){
  setInterval(function(){
       $('.pageloader').fadeOut();
   }, 300);
});





