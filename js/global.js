/*
 * autors:
 * Santiago Leopardo @sleopardo
 * Fernando Leopardo @fer_leopardo
*/

;(function(window){

	/** Caché de Variables **/

	var $html = $("html"),

		$body = $("body"),

		$windowHeight = $(window).height();


	/** Remuevo class NO-JS **/
	$html.removeClass("no-js");


	/** Desactivo el scroll **/
	$($html,$body).css("overflow","hidden");


	/** Funcion para actualizar el ACTIVE en los links **/
	var currentNavigation = function(link){

		$("nav li a").removeClass("active");

		/** Si el link clikeado es del NAV entro.. **/

		if(link.hasClass("linksPrincipales")){

			link.addClass("active");

		/** Si es externo entro aca **/
		}else{

			$("nav li a").each(function(i,e){

				if( link.attr("data-scroll:anchor") == $(e).attr("href") ){

					$(e).addClass("active");

				}

			})

		}
	};


	/** Scroll To **/
	(function(){

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

	}());


	/** Inicializacion Placeholder fallback **/
	$('input[placeholder]').placeholder();

})(window);







$(window).bind('scroll',function(e){

 	parallaxScroll();

});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.humo-1 img').css('bottom',(0-(scrolled*.65))+'px');
}
