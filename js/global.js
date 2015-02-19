/*
 * autors:
 * Santiago Leopardo @sleopardo
 * Fernando Leopardo @fer_leopardo
*/

;(function(win){

	$('.content-nav .owl-carousel').owlCarousel({

	    //autoPlay: 3000, //Set AutoPlay to 3 seconds
	    items : 1, // max items shown per page
	    itemsCustom: [[0, 1], [320, 1], [480, 1], [768, 1]], // [min-screen-width, items-to-show]
	    navigation: true,
	    navigationText : false
	});

	$('.navigation-left a').on('click', function() {

		$('.navigation-left a').removeClass('active');
		$(this).addClass('active');
		$(this).nextAll().addClass('active');

	});


	/** Bindeo a todos los links que necesitan moverse con scrollTo **/
	$(".scroll-to").on("click",function(event){

		var that = $(this),
			anchor = '#' + that.attr("data-scroll:anchor") || null,
			speed = that.attr("data-scroll:speed") || 2600,
			sectionName = that.text();

		if( anchor !== null ){

			event.preventDefault();
			jQuery.scrollTo.window().queue([]).stop();
			$.scrollTo(anchor, {speed: speed, easing:'easeOutExpo'});

			/*if(window.history.pushState){
				window.history.pushState(null, sectionName, anchor);
			}*/

			/** actualizo los active **/
			//currentNavigation(that);
		}

	});

	/* Init animations */
	var animationController = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true
	});

	win.animationController = animationController;

})(window);