/*
 * autors:
 * Santiago Leopardo @sleopardo
 * Fernando Leopardo @fer_leopardo
*/

;(function(win){


	var $bienvenidos = $(".bienvenidos"),
		$gestionDelConocimiento = $(".gestion-del-conocimiento"),
		$costosProspecticos = $(".costos-prospecticos"),
		$hastaDondeLoPodemosLlevar = $(".hasta-donde-lo-podemos-llevar"),
		$somosSalazarBogoya = $('.somos-salazar-bogoya'),
		$nuestroMetodoEnLaTeoria = $('.nuestro-metodo-en-la-teoria'),
		$nuestroMetodoEnLaPractica = $('.nuestro-metodo-en-la-practica'),
		$navigationLeft = $('.navigation-left > div'),
		$navigationArrows = $('.navigation-left > .link-square'),
		$navigationUp = $('.navigation-left .up'),
		$navigationDown = $('.navigation-left .down');

	/*
	 * Funcion para activar color en lista de navegacion
	*/
	var activeLinks = function (anchor){
		$navigationLeft.find('a').removeClass('active');
		$navigationLeft.find('[href="#' + anchor + '"]').addClass('active');
		$navigationLeft.find('[href="#' + anchor + '"]').nextAll().addClass('active');
	};

	/*
	 * Function que escucha cuando una seccion entra en pantalla
	*/
	var scrollSpy = function () {
		var scrolled = $(window).scrollTop();

		if ( (scrolled >= $nuestroMetodoEnLaPractica.offset().top) && (scrolled < $nuestroMetodoEnLaTeoria.offset().top) ) {
			activeLinks($nuestroMetodoEnLaPractica.attr("id"));

		} else if ( (scrolled >= $nuestroMetodoEnLaTeoria.offset().top) && (scrolled < $somosSalazarBogoya.offset().top) ) {
			activeLinks($nuestroMetodoEnLaTeoria.attr("id"));

		} else if ( (scrolled >= $somosSalazarBogoya.offset().top) && (scrolled < $hastaDondeLoPodemosLlevar.offset().top) ) {
			activeLinks($somosSalazarBogoya.attr("id"));

		} else if ( (scrolled >= $hastaDondeLoPodemosLlevar.offset().top) && (scrolled < $costosProspecticos.offset().top) ) {
			activeLinks($hastaDondeLoPodemosLlevar.attr("id"));

		} else if ( (scrolled >= $costosProspecticos.offset().top) && (scrolled < $gestionDelConocimiento.offset().top) ) {
			activeLinks($costosProspecticos.attr("id"));

		} else if ( (scrolled >= $gestionDelConocimiento.offset().top) && (scrolled < $bienvenidos.offset().top) ) {
			activeLinks($gestionDelConocimiento.attr("id"));

		} else if (scrolled >= $bienvenidos.offset().top - 10) {
			activeLinks($bienvenidos.attr("id"));
		}

	}


	/** Bindeo a todos los links que necesitan moverse con scrollTo **/
	$(".scroll-to").on("click",function(event){
		var that = $(this),
			anchor = '#' + that.attr("data-scroll:anchor") || null,
			speed = that.attr("data-scroll:speed") || 1500,
			sectionName = that.text();

		if( anchor !== null ){
			event.preventDefault();
			$.scrollTo.window().queue([]).stop();
			$.scrollTo(anchor, {speed: speed, easing:'easeOutExpo'});

			if (window.history.pushState){
				window.history.pushState(null, sectionName, anchor);
			}
		}
	});

	/* Funcionalidad de link subir y bajar de navigation */
	$navigationArrows.on('click', function(event){
		event.preventDefault();
		if ( $(this).hasClass('up') ) {
			if( !$navigationLeft.find('a:first-child').hasClass('active') ) {
				var that = $(this),
					anchor = '#' + $navigationLeft.find('a.active').prev().attr("data-scroll:anchor") || null,
					speed = $navigationLeft.find('a.active').attr("data-scroll:speed") || 1500,
					sectionName = that.text();

				if( anchor !== null ){
					event.preventDefault();
					$.scrollTo.window().queue([]).stop();
					$.scrollTo(anchor, {speed: speed, easing:'easeOutExpo'});

					if (window.history.pushState){
						window.history.pushState(null, sectionName, anchor);
					}
				}

			}

		} else {
			console.log('entra down');

			if( !$navigationLeft.find('a:last-child').prev().hasClass('active')  ) {
				console.log('estoy en el ultimo, no baja');
				return;
			}else{
				console.log('no estoy en el ultimo, baja');
				var that = $(this),
					anchor = '#' + $navigationLeft.find('a.active').next().attr("data-scroll:anchor") || null,
					speed = $navigationLeft.find('a.active').attr("data-scroll:speed") || 1500,
					sectionName = that.text();

				if( anchor !== null ){
					event.preventDefault();
					$.scrollTo.window().queue([]).stop();
					$.scrollTo(anchor, {speed: speed, easing:'easeOutExpo'});

					if (window.history.pushState){
						window.history.pushState(null, sectionName, anchor);
					}
				}
			}
		}
	});

	/* ejecuto activa nav al inicio */
	scrollSpy();

	/* Chequeo el active on scroll cada 100 ms para no matar al browser */
	$(window).on("scroll",function(){
		setTimeout(function(){
			scrollSpy();
		},100);
	});

	/* Init animations scrollorama */
	/* cada modulo va a tener sus animaciones */
	var animationController = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true
	});
	win.animationController = animationController;

})(window);