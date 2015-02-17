/*
 * autors:
 * Santiago Leopardo @sleopardo
 * Fernando Leopardo @fer_leopardo
*/

;(function(window){

	$('.content-nav .owl-carousel').owlCarousel({

	    //autoPlay: 3000, //Set AutoPlay to 3 seconds
	    items : 1, // max items shown per page
	    itemsCustom: [[0, 1], [320, 1], [480, 1], [768, 1]], // [min-screen-width, items-to-show]
	    navigation: true,
	    navigationText : false
	});


	/** Bindeo a todos los links que necesitan moverse con scrollTo **/
	$(".scroll-to").on("click",function(event){

		var that = $(this),
			anchor = that.attr("data-scroll:anchor") || null,
			speed = that.attr("data-scroll:speed") || 1500,
			sectionName = that.text();

		if( anchor !== null ){

			event.preventDefault();

			jQuery.scrollTo.window().queue([]).stop();
			$.scrollTo(anchor, {speed: speed, easing:'easeOutExpo'});

			if(window.history.pushState){
				window.history.pushState(null, sectionName, anchor);
			}

			/** actualizo los active **/
			currentNavigation(that);
		}

	});

})(window);