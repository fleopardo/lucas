;(function() {

	$('.nuestro-metodo-en-la-practica .content-nav .owl-carousel').owlCarousel({
	    //autoPlay: 3000, //Set AutoPlay to 3 seconds
	    items : 1, // max items shown per page
	    itemsCustom: [[0, 1], [320, 1], [480, 1], [768, 1]], // [min-screen-width, items-to-show]
	    navigation: true,
	    navigationText : ['<a href="javascript:void(0);" title="" class="link-square"><div class="square-rotate"></div><span>Prev</span></a>','<a href="javascript:void(0);" title="" class="link-square"><div class="square-rotate"></div><span>Next</span></a>']
	});

}());