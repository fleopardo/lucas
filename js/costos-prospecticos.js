;(function (win) {

		animationController.addTween(
			'.desktop .costos-prospecticos',
		    TweenMax.fromTo(
		    	$('.desktop .costos-prospecticos .gary'),
		    	.5,
		    	{css: {width: '60vw'}}, {css: {width:'40vw'}}
		    ),
		    300
		);

		animationController.addTween(
			'.desktop .costos-prospecticos',
		    TweenMax.fromTo(
		    	$('.desktop .costos-prospecticos .peter'),
		    	.5,
		    	{css: {width: '40vw'}}, {css: {width:'60vw'}}
		    ),
		    300
		);

		animationController.addTween(
			'.desktop .costos-prospecticos',
		    TweenMax.to(
		    	$('.desktop .costos-prospecticos .gary .container-all'),
		    	0.9,
		    	{css: {opacity: 0}},
		    	{css: {opacity: 1}}
		    ),
		    10
		);

}(window));
