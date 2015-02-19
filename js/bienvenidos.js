;(function() {

	$('.bienvenidos .bid .icon-more').on('click', function (event) {
		event.preventDefault();
		$('.bienvenidos .bid article').toggleClass('open');
	});

	$('footer a.ver-mas-footer').on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('open');
	});

}());