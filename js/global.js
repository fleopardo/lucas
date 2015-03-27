/*
 * autors:
 * Santiago Leopardo @sleopardo
 * Fernando Leopardo @fer_leopardo
*/

;(function(win){


	var $bienvenidos = $(".bienvenidos:not(.pantalla-final)"),
		$gestionDelConocimiento = $(".gestion-del-conocimiento"),
		$costosProspecticos = $(".costos-prospecticos"),
		$hastaDondeLoPodemosLlevar = $(".hasta-donde-lo-podemos-llevar"),
		$somosSalazarBogoya = $('.somos-salazar-bogoya'),
		$nuestroMetodoEnLaTeoria = $('.nuestro-metodo-en-la-teoria'),
		$nuestroMetodoEnLaPractica = $('.nuestro-metodo-en-la-practica'),
		$pantallaFinal = $('.pantalla-final'),
		$navigationLeft = $('.navigation-left > div'),
		$navigationMobile = $('.navigation-mobile > nav'),
		$navigationArrows = $('.navigation-left > .link-square'),
		$navigationUp = $('.navigation-left .up'),
		$navigationDown = $('.navigation-left .down'),
		flag_scrollwheel = true;


	/* Init animations scrollorama */
	/* cada modulo va a tener sus animaciones */
	var animationController = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true
	});
	win.animationController = animationController;

	var removeAnimations = function () {
		$gestionDelConocimiento.find(".peter").attr('style','');
		$gestionDelConocimiento.find(".gary").attr('style','');
		$gestionDelConocimiento.find(".peter .container-all").attr('style','');

		$costosProspecticos.find(".gary").attr('style','');
		$costosProspecticos.find(".peter").attr('style','');
		$costosProspecticos.find(".peter .container-all").attr('style','');

		$hastaDondeLoPodemosLlevar.find(".container-all").attr('style','');
		$nuestroMetodoEnLaPractica.find('.container-all').attr('style','');
		$nuestroMetodoEnLaTeoria.find('.container-all').attr('style','');
		$somosSalazarBogoya.find('.container-text').attr('style','');
		$somosSalazarBogoya.find('.names.alfredo').attr('style','');
		$somosSalazarBogoya.find('.names.nubia').attr('style','');

		// $costosProspecticos
		// $gestionDelConocimiento
	};

	/*calcula tamaño pantalla para agregar desktop o no para funcionamiento animaciones*/
	var calculateWidth = function(){
		if( $(window).width() > 768 && !($('body').hasClass('desktop'))  ) {
			$('body').addClass('desktop');
		}else{
			$('body').removeClass('desktop');
			removeAnimations();
		}
	};

	/*
	 * Funcion para activar color en lista de navegacion
	*/
	var activeLinks = function (anchor){
		$navigationLeft.find('a').removeClass('active');
		$navigationMobile.find('a').removeClass('active');
		$navigationLeft.find('[href="#' + anchor + '"]').addClass('active');
		$navigationLeft.find('[href="#' + anchor + '"]').nextAll().addClass('active');
		$navigationMobile.find('[href="#' + anchor + '"]').addClass('active');
	};

	/*
	 * Function que escucha cuando una seccion entra en pantalla
	*/
	var scrollSpy = function () {
		var scrolled = $(window).scrollTop();

		if ( scrolled >= 0 && scrolled < $nuestroMetodoEnLaPractica.offset().top) {
			activeLinks($pantallaFinal.attr("id"));
			$navigationLeft.removeClass();
			$navigationLeft.addClass('nav-' + $nuestroMetodoEnLaPractica.attr("id"));

		} else if ( (scrolled >= $nuestroMetodoEnLaPractica.offset().top) && (scrolled < $nuestroMetodoEnLaTeoria.offset().top - 150) ) {
			activeLinks($nuestroMetodoEnLaPractica.attr("id"));
			$navigationLeft.removeClass();
			$navigationLeft.addClass('nav-' + $nuestroMetodoEnLaPractica.attr("id"));

		} else if ( (scrolled >= $nuestroMetodoEnLaTeoria.offset().top - 150) && (scrolled < $somosSalazarBogoya.offset().top - 150) ) {
			activeLinks($nuestroMetodoEnLaTeoria.attr("id"));
			$navigationLeft.removeClass();
			$navigationLeft.addClass('nav-' + $nuestroMetodoEnLaTeoria.attr("id"));

		} else if ( (scrolled >= $somosSalazarBogoya.offset().top - 150) && (scrolled < $hastaDondeLoPodemosLlevar.offset().top - 150) ) {
			activeLinks($somosSalazarBogoya.attr("id"));
			$navigationLeft.removeClass();
			$navigationLeft.addClass('nav-' + $somosSalazarBogoya.attr("id"));

		} else if ( (scrolled >= $hastaDondeLoPodemosLlevar.offset().top - 150) && (scrolled < $costosProspecticos.offset().top - 150) ) {
			activeLinks($hastaDondeLoPodemosLlevar.attr("id"));
			$navigationLeft.removeClass();
			$navigationLeft.addClass('nav-' + $hastaDondeLoPodemosLlevar.attr("id"));

		} else if ( (scrolled >= $costosProspecticos.offset().top - 150) && (scrolled < $gestionDelConocimiento.offset().top - 150) ) {
			activeLinks($costosProspecticos.attr("id"));
			$navigationLeft.removeClass();
			$navigationLeft.addClass('nav-' + $costosProspecticos.attr("id"));

		} else if ( (scrolled >= $gestionDelConocimiento.offset().top - 150) && (scrolled < $bienvenidos.offset().top -150 ) ) {
			activeLinks($gestionDelConocimiento.attr("id"));
			$navigationLeft.removeClass();
			$navigationLeft.addClass('nav-' + $gestionDelConocimiento.attr("id"));

		} else if (scrolled >= $bienvenidos.offset().top - 150) {
			activeLinks($bienvenidos.attr("id"));
			$navigationLeft.removeClass();
			$navigationLeft.addClass('nav-' + $bienvenidos.attr("id"));
		}
	};


	var scrollTo = function(asideActiveLink, anchor) {
		var	anchor = "#"+ anchor || null,
			speed = asideActiveLink.attr("data-scroll:speed") || 3000,
			sectionName = asideActiveLink.text();

		if (anchor !== null) {
			$.scrollTo.window().queue([]).stop();
			$.scrollTo(anchor, {speed: speed, easing:'easeOutExpo'});

			if (window.history.pushState){
				window.history.pushState(null, sectionName, anchor);
			}
		}
	};


	/** Bindeo a todos los links que necesitan moverse con scrollTo **/
	$(".scroll-to").on("click",function(event){
		event.preventDefault();

		var activeLink = $(this),
			anchor = activeLink.attr("data-scroll:anchor");
		scrollTo(activeLink, anchor);
	});

	/* Funcionalidad de link subir y bajar de navigation */
	$navigationArrows.on('click', function(event){
		event.preventDefault();
		if ( $(this).hasClass('up') ) {
			if( !$navigationLeft.find('a:first-child').hasClass('active') ) {
				var activeLink = $navigationLeft.find('a.active'),
					anchor = activeLink.prev().attr("data-scroll:anchor");
				scrollTo(activeLink, anchor);
			}
		} else {
			if( !$navigationLeft.find('a:last-child').prev().hasClass('active')  ) {
				return;
			}else{
				var activeLink = $navigationLeft.find('a.active'),
					anchor = activeLink.next().attr("data-scroll:anchor");
				scrollTo(activeLink, anchor);
			}
		}
	});

	/* ejecuto activa nav al inicio */
	scrollSpy();
	calculateWidth();


	/*MODALES*/
	$('.openModal').on('click',function (event) {
	 	event.preventDefault();
	 	if ( !($(this).attr('id') === 'HospitalClinica') ) {
		 	var modalId = 'Modal' + $(this).attr('id');
		 	$("#" + modalId).fadeIn();
		 	$(".modal-overlay").fadeIn();

		 	$("#" + modalId).find('.icon-more').one('click', function () {
		 		$("#" + modalId).fadeOut();
		 		$(".modal-overlay").fadeOut();
		 	});

		 	$(".modal-overlay").one('click', function () {
		 		$("#" + modalId).fadeOut();
		 		$(".modal-overlay").fadeOut();
		 	});
	 	}else{

	 		if ($(window).width() < 980) {
				window.open('http://www.procesosinteligentes.com/img/graficoHospitalClinica.jpg', '_blank');
	 		}else{
	 			var modalId = 'Modal' + $(this).attr('id');
			 	$("#" + modalId).fadeIn();
			 	$(".modal-overlay").fadeIn();

			 	$("#" + modalId).find('.icon-more').one('click', function () {
			 		$("#" + modalId).fadeOut();
			 		$(".modal-overlay").fadeOut();
			 	});

			 	$(".modal-overlay").one('click', function () {
			 		$("#" + modalId).fadeOut();
			 		$(".modal-overlay").fadeOut();
			 	});
	 		}

	 	}
	});

	/* Chequeo el active on scroll cada 100 ms para no matar al browser */
	$(window).on("scroll",function(){
		setTimeout(function(){
			scrollSpy();
		},100);
	});

	$(window).on('resize', function(){
		calculateWidth();
	});


	// Navegacion mediante la rueda del mouse
	$(window).on('mousewheel DOMMouseScroll', function(event) {

		event.preventDefault();

		var delta = event.originalEvent.wheelDelta || event.originalEvent.detail;

		// si es firefox devuelve al reves el delta
		if (event.originalEvent.detail) {
			delta = -delta;
		}

		if (flag_scrollwheel) {
			flag_scrollwheel = false;

			if (delta > 0) {

				if($navigationLeft.find('a.active').prev().length > 0){
					var activeLink = $navigationLeft.find('a.active'),
						anchor = activeLink.prev().attr("data-scroll:anchor");
					scrollTo(activeLink, anchor);
					
				}
			} else {

				if ($navigationLeft.find('a.active').next().length > 0) {
					var activeLink = $navigationLeft.find('a.active'),
						anchor = activeLink.next().attr("data-scroll:anchor");
					scrollTo(activeLink, anchor);

				}
			}

			setTimeout(function(){
				flag_scrollwheel = true;
			},3000);
		}
	});


	$(document).on("keyup", function(e){

		// next
		if( e.keyCode == 38 || e.keyCode == 37 ){
			if($navigationLeft.find('a.active').prev().length > 0){
				if($navigationLeft.find('a.active').prev().length > 0){
					var activeLink = $navigationLeft.find('a.active'),
						anchor = activeLink.prev().attr("data-scroll:anchor");
					scrollTo(activeLink, anchor);
				}
			}
		}

		// prev
		if(e.keyCode == 40 || e.keyCode == 39){
			if ($navigationLeft.find('a.active').next().length > 0) {
				var activeLink = $navigationLeft.find('a.active'),
					anchor = activeLink.next().attr("data-scroll:anchor");
				scrollTo(activeLink, anchor);
			}
		}

	});

})(window);