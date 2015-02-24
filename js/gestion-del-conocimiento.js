;(function (win) {
	animationController.addTween(
		'.gestion-del-conocimiento',
	    TweenMax.fromTo(
	    	$('.gestion-del-conocimiento .peter'),
	    	.5,
	    	{css: {width: '60vw'}}, {css: {width:'40vw'}}
	    ),
	    300
	);

	animationController.addTween(
		'.gestion-del-conocimiento',
	    TweenMax.fromTo(
	    	$('.gestion-del-conocimiento .gary'),
	    	.5,
	    	{css: {width: '40vw'}}, {css: {width:'60vw'}}
	    ),
	    300
	);

	animationController.addTween(
		'.gestion-del-conocimiento',
	    TweenMax.to(
	    	$('.gestion-del-conocimiento .peter .container'),
	    	.5,
	    	{css: {opacity: 0}}, {css: {opacity: 1}}
	    ),
	    300
	);

}(window));
