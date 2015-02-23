;(function(win) {

	var iconFooterTrigger = $('footer a.ver-mas-footer'),
		footerContent = $('footer > div');

	$('.bienvenidos .bid a').on('click', function (event) {
		event.preventDefault();
		$('.bienvenidos .bid article').toggleClass('open');
	});

	iconFooterTrigger.on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('open');
		footerContent.fadeToggle();
	});

}(window));