;(function (win) {

	var canvasSalazar = document.getElementById("canvasSalazar"),
	canvasBogoya = document.getElementById("canvasBogoya"),
	cxtSalazar = canvasSalazar.getContext("2d");
	cxtBogoya = canvasBogoya.getContext("2d");

	cxtSalazar.moveTo(15,0);
	cxtSalazar.lineTo(110,100);
	cxtSalazar.lineWidth = 1;
	cxtSalazar.strokeStyle = "#8c8c8c";
	cxtSalazar.stroke();

	cxtBogoya.moveTo(280,0);
	cxtBogoya.lineTo(130,190);
	cxtBogoya.lineWidth = 1;
	cxtBogoya.strokeStyle = "#8c8c8c";
	cxtBogoya.stroke();

	if ($(window).width() > 720) {

		animationController.addTween(
			'.somos-salazar-bogoya',
		    TweenMax.to(
		    	$('.somos-salazar-bogoya .container-text'),
		    	.5,
		    	{css: {opacity:0.2}}, {css: {opacity:1}}
		    ),
		    300
		);

		animationController.addTween(
			'.somos-salazar-bogoya',
		    TweenMax.to(
		    	$('.somos-salazar-bogoya .container-text'),
		    	.5,
		    	{css: {transform: 'scale(0.9)'}}, {css: {transform: 'scale(1)'}}
		    ),
		    300
		);

		animationController.addTween(
			'.somos-salazar-bogoya',
			TweenMax.fromTo(
				$('.somos-salazar-bogoya .container-text'),
				3,
		        {css:{top: 0}}, {css:{top: 100}}
		    ),
		    500
		);

		animationController.addTween(
			'.somos-salazar-bogoya',
			TweenMax.fromTo(
				$('.somos-salazar-bogoya .names.alfredo'),
				3,
		        {css:{top: 168}}, {css:{top: 80}}
		    ),
		    1000
		);

		animationController.addTween(
			'.somos-salazar-bogoya',
			TweenMax.fromTo(
				$('.somos-salazar-bogoya .names.nubia'),
				3,
		        {css:{top: 340}}, {css:{top: 250}}
		    ),
		    1000
		);

	}
}(window));
