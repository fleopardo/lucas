$(function(){


	/*
	 * Donde comprar - Form Validation & Submit
	*/

	$('#donde-comprar-form').bind('submit', function(event) {

		event.preventDefault();
		event.stopPropagation();

		$('#donde-comprar-form .input').removeClass('error');

		var email = $('#email');
		var barrio = $('#barrio');

		var emailIngresado = $('#email').val();
		var barrioIngresado = $('#barrio').val();

		var error = false;
		var errorEmail = false;
		var errorBarrio = false;

		//valido email
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())) || email.val() == email.attr("placeholder")) {
			error = true;
			errorEmail = true;
			email.addClass("error");
		}else{
			email.removeClass('error');
		}

		//valido Barrio
		if(barrio.val().length <= 3) {
			error = true;
			errorBarrio = true;
			barrio.addClass("error");
		}else{
			barrio.removeClass('error');
		}


		//Si hubo errores
		if( error ){

		}else{

			$.ajax({
				type: 'POST',
				data: 'email='+emailIngresado+'&barrio='+barrioIngresado,
				dataType: 'json',
				url: 'contacto-donde-comprar.php',
				error: function (xhr, ajaxOptions, thrownError) {
					$('#form-response').text('Error, intente nuevamente!').addClass("error");
				},
				success: function(r) {
					if(r.status == 'ok') {
						$('#name, #email, #message').val('');
						$('#form-response').text('Gracias por su consulta!').removeClass("error");
					}
				}
			});

		}

	});


	$('#donde-comprar-form input').bind('focus', function(e){
		$(this).removeClass('error')
	});

});