/**
 * Efecto de fade al cargar y salir de las paginas
 */
$('body > div').fadeIn(500);

$('a:not(.consultar-link a)').click(function(e){
	e.preventDefault();
	var link = this;
	$('body > div').fadeOut(200, function(){
		document.location = link.href;
	});
})

/* Funcion de GMAPS */
function initialize() {
	var myLatlng = new google.maps.LatLng(-34.531934,-58.550584);

	var mapOptions = {
	center: myLatlng,
	zoom: 15,
	disableDefaultUI: true,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),
	mapOptions);

	var icono = './css/assets/biganMapIcon.png';

	var marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  title: 'Hello World!',
	  icon : icono
	});

}

jQuery(document).ready(function($) {


	/* Carousel homepage */

	if ( $(".home .carousel").length > 0){
	  $('.carousel').bjqs({
	    height      : 420,
	    width       : 960,
	    responsive  : true,
	    keyboardnav : true // enable keyboard navigation
	  });
	}


	/* Carousel detalle */
	if ( $(".detalle .carousel").length > 0){
	  $('.carousel').bjqs({
	    height      : 514,
	    width       : 521
	  });
	}

	/**** Productos overs y clicks ****/
	$('.productos .product-list li').each(function(){
		$(this).mouseenter(function(){
			$(this).addClass('over');
		});

		$(this).mouseleave(function(){
			$(this).removeClass('over');
		});
	});


	/* Inicializacion del mapa */
	if ( $("#map_canvas").length > 0){
	  initialize();
	}




	/* Seccion Contacto */


	if ( $("body").hasClass("contacto") ){


		if( $.cookie('bigan_product') ){

			/* Seleccionar el producto elegido en el combo */
			$("#producto option[data-product-id='"+$.cookie('bigan_product')+"']").attr("selected","selected");

			/* Mostrar la imagen del producto abajo del combo */
			$(".product-list li[data-product-id='"+$.cookie('bigan_product')+"']").show();

		}else{

			/* Si no existe la cookie, muestro el producto que viene selected por default */
			var active = $("#producto option:selected").data("product-id");

			$(".product-list li[data-product-id='"+active+"']").show();


		}

		/* Cuando cambio el combo */

		$("#producto").on("change", function(){

			/* Grabo el nuevo valor por si actualizo la pagina me recuerde el nuevo */
			var new_value = $(this).find("option:selected").data("product-id");
			$.cookie('bigan_product', new_value);

			/* Muestro el producto elegido */
			$(".product-list li").hide();
			$(".product-list li[data-product-id='"+new_value+"']").show();

		});




		/*INCIALIZACION DE PLUG IN SELECTMENU*/
		$('select').selectmenu({
			transferClasses:true
		});

		//Placeholder fallback
		$('input[placeholder],textarea[placeholder]').placeholder();

		/** Contacto - Form Validation & Submit **/

		$('#form-consulta').on('submit', function(event){

			event.preventDefault();
			event.stopPropagation();

			$('#form-response').addClass("loading");

			$('#form-consulta input, #form-consulta textarea').removeClass('error');

			var name = $('#nombre');
			var email = $('#email');
			var message = $('#consulta');
			var producto = $("#producto");

			var nameIngresado = $('#nombre').val();
			var emailIngresado = $('#email').val();
			var messageIngresado = $('#consulta').val();
			var productoIngresado = $("#producto").val();

			var error = false;
			var errorName = false;
			var errorEmail = false;
			var errorMessage = false;

			//valido nombre
			if(!(isNaN(name.val())) || name.val() == null || name.val().length == 0 || /^\s+$/.test(name.val())) {
				error = true;
				errorName = true;
				name.addClass("error");
			}else{
				name.removeClass('error');
			}

			//valido email
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val()))) {
				error = true;
				errorEmail = true;
				email.addClass("error");
			}else{
				email.removeClass('error');
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

				$('#form-response').removeClass("loading").text("Ingresá los datos correctamente.").addClass("error");

			}else{

				$.ajax({
					type: 'POST',
					data: 'name='+nameIngresado+'&email='+emailIngresado+'&consulta='+messageIngresado+'&producto='+productoIngresado,
					dataType: 'json',
					url: $('#form-consulta').attr("action"),
					error: function(xhr, ajaxOptions, thrownError){
						$('#form-response').text('Error en la conexion, intentá nuevamente.').removeClass('loading').addClass("error");
					},
					success: function(r){
						if(r.status == 'ok') {
							$('#nombre, #email, #consulta, #producto').val('');
							$('#form-response').text('Gracias por tu consulta!').removeClass('loading').removeClass("error");
						}
					}
				});

			}

		});



	}



	/* Guardar producto elegido */

	$(".consultar-link a").on("click", function(event){

		var value = $(this).data("product-id");

		$.cookie('bigan_product', value);

	});

});