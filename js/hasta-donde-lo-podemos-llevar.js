;(function (win) {

	animationController.addTween(
		'.hasta-donde-lo-podemos-llevar',
	    TweenMax.to(
	    	$('.hasta-donde-lo-podemos-llevar .container'),
	    	.5,
	    	{css: {opacity:0.5}}, {css: {opacity:1}}
	    ),
	    300
	);

	animationController.addTween(
		'.hasta-donde-lo-podemos-llevar',
	    TweenMax.to(
	    	$('.hasta-donde-lo-podemos-llevar .container'),
	    	.5,
	    	{css: {transform: 'scale(0.9)'}}, {css: {transform: 'scale(1)'}}
	    ),
	    300
	);

	animationController.addTween(
		'.hasta-donde-lo-podemos-llevar',
		TweenMax.fromTo(
			$('.hasta-donde-lo-podemos-llevar .container'),
			3,
	        {css:{top: 0}}, {css:{top: 160}}
	    ),
	    500
	);

	animationController.addTween(
		'.hasta-donde-lo-podemos-llevar .logo',
		TweenMax.fromTo(
			$('.hasta-donde-lo-podemos-llevar .logo'),
			.5,
	        {css:{
	        	top: 30
       		}},
       		{css:{
       			top: 200
	       	}}
	    ),
	    500
	);

}(window));
