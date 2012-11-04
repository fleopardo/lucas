<?php

	$email = trim($_POST['email']);
	$barrio = trim($_POST['barrio']);
	$emailAdmin = "info@foodpro.com.ar";

	//Validations
	$return['status'] = 'ok';

	//if(empty($email) || !ereg('^([a-zA-Z0-9\._]+)\@([a-zA-Z0-9\.-]+)\.([a-zA-Z]{2,4})$', $email)){
	//	$return['errors'][] = 'email';
	//}

	if(empty($barrio)){
		$return['errors'][] = 'barrio';
	}

	if(!empty($return['errors'])){
		$return['status'] = 'error';
	}
	//

	if($return['status'] == 'ok'){

		//Header
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
		$headers .= "From: ".$email."\r\n";

		$title = 'Food Pro Web';

		$content = "Se han contactado para saber donde comprar.\n\n";
		$content .= "Email del cliente: ".$email."\n";
		$content .= "Barrio del cliente: ".$barrio."\n";
		mail($emailAdmin, $title, $content, $headers);


		//header Copy
		$headersCopy = "MIME-Version: 1.0\r\n";
		$headersCopy .= "Content-type: text/plain; charset=UTF-8\r\n";
		$headersCopy .= "From: ".$emailAdmin."\r\n";

		$content = "¡Hola! Tu mensaje fue enviado con éxito a FoodPro. Muchas gracias por contactarte.\n";
		$content .= "Muy pronto vas a recibir la respuesta.\n";

		mail($email, $title, $content, $headersCopy);
	}

	echo json_encode($return);

	exit();

?>