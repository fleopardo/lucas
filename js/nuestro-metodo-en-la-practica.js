;(function() {

	$('.nuestro-metodo-en-la-practica .content-nav .owl-carousel').owlCarousel({
	    //autoPlay: 3000, //Set AutoPlay to 3 seconds
	    items : 1, // max items shown per page
	    singleItem: true,
	    navigation: true,
	    slideSpeed: 1000,
	    navigationText : ['<a href="javascript:void(0);" title="" class="link-square"><div class="square-rotate"></div><span>Prev</span></a>','<a href="javascript:void(0);" title="" class="link-square"><div class="square-rotate"></div><span>Next</span></a>']
	});


		animationController.addTween(
			'.desktop .nuestro-metodo-en-la-practica',
		    TweenMax.to(
		    	$('.desktop .nuestro-metodo-en-la-practica .container-all'),
		    	.5,
		    	{css: {opacity:0.5}}, {css: {opacity:1}}
		    ),
		    300
		);

		animationController.addTween(
			'.desktop .nuestro-metodo-en-la-practica',
		    TweenMax.to(
		    	$('.desktop .nuestro-metodo-en-la-practica .container-all'),
		    	.5,
		    	{css: {transform: 'scale(0.9)'}}, {css: {transform: 'scale(1)'}}
		    ),
		    300
		);

		animationController.addTween(
			'.desktop .nuestro-metodo-en-la-practica',
			TweenMax.fromTo(
				$('.desktop .nuestro-metodo-en-la-practica .container-all'),
				3,
		        {css:{top: 150}}, {css:{top: 250}}
		    ),
		    500
		);

}(window));
