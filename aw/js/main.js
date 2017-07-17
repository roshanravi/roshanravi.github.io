$(function() {
	setTimeout(function(){
       		$(".alert-label.default").addClass("appear");
   	}, 1000);	

   	setTimeout(function(){
       		$(".alert-label.default").text('32');
   	}, 2000);

   	setTimeout(function(){
       		$(".alert-label.blue").addClass("appear");
   	}, 2500);



   	$('.user-nav > div .trigger').on('focus, click', function(e) {
   		e.preventDefault();
   		$(this).next('.sub-wrap').toggleClass('open').parent('div').siblings('div').find('.sub-wrap.open').removeClass('open');
   	});

   	$('body:not(.search-in-focus) .search-panel input.search').change(function() {
		$(this).parents('.search-panel').addClass('in-focus');
		$('body').addClass('search-in-focus');
	});

	$('.search-panel input.search').focus(function(e) {
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


	$.get("http://ipinfo.io", function(response) {
		console.log(response.city, response.country);

		var currentCity = response.city;
		var currentCountry = response.country;

		$.simpleWeather({
			location: ''+currentCity+', '+currentCountry+'',
			woeid: '',
			unit: 'f',
			success: function(weather) {
				html = '<h3><i class="weather-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h3>';
				html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
				html += '<li class="currently">'+weather.currently+'</li>';
				html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

				$("#liveWeather").html(html);
			},
			error: function(error) {
				$("liveWweather").html('<p>'+error+'</p>');
			}
		});

	}, "jsonp");


	$('#chat-trigger').click(function(e) {
		e.preventDefault();

		$('#botUI').addClass('opened');
		$('body').addClass('bot-panel-open').removeClass('search-in-focus');
		$('.search-panel').removeClass('in-focus');

	});

	$('#botUI .closethis').click(function(e) {
		e.preventDefault();
		$('#botUI').removeClass('opened');
		$('body').removeClass('bot-panel-open');
	});

});

