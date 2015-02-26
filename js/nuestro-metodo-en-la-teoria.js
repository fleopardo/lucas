;(function (win) {

		animationController.addTween(
			'.desktop .nuestro-metodo-en-la-teoria',
		    TweenMax.to(
		    	$('.desktop .nuestro-metodo-en-la-teoria .container-all'),
		    	.5,
		    	{css: {opacity:0.5}}, {css: {opacity:1}}
		    ),
		    300
		);

		animationController.addTween(
			'.desktop .nuestro-metodo-en-la-teoria',
		    TweenMax.to(
		    	$('.desktop .nuestro-metodo-en-la-teoria .container-all'),
		    	.5,
		    	{css: {transform: 'scale(0.9)'}}, {css: {transform: 'scale(1)'}}
		    ),
		    300
		);

		animationController.addTween(
			'.desktop .nuestro-metodo-en-la-teoria',
			TweenMax.fromTo(
				$('.desktop .nuestro-metodo-en-la-teoria .container-all'),
				3,
		        {css:{top: 0}}, {css:{top: 100}}
		    ),
		    500
		);

}(window));
