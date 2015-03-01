;(function(win) {

	var iconFooterTrigger = $('a#ver-mas-footer'),
		footerContent = $('footer')
		bidHiddenContent = $('.bienvenidos .bid article'),
		bienvenidosBidTrigger = $('.bienvenidos .bid a');


	bienvenidosBidTrigger.on('click', function (event) {
		event.preventDefault();
		bidHiddenContent.toggleClass('open');

		if (bidHiddenContent.hasClass('open')) {
			$('.bienvenidos .bid .icon-more .text').html('-');
		}else{
			$('.bienvenidos .bid .icon-more .text').html('+');
		}
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