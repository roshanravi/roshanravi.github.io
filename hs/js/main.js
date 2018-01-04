$(function() {
	$('.hospital-logo h1').lettering('words');

	$('ul.tab-wrap li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tab-wrap li').removeClass('active');
		$(this).parents('.content-wrap').children('.tab-content > section').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})


});