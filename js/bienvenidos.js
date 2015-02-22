;(function() {

	var iconFooterTrigger = $('footer a.ver-mas-footer'),
		footerContent = $('footer > div');

	$('.bienvenidos .bid .icon-more').on('click', function (event) {
		event.preventDefault();
		$('.bienvenidos .bid article').toggleClass('open');
	});

	setTimeout(function(){
		console.log('timeout');
		iconFooterTrigger.removeClass('open');
		footerContent.fadeOut();
	},4000);

	iconFooterTrigger.on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('open');
		footerContent.fadeToggle();
	});

}());