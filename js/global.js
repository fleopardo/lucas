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


	/** Bindeo el parallax **/
	$(window).bind('scroll',function(e){
	 	var scrolled = $(window).scrollTop();
	    $('.humo-1 img').css('bottom',(0-(scrolled*.65))+'px');
	});


	/** Inicializacion Placeholder fallback **/
	$('input[placeholder]').placeholder();


	/** Inicialización slider home **/
	$('#slider-home').bjqs({
        'width' : 623,
        'height' : 456,
        'animationDuration': 700,
        'showMarkers' : true,
        'showControls' : false,
        'centerMarkers' : false,
        'keyboardNav': true,
        'animation': "fade"
    });


    /** Inicialización slider home **/
	$('#galeria-delicias').bjqs({
        'width' : 633,
        'height' : 632,
        'animationDuration': 700,
        'showMarkers' : true,
        'showControls' : false,
        'centerMarkers' : false,
        'keyboardNav': true,
        'animation': "fade"
    });


    /** Inicializacion carousel Cocina **/
    $("#galeria-cocina").jcarousel({
    	'scroll': 4,
    	'animate': "fast"
    });


    /** Inicializacion carousel fotos **/
    $("#galeria-fotos").jcarousel({
    	'scroll': 4,
    	'animate': "fast"
    });


    /** hover sobre carousel **/
    $("#galeria-cocina li,#galeria-fotos li").bind("mouseenter",function(){
    	$(this).find("a").stop(true,true).fadeIn();
    });

    $("#galeria-cocina li a,#galeria-fotos li a").bind("mouseout",function(){
    	$(this).stop(true,true).fadeOut();
    });


    /** Inicializacion lightbox **/
    $("#galeria-cocina li a[rel=cocina]").lightBox();
    $("#galeria-fotos li a[rel=fotos]").lightBox();


    /** Inicializacion scroll personalizado **/
	$('.scroll-content').jScrollPane({
		verticalDragMaxHeight : 39,
		verticalDragMinHeight : 39
	});


	/** Contacto - Form Validation & Submit **/
	$('#envio-consulta').bind('submit', function(event) {

		event.preventDefault();
		event.stopPropagation();

		$('#envio-consulta input, #envio-consulta textarea').removeClass('error');

		var name = $('#nombre');
		var email = $('#email');
		var telefono = $('#telefono');
		var message = $('#consulta');

		var nameIngresado = $('#nombre').val();
		var emailIngresado = $('#email').val();
		var telefonoIngresado = $('#telefono').val();
		var messageIngresado = $('#consulta').val();

		var error = false;
		var errorName = false;
		var errorEmail = false;
		var errorTelefono = false;
		var errorMessage = false;

		//Si ya hay mensajes los oculto
		//contentError.html('').hide();

		//valido nombre
		if(!(isNaN(name.val())) || name.val() == null || name.val().length == 0 || /^\s+$/.test(name.val()) || name.val() == name.attr("placeholder")) {
			error = true;
			errorName = true;
			name.addClass("error");
		}else{
			name.removeClass('error');
		}

		//valido email
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())) || email.val() == email.attr("placeholder")) {
			error = true;
			errorEmail = true;
			email.addClass("error");
		}else{
			email.removeClass('error');
		}

		//Valido telefono
		if(telefono.val() == null || telefono.val() == 0 || telefono.val() == "" ){
			//puede estar vacio
			telefono.removeClass('error');
		}else{
			//Si tiene datos los valido
			if( isNaN(telefono.val()) || /^\s+$/.test(telefono.val())) {
				error = true;
				errorTelefono = true;
				telefono.addClass("error");
			}else{
				telefono.removeClass('error');
			}
		}

		//valido consulta
		if(message.val().length <= 10) {
			error = true;
			errorMessage = true;
			message.addClass("error");
		}else{
			message.removeClass('error');
		}


		//Si hubo errores
		if( error ){

		}else{

			$.ajax({
				type: 'POST',
				data: 'name='+nameIngresado+'&email='+emailIngresado+'&telefono='+telefonoIngresado+'&message='+messageIngresado,
				dataType: 'json',
				url: 'contacto.php',
				error: function (xhr, ajaxOptions, thrownError) {
					$('#form-response').text('Error, intente nuevamente!').removeClass('loading').addClass("error");
				},
				success: function(r) {

					if(r.status == 'ok') {
						$('#name, #email, #message').val('');
						$('#form-response').text('Gracias por su consulta!').removeClass('loading').removeClass("error");
					}
				}
			});

		}

	});


	$('#envio-consulta input, #envio-consulta textarea').bind('focus', function(e){
		$(this).removeClass('error');
	});


	/** detecto el hash **/
	(function(){

		var hash = window.location.hash;

		if( hash == "" ){


			$.scrollTo("#home", {speed: 2000, easing:'easeInExpo'});


		}else{

			$.scrollTo(hash, {speed: 1, easing:'easeOutExpo'});

			$("nav li a").removeClass("active");

			$("nav li a").each(function(i,e){

					if( $(e).attr("data-scroll:anchor") == hash ){

						$(e).addClass("active");

					}

				})
		}

	}());

})(window);
