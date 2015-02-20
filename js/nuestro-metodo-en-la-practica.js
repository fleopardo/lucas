;(function() {

	$('.nuestro-metodo-en-la-practica .content-nav .owl-carousel').owlCarousel({
	    //autoPlay: 3000, //Set AutoPlay to 3 seconds
	    items : 1, // max items shown per page
	    itemsCustom: [[0, 1], [320, 1], [480, 1], [768, 1]], // [min-screen-width, items-to-show]
	    navigation: true,
	    navigationText : false
	});

}());