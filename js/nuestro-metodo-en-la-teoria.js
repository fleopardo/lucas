;(function (win) {
	animationController.addTween(
		'.nuestro-metodo-en-la-teoria',
	    TweenMax.to(
	    	$('.nuestro-metodo-en-la-teoria .container'),
	    	.5,
	    	{css: {opacity:0.5}}, {css: {opacity:1}}
	    ),
	    300
	);

	animationController.addTween(
		'.nuestro-metodo-en-la-teoria',
	    TweenMax.to(
	    	$('.nuestro-metodo-en-la-teoria .container'),
	    	.5,
	    	{css: {transform: 'scale(0.9)'}}, {css: {transform: 'scale(1)'}}
	    ),
	    300
	);

	animationController.addTween(
		'.nuestro-metodo-en-la-teoria',
		TweenMax.fromTo(
			$('.nuestro-metodo-en-la-teoria .container'),
			3,
	        {css:{top: 0}}, {css:{top: 100}}
	    ),
	    500
	);

}(window));
