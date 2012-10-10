$(function(){
	
	/***********************
	
	VARIABLES GLOBALES
	
	************************/
	
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	var header = $('header');
	var footer = $('footer');
	
	var sectionHomeWidth = $("#home").width();
	var homeWrapper = $("#home .wrapper");
	var wrapper = $(".content .wrapper");
	var wrapperWidth = wrapper.width();
	var wrapperHeight = wrapper.height();
	
	/***********************
	
	FUNCIONES GLOBALES
	
	************************/
	
	//Funcion de navegacion
	var navSections = function(windowWidth,section,linkClicked,event){
		
		//redefino la variable para que actualize on resize
		var windowWidth = $(window).width();
		
		//Verifico si clickeo por flechas
		if(linkClicked.attr("data-section-id") == "arrow"){
			
			
			//Si clickeo en siguiente
			if(linkClicked.attr("id") == "linkSiguiente"){
				var section = $("a.current").parent().next().children().attr("data-section-id");
				var sectionToGo = $("a.current").parent().next().children();
			}else{
				var section = $("a.current").parent().prev().children().attr("data-section-id");
				var sectionToGo = $("a.current").parent().prev().children();
			}
			
			//si es la primer seccion o la ultima no hago nada.
			if(section == undefined){
				return false;
			}else{
				var hash = "#"+section;
				window.history.pushState(null, section, hash);
			}
			
		}else{
			var hash = linkClicked.attr('href');
			window.history.pushState(null, section, hash);
		}
		
		//Apago el footer y el header, ejecuto callback..
		footer.fadeOut(700);
		header.fadeOut(700,function(){
			//cambio de color a los links y del footer segun seccion
			if( section != "home" && section != "contacto"){
				header.addClass("whiteText");
				footer.addClass("whiteText");
			}else{
				header.removeClass("whiteText");
				footer.removeClass("whiteText");
			}
			
			//Borro el current actual..
			$("header li a").removeClass("current");
			
			//Si clickee en un link..
			if(linkClicked.attr("data-section-id") != "arrow"){
				//cambio el current
				linkClicked.addClass("current");
			}else{
				//Si clickee en las flechas
				//cambio el current
				sectionToGo.addClass("current");
			}
			
			footer.fadeIn(700);
			header.fadeIn(700);
		});
		
		//calculo las distancias
		var distanciaWrapper = $("#"+section+" .wrapper").offset();
		var anclajeScroll = ( windowWidth - $("#"+section+" .wrapper").width() ) / 2;
		
		$.scrollTo(distanciaWrapper.left - anclajeScroll,1300,{
			axis:'x',
			easing:'easeInOutCirc'
		});
		
		event.preventDefault();
		event.stopPropagation();
		
	}
	
	
	//Funcion para centrar el contenido verticalmente
	var centerWrappers = function(){
		
		//redefino las variables para que las actualice onresize.
		var windowHeight = $(window).height();
		var positionWrapper = wrapper.offset();
		
		if(wrapperHeight < windowHeight){
			$("html,body").css("overflow-y","hidden");
			//Centro el contenido verticalmente.
			var centradoVertical = ( windowHeight - wrapperHeight ) / 2;
			wrapper.css('marginTop', centradoVertical);
			
			//Posicionamiento del header y footer relativo al wrapper
			
			header.css({
				"left" : positionWrapper.left + 10,
				"top" : wrapperHeight + centradoVertical - 120
			});
			
			footer.css({
				"left" : positionWrapper.left + 40,
				"top" : wrapperHeight + centradoVertical - 15
			});
		}else{
			$("html,body").css("overflow-y","visible");
			
			//Posicionamiento del header y footer respecto al window
			
			header.css({
				"left" : positionWrapper.left + 10,
				"top" : windowHeight - 120
			});
			
			footer.css({
				"left" : positionWrapper.left + 40,
				"top" : windowHeight - 20
			});
			}
		}
	
	//Funcion par centrar la primer pantalla horizontalmente
	var centerFirstWrapper = function(){
		
		//redefino la variable para que actualize on resize
		var windowWidth = $(window).width();
		
		//Si la pantalla es mas chica que el ancho de la seccion (ancho de lo gris) lo centro..sino se centra solo con CSS.
		if( windowWidth < sectionHomeWidth ){
			var widthToScroll = (windowWidth - wrapperWidth) / 2; 
			homeWrapper.css("margin-left", widthToScroll);
		}
	}
	
	//funcion para enviar el newsletter
	var envioNewsletter = function(event){
		var email = $(".newsletter input[type=text]");
		
		//valido email
		if ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())) ) {
			email.addClass("error");
		}else{
			$.ajax({
				type:'post',
				url:'envio-newsletter.php',
				data:{
					email:email.val()
				},
				dataType:'json',
				success:function(datos,status){
					
					if(datos.success == true){
						if( $("p.noEnviado").length ){
							$("p.noEnviado").remove();
						}
						
						$(".newsletter form").css("display","none");
						$(".newsletter").append("<p class='enviado'>Gracias por suscribirse.</p>");
						
					}else{
						$(".newsletter").append("<p class='noEnviado'>Intente nuevamente.</p>");
					}
					
				}
			});
			
			
			$(".newsletter form").fadeOut("fast",function(){
				$(this).remove();
			});
		}
		
		//Freno el submit del navegador
		event.preventDefault();
		event.stopPropagation();
	}
	
	//Funcion para validar el formulario de contacto
	var contactar = function(event){
		
		var nombre = $("form #nombre");
		var email = $("form #email");
		var empresa = $("form #empresa");
		var consulta = $("form #consulta");
		
		var nombreIngresado = $("form #nombre").val();
		var emailIngresado = $("form #email").val();
		var empresaIngresado = $("form #empresa").val();
		var consultaIngresado = $("form #consulta").val();
		
		var contentError = $("#contentError");
		
		var error = false;
		var errorNombre = false;
		var errorEmail = false;
		var errorEmpresa = false;
		var errorConsulta = false;
		
		//Si ya hay mensajes los oculto
		contentError.html('').hide();
		
		//valido nombre
		if(!(isNaN(nombre.val())) || nombre.val() == null || nombre.val().length == 0 || /^\s+$/.test(nombre.val()) || nombre.val() == nombre.attr("placeholder")) {
			error = true;
			errorNombre = true;
			nombre.addClass("error");
		}else{
			nombre.removeClass('error');
		}
		
		//valido email
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())) || email.val() == email.attr("placeholder")) {
			error = true;
			errorEmail = true;
			email.addClass("error");
		}else{
			email.removeClass('error');
		}
		
		//valido empresa
		if( !(isNaN(empresa.val())) || empresa.val() == null || empresa.val().length == 0 || /^\s+$/.test(empresa.val()) || empresa.val() == empresa.attr("placeholder")) {
			error = true;
			errorEmpresa = true;
			empresa.addClass("error");
		}else{
			empresa.removeClass('error');
		}
		
		//valido consulta
		if(consulta.val().length <= 10) {
			error = true;
			errorConsulta = true;
			consulta.addClass("error");
		}else{
			consulta.removeClass('error');
		}
		
		//Si hubo errores
		if( error ){
			
			var mensajeError = '<p id="mensajeError">Error al validar el formulario. Los siguientes campos tienen errores.<br />';
			
			if(errorNombre){ mensajeError += 'Nombre. ';}
			if(errorEmail){ mensajeError += 'Email. ';}
			if(errorEmpresa){ mensajeError += 'Empresa. ';}
			if(errorConsulta){ mensajeError += 'Consulta. ';}
			
			mensajeError += '</p>';
			
			contentError.append(mensajeError);
			contentError.fadeIn(1000);
			
		}else{
			
			$.ajax({
				type:'post',
				url:'envio-mail.php',
				data:{
					nombre:nombreIngresado,
					email:emailIngresado,
					empresa:empresaIngresado,
					consulta:consultaIngresado
				},
				dataType:'json',
				success:function(datos,status){
					if(datos.success == true){
						contentError.append('<p id="mensajeExito">Los datos fueron enviados correctamente. Muchas Gracias.</p>');
						nombre.val('');
						email.val('');
						empresa.val('');
						consulta.val('');
						
					}else{
						contentError.append('<p id="mensajeError">No se pudo enviar la consulta, intente nuevamente.</p>');
					}
					contentError.fadeIn(1000);
				}
			});
		}
		
		//Freno el submit del navegador
		event.preventDefault();
		event.stopPropagation();
	}
	
	/*********************** 
	
	INIT
	
	************************/
	
	//CENTRO LA PRIMER PANTALLA HORIZONTALMENTE
	centerFirstWrapper();
	
	//CENTRO TODOS LOS CONTENIDOS VERTICALMENTE
	centerWrappers();
	
	
	//ON RESIZE
	$(window).resize(function(){
		centerWrappers();
		centerFirstWrapper();
		
		if( windowWidth < 1600 ){
			var marginForWrappers = ($(window).width() - wrapperWidth) / 2;
			wrapper.css("margin-left",marginForWrappers);
		}
	});
	
	//NAVIGATOR
	$("header li a").bind("click",function(event){
		var sectionName = $(this).attr("data-section-id");
		
		if(!$(this).hasClass("current")){
			navSections(windowWidth,sectionName,$(this),event);
		}
	});
	
	//HOVERS
	$("a:not('a.noHover,a.ui-selectmenu'), input[type=submit]:not('.newsletter input')").mouseover(function(){
		$(this).animate({
			opacity:0.6
		});	
	});
	
	$("a:not('a.noHover,a.ui-selectmenu'), input[type=submit]:not('.newsletter input')").mouseout(function(){
		$(this).animate({
			opacity:1
		});	
	});
	
	//ACTIVO EL SCROLLPANE
	$('.scroll-content').jScrollPane({
		verticalDragMaxHeight : 65,
		verticalDragMinHeight : 65 
	});
	
	
	/**** HOME ****/
	$('#home .parallax-content').mousemove(
		function(e){
			/* Work out mouse position */
			var offset = $(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;

			/* Get percentage positions */
			var mouseXPercent = Math.round(xPos / $(this).width() * 100);
			var mouseYPercent = Math.round(yPos / $(this).height() * 100);

			/* Position Each Layer */
			$(this).children('img').each(
				function(){
					var diffX = $('#home .parallax-content').width() - $(this).width();
					var diffY = $('#home .parallax-content').height() - $(this).height();

					var myX = diffX * (mouseXPercent / 200); //) / 100) / 2;
					var myY = diffY * (mouseYPercent / 100);

					var cssObj = {
						'left': myX + 'px',
						'top': myY + 'px'
					}
					
					$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});

				}
			);

		}
	);
	
	/**** PRODUCTOS ****/
	
	var linksProductos = $("#productos .wrapper > ul > li > a");
	
	linksProductos.bind('click',function(event){
		
		if( !$(this).hasClass('active') ){
			linksProductos.next().fadeOut(300,function(){
				$(this).css("display","none");
			});
			
			linksProductos.next().next().fadeOut(300,function(){
				$(this).css("display","none");
			});
			
			linksProductos.next().next().next().fadeOut(300,function(){
				$(this).css("display","none");
			});
			
			linksProductos.removeClass("active");
			$(this).addClass('active');
			$(this).next().fadeIn(1200);
			$(this).next().next().fadeIn(1200);
			$(this).next().next().next().fadeIn(1200);
		}
	});
	
	$('.sliderLogos').each(function(){
		$(this).bjqs({
	        'width' : 473,
	        'height' : 56,
	        'showMarkers' : false,
	        'showControls' : false,
	        'centerMarkers' : false
	    });
	});
	
	$('#productos .parallax-content').mousemove(
		function(e){
			/* Work out mouse position */
			var offset = $(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;

			/* Get percentage positions */
			var mouseXPercent = Math.round(xPos / $(this).width() * 100);
			var mouseYPercent = Math.round(yPos / $(this).height() * 110);

			/* Position Each Layer */
			$(this).children('img').each(
				function(){
					var diffX = $('#productos .parallax-content').width() - $(this).width();
					var diffY = $('#productos .parallax-content').height() - $(this).height();

					var myX = diffX * (mouseXPercent / 200); //) / 100) / 2;
					var myY = diffY * (mouseYPercent / 100);

					var cssObj = {
						'left': myX + 'px',
						'top': myY + 'px'
					}
					
					$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});
				}
			);

		}
	);

	/**** PROMOCIONES ****/	
	
	$('#sliderPromociones').bjqs({
        'width' : 616,
        'height' : 239,
        'showMarkers' : true,
        'showControls' : false,
        'centerMarkers' : false
    });
	
	//centro verticalmente los controles
	$(".bjqs-markers").css("top",($('#sliderPromociones').height() - $(".bjqs-markers").height())/2);
	
	//Enviar newsletter
	$(".newsletter input[type=submit]").click(function(event){
		envioNewsletter(event);		
	});
			
	/**** CONTACTO ****/
	
	//append contenedor error
	$("#contacto .left-col").prepend('<div id="contentError"></div>');
	$("#contacto #pedidos-content").prepend('<div id="contentErrorPedidos"></div>');
	
	//Envio de email
	$("#botonEnviarConsulta").click(function(event){
		contactar(event);
	});
	
	// Inicializacion Google Maps
	var options = {
        zoom: 15,
        center: new google.maps.LatLng(-34.58, -58.47),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		navigationControl: false,
		streetViewControl: false
    };
    
    var map = new google.maps.Map(document.getElementById('map'), options);
	
	new google.maps.Marker({
        position: map.getCenter(), 
        map: map, 
        cursor: 'default', 
        draggable: true
    });
	
	
	/*PEDIDOS*/
	
	//CONMUTA ENTRE PEDIDOS Y CONTACTO
	
	$('#pedidos-btn').click(function(){
		if($(this).hasClass('current')){
			return false;
		}else{
			$('#contact-btn').removeClass('current');
			$('#pedidos-btn').addClass('current');
			$('#contact-content').fadeOut('slow',function(){
				$('#contact-content').removeClass('current');
				$('#pedidos-content').fadeIn('slow');
				$('#contact-content').addClass('current');
			});
		}
	});
	
	$('#contact-btn').click(function(){
		if($(this).hasClass('current')){
			return false
		}else{
			$('#pedidos-btn').removeClass('current');
			$('#contact-btn').addClass('current');
			$('#pedidos-content').fadeOut('slow',function(){
				$('#pedidos-content').removeClass('current');
				$('#contact-content').fadeIn('slow');
				$('#contact-content').addClass('current');
			});
		}
	});
	
	//SELECT MENU PERSONALIZADO
	$("#ejecutivo-cta").selectmenu();
	
	//AGREGAR PEDIDOS
	var pedidos = [];
	var idPedido = 1;
	var cantidadPedidos = 0;
	
	$("#formPedidos .agregar-art").click(function(){
		var errorPedidos = false;
		var errorDescripcionPedidos = false;
		var errorUnidadesPedidos = false;
		/*var errorComentariosPedidos = false;*/
		
		var descripcionPedidos = $("#descripcion-pedido");
		var unidadesPedidos = $("#unidades-pedido");
		var comentariosPedidos = $("#comentarios-pedido");
		var contentError = $("#contentErrorPedidos");
		
		contentError.html('').hide();
		
		//valido descripcion
		if(!(isNaN(descripcionPedidos.val())) || descripcionPedidos.val() == null || descripcionPedidos.val().length == 0 || descripcionPedidos.val() == descripcionPedidos.attr("placeholder")) {
			errorPedidos = true;
			errorDescripcionPedidos = true;
			descripcionPedidos.addClass("error");
		}else{
			descripcionPedidos.removeClass('error');
		}
		
		//valido unidades
		if(isNaN(unidadesPedidos.val()) || unidadesPedidos.val() == null || unidadesPedidos.val().length == 0 || unidadesPedidos.val() == unidadesPedidos.attr("placeholder")) {
			errorPedidos = true;
			errorUnidadesPedidos = true;
			unidadesPedidos.addClass("error");
		}else{
			unidadesPedidos.removeClass('error');
		}
		
		/*
		//valido comentarios
		if(comentariosPedidos.val().length <= 5 || comentariosPedidos.val() == comentariosPedidos.attr("placeholder")) {
			errorPedidos = true;
			errorComentariosPedidos = true;
			comentariosPedidos.addClass("error");
		}else{
			comentariosPedidos.removeClass('error');
		}*/
		
		if(errorPedidos){
			var mensajeError = '<p id="mensajeError">Los siguientes campos tienen errores.<br />';

			if(errorDescripcionPedidos){ mensajeError += 'Descripcion. ';}
			if(errorUnidadesPedidos){ mensajeError += 'Unidades. ';}
			/*if(errorComentariosPedidos){ mensajeError += 'Comentarios. ';}*/
			
			mensajeError += '</p>';
			
			contentError.append(mensajeError);
			contentError.fadeIn(1000);
			
		}else{
			//pushearlos en un array
			pedidos.push([idPedido,descripcionPedidos.val(),unidadesPedidos.val(),comentariosPedidos.val()]);
			
			$("#sinPedidos").remove();
			
			var textoPedido = '<div class="sumario-pedidos">'+
									'<a href="javascript:void(0);" title="Eliminar pedido" class="eliminar" data-id="'+idPedido+'">'+
										'Eliminar <strong>Este Art&iacute;culo</strong>'+
									'</a>'+
									'<p><strong>'+descripcionPedidos.val()+' -</strong> '+unidadesPedidos.val()+' unidades - '+comentariosPedidos.val()+'</p>'+
								'</div>';
	
			$("#containerPedidos").append(textoPedido);
			
			//reestablezco el form
			descripcionPedidos.val('');
			unidadesPedidos.val('');
			comentariosPedidos.val('');
			//doy foco para agregar otro producto
			descripcionPedidos.focus();
			
			contentError.fadeOut();
			
			idPedido++;
			cantidadPedidos++;
		}
	});
	
	//Borrar Pedidos
	$("#containerPedidos").on("click","a",function(){
		
		cantidadPedidos--;
		var idPedidoBorrar = $(this).attr("data-id");
		
		//recorro el array en busca del elemento a borrar.
		for(var i = 0; i < pedidos.length; i++){
			
			if(pedidos[i] != undefined){
				if(pedidos[i][0] == idPedidoBorrar){
					delete pedidos[i];
				}
			}
			
		};
		
		//borro de la pantalla el pedido
		$(this).parents(".sumario-pedidos").fadeOut('slow',function(){
			$(this).remove();
			
			if( cantidadPedidos == 0 ){
				$("#containerPedidos").append('<p id="sinPedidos" class="DN">No se agregaron pedidos.</p>');
				$("#sinPedidos").fadeIn();
			}
		});
		
	});
	
	//Enviar pedido
	$("#enviar-pedido").click(function(event){
		
		var errorPedidos = false;
		var errorNombrePedidos = false;
		var errorEmailPedidos = false;
		var errorEjecutivoPedidos = false;
		
		var nombrePedidos = $("#nombre-pedido");
		var emailPedidos = $("#email-pedido");
		var ejecutivoPedidos = $("#ejecutivo-cta");
		var contentError = $("#contentErrorPedidos");
		
		contentError.html('').hide();
		
		if( !($(".sumario-pedidos").length) ){
			var mensajeError = '<p id="mensajeError">No hay pedidos agregados.</p>';
			
			contentError.append(mensajeError);
			contentError.fadeIn(1000);
			nombrePedidos.removeClass('error');
			emailPedidos.removeClass('error');
			$(".ui-selectmenu").removeClass('error');
			return false;
		}
		
		//valido nombre
		if(!(isNaN(nombrePedidos.val())) || nombrePedidos.val() == null || nombrePedidos.val().length == 0 || /^\s+$/.test(nombrePedidos.val()) || nombrePedidos.val() == nombrePedidos.attr("placeholder")) {
			errorPedidos = true;
			errorNombrePedidos = true;
			nombrePedidos.addClass("error");
		}else{
			nombrePedidos.removeClass('error');
		}
		
		//valido email
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailPedidos.val())) || emailPedidos.val() == emailPedidos.attr("placeholder")) {
			errorPedidos = true;
			errorEmailPedidos = true;
			emailPedidos.addClass("error");
		}else{
			emailPedidos.removeClass('error');
		}
		
		//valido ejecutivo de cuentas
		if(ejecutivoPedidos.val() == $("#ejecutivo-cta option")[0].text){
			errorPedidos = true
			errorEjecutivoPedidos = true;
			$(".ui-selectmenu").addClass('error');
		}else{
			$(".ui-selectmenu").removeClass('error');	
		}
		
		if(errorPedidos){
			
			var mensajeError = '<p id="mensajeError">Los siguientes campos tienen errores.<br />';
			
			if(errorNombrePedidos){ mensajeError += 'Nombre. ';}
			if(errorEmailPedidos){ mensajeError += 'Email. ';}
			if(errorEjecutivoPedidos){ mensajeError += 'Ejecutivo de cuentas. ';}
			
			mensajeError += '</p>';
			
			contentError.append(mensajeError);
			contentError.fadeIn(1000);
			
		}else{
			//armo el string de pedidos
			var stringPedido = '';
			var cont = 1;
			for(var i = 0; i < pedidos.length; i++){
				if(pedidos[i] != undefined){
					stringPedido += 'Producto '+cont+'\n\n';
					stringPedido += 'Descripcion: '+pedidos[i][1]+'\n';
					stringPedido += 'Unidades: '+pedidos[i][2]+'\n';
					stringPedido += 'Comentarios: '+pedidos[i][3]+'\n\n';
					cont++;
				}
			};
			
			//lo envio
			$.ajax({
				type:'post',
				url:'envio-pedidos.php',
				data:{
					nombrePedidos:nombrePedidos.val(),
					emailPedidos:emailPedidos.val(),
					ejecutivoPedidos:ejecutivoPedidos.val(),
					pedido:stringPedido
				},
				dataType:'json',
				success:function(datos,status){
					if(datos.success == true){
						contentError.append('<p id="mensajeExito">Los datos fueron enviados correctamente. Muchas Gracias.</p>');
					}else{
						contentError.append('<p id="mensajeError">No se pudo enviar la consulta, intente nuevamente.</p>');
					}
					contentError.fadeIn(1000);
				}
			});
		}
		
		event.stopPropagation();
		event.preventDefault();
	});
	
	
	/*RECONOCER PLACEHOLDER IE*/
	if(!$.support.placeholder) { 
		var active = document.activeElement;
		$(':text').focus(function () {
			if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
				$(this).val('').removeClass('hasPlaceholder');
			}
		}).blur(function () {
			if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
				$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
			}
		});
		$(':text').blur();
		$(active).focus();
		$('form').submit(function () {
			$(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
		});
	}
}); 