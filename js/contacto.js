$(function(){


	/*
	 * Form Validation & Submit
	 */
	$('#contact-form').bind('submit', function(event) {

		event.preventDefault();
		event.stopPropagation();

		$('#contact-form .input').removeClass('error');

		var name = $('#name');
		var email = $('#email');
		var message = $('#message');

		var nameIngresado = $('#name').val();
		var emailIngresado = $('#email').val();
		var messageIngresado = $('#message').val();

		var error = false;
		var errorName = false;
		var errorEmail = false;
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

			/*var mensajeError = '<p id="mensajeError">Los siguientes campos tienen errores: ';

			if(errorName){ mensajeError += 'Nombre. ';}
			if(errorEmail){ mensajeError += 'Email. ';}
			if(errorPais){ mensajeError += 'Telefono (Solo numeros). ';}
			if(errorMessage){ mensajeError += 'Consulta. ';}

			mensajeError += '</p>';

			contentError.append(mensajeError);
			contentError.fadeIn(1000);*/

		}else{

			$.ajax({
				type: 'POST',
				data: 'name='+nameIngresado+'&email='+emailIngresado+'&message='+messageIngresado,
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


	$('#contact-form input, #contact-form textarea').bind('focus', function(e){
		$(this).removeClass('error')
	});

});