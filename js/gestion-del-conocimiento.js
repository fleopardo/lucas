;(function (win) {
	animationController.addTween(
		'.gestion-del-conocimiento',
	    TweenMax.to(
	    	$('.gestion-del-conocimiento .container'),
	    	.5,
	    	{css: {opacity:0.5}}, {css: {opacity:1}}
	    ),
	    300
	);

	animationController.addTween(
		'.gestion-del-conocimiento',
	    TweenMax.to(
	    	$('.gestion-del-conocimiento .container'),
	    	.5,
	    	{css: {transform: 'scale(0.9)'}}, {css: {transform: 'scale(1)'}}
	    ),
	    300
	);

	animationController.addTween(
		'.gestion-del-conocimiento',
		TweenMax.fromTo(
			$('.gestion-del-conocimiento .container'),
			3,
	        {css:{top: 0}}, {css:{top: 100}}
	    ),
	    500
	);

}(window));