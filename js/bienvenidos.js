;(function() {

	$('.bienvenidos .bid .icon-more').on('click', function (event) {
		event.preventDefault();
		$('.bienvenidos .bid article').toggleClass('open');
	});

}());