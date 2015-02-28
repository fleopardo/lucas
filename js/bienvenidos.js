;(function(win) {

	var iconFooterTrigger = $('a#ver-mas-footer'),
		footerContent = $('footer');

	$('.bienvenidos .bid a').on('click', function (event) {
		event.preventDefault();
		$('.bienvenidos .bid article').toggleClass('open');
	});

	iconFooterTrigger.on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('open');
		if( !$(this).hasClass('open') ){
			footerContent.stop(true,true).animate({
				left: '-100%',
				right: '100%'
			}, 1000, "linear");
		}else{
			footerContent.stop(true,true).animate({
				left: '0',
				right: '0'
			}, 1000, "linear");
		}
	});

}(window));