/*
 * autors:
 * Santiago Leopardo @sleopardo
 * Fernando Leopardo @fer_leopardo
*/

;(function(window){

	var morico = {},

		windowHeight = $(window).height();


	//$("body").css("min-height",windowHeight);


	$(window).bind('scroll',function(e){

     	parallaxScroll();

	});

	function parallaxScroll(){
	    var scrolled = $(window).scrollTop();
	    $('.humo-1 img').css('bottom',(0-(scrolled*.65))+'px');
	}


    window.morico = morico;

})(window);



var scrollTo = (function (){

	function init(){

		$(".scroll-to").on("click",function(event){

			var anchor = $(this).attr("data-scroll:anchor") || null,
				speed = $(this).attr("data-scroll:speed") || 1000;

			if( anchor !== null){
				event.preventDefault();
				$.scrollTo(anchor,speed,{
					onAfter: function(){
						jQuery.scrollTo.window().queue([]).stop();
					}
				});
			}

		});

	}

	return {
		init:init
	}

})();