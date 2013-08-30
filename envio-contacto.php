<?php

	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$consulta = trim($_POST['consulta']);
	$producto = trim($_POST['producto']);

	$emailAdmin = "lucas@nkinteractivo.com.ar";

	//Validations
	$return['status'] = 'ok';
	if(empty($name)){
		$return['errors'][] = 'name';
	}

	if(empty($consulta)){
		$return['errors'][] = 'consulta';
	}

	if(!empty($return['errors'])){
		$return['status'] = 'error';
	}


	if($return['status'] == 'ok'){

		//Header
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
		$headers .= "From: ".$email."\r\n";

		$title = '[CONSULTA] - BIGAN Web';

		$content = "Nombre: ".$name."\n";
		$content .= "Email: ".$email."\n";
		$content .= "Email: ".$producto."\n\n";
		$content .= "Mensaje: \n".$consulta."\n";

		mail($emailAdmin, $title, $content, $headers);


		//header Copy
		$headersCopy = "MIME-Version: 1.0\r\n";
		$headersCopy .= "Content-type: text/plain; charset=UTF-8\r\n";
		$headersCopy .= "From: ".$emailAdmin."\r\n";

		$content = "¡Hola! Tu mensaje fue enviado con éxito a Bigan. Muchas gracias por contactarte.\n";
		$content .= "Muy pronto vas a recibir una respuesta.\n";
		$content .= "(Debajo verás una copia de tu mensaje)\n\n";
		$content .= "Nombre: ".$name."\n";
		$content .= "Email: ".$email."\n";
		$content .= "Email: ".$producto."\n\n";
		$content .= "Mensaje: \n".$consulta."\n";

		mail($email, $title, $content, $headersCopy);
	}

	echo json_encode($return);

	exit();

?>