;(function (win) {



		animationController.addTween(
			'.desktop .hasta-donde-lo-podemos-llevar',
		    TweenMax.to(
		    	$('.desktop .hasta-donde-lo-podemos-llevar .container'),
		    	.5,
		    	{css: {opacity:0.5}}, {css: {opacity:1}}
		    ),
		    300
		);

		animationController.addTween(
			'.desktop .hasta-donde-lo-podemos-llevar',
		    TweenMax.to(
		    	$('.desktop .hasta-donde-lo-podemos-llevar .container'),
		    	.5,
		    	{css: {transform: 'scale(0.9)'}}, {css: {transform: 'scale(1)'}}
		    ),
		    300
		);

		animationController.addTween(
			'.desktop .hasta-donde-lo-podemos-llevar',
			TweenMax.fromTo(
				$('.desktop .hasta-donde-lo-podemos-llevar .container'),
				3,
		        {css:{top: 0}}, {css:{top: 100}}
		    ),
		    500
		);

}(window));
