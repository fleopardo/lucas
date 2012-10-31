<?php include_once('config.php'); ?>

<?php

	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$message = trim($_POST['message']);
	//$emailAdmin = "contactenos@foodpro.com.ar";
	$emailAdmin = "santiagoleopardo@gmail.com";

	//Validations
	$return['status'] = 'ok';
	if(empty($name)){
		$return['errors'][] = 'name';
	}

	//if(empty($email) || !ereg('^([a-zA-Z0-9\._]+)\@([a-zA-Z0-9\.-]+)\.([a-zA-Z]{2,4})$', $email)){
	//	$return['errors'][] = 'email';
	//}

	if(empty($message)){
		$return['errors'][] = 'message';
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

		$content = "Nombre: ".$name."\n";
		$content .= "Email: ".$email."\n";
		$content .= "Mensaje: \n".$message."\n";
		mail($emailAdmin, $title, $content, $headers);


		//header Copy
		$headersCopy = "MIME-Version: 1.0\r\n";
		$headersCopy .= "Content-type: text/plain; charset=UTF-8\r\n";
		$headersCopy .= "From: ".$emailAdmin."\r\n";

		$content = "¡Hola! Tu mensaje fue enviado con éxito a FoodPro. Muchas gracias por contactarte.\n";
		$content .= "Muy pronto vas a recibir.\n";
		$content .= "(Debajo verás una copia de tu mensaje)\n\n";
		$content .= "Nombre: ".$name."\n";
		$content .= "Email: ".$email."\n\n";
		$content .= "Mensaje: \n".$message."\n\n";

		mail($email, $title, $content, $headersCopy);
	}

	echo json_encode($return);

	exit();

?>