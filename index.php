<?php header('Content-Type: text/html; charset=utf-8'); ?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 ie6" lang="es"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie10 lt-ie9 lt-ie8 ie7" lang="es"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie10 lt-ie9 ie8" lang="es"> <![endif]-->
<!--[if IE 9]>    <html class="no-js lt-ie10 ie9" lang="es"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="es"> <!--<![endif]-->
<head>
	<title>Morico</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta charset="utf-8" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

	<!--[if lt IE 9]><script src="js/libs/html5.js"></script><![endif]-->

	<link rel="stylesheet" type="text/css" href="css/global.css" />
	<link rel="stylesheet" type="text/css" href="css/basic-jquery-slider.css" />
	<link rel="stylesheet" type="text/css" href="css/jquery.jscrollpane.css" />
	<link rel="stylesheet" type="text/css" href="css/jcarousel.css" />
</head>
<body>

	<div class="parallax humo-1"><img src="./css/assets/humo.png" /></div>
	<div class="parallax humo-2"><img src="./css/assets/humo-2.png" /></div>


	<div class="contenedorMenu">
		<div class="contenedor">

			<header >
				<h1><span class="hide">Morico</span></h1>
			</header>

			<nav>
				<ul class="left">
					<li><a href="#home" class="scroll-to linksPrincipales active" data-scroll:anchor="#home">Home</a></li>
					<li><a href="#historia" class="scroll-to linksPrincipales" data-scroll:anchor="#historia">Historia</a></li>
					<li><a href="#delicias" class="scroll-to linksPrincipales" data-scroll:anchor="#delicias">Delicias</a></li>
				</ul>

				<ul class="right">
					<li><a href="#fotos" class="scroll-to linksPrincipales" data-scroll:anchor="#fotos">Fotos</a></li>
					<li><a href="#cocina" class="scroll-to linksPrincipales" data-scroll:anchor="#cocina">Cocina</a></li>
					<li><a href="#contacto" class="scroll-to linksPrincipales" data-scroll:anchor="#contacto">Contacto</a></li>
				</ul>
			</nav>

		</div>
	</div>

	<div class="contenedor">
		<section id="home">

			<header>
				<h2>En Morico vos elegis y nosotros cocinamos.</h2>
				<a href="delicias.php" class="conoceDelicias scroll-to" data-scroll:anchor="#delicias">Conoc&eacute; nuestras delicias</a>
			</header>

			<div class="galeria" id="slider-home">
				<ul class="bjqs">
					<li><img src="./img/galeria-home/01.png" width="623" height="456" /></li>
					<li><img src="./img/galeria-home/01.png" width="623" height="456" /></li>
					<li><img src="./img/galeria-home/01.png" width="623" height="456" /></li>
				</ul>

				<article>
					<h3 class="circulo"><span>Delicias</span> para todos los gustos</h3>
					<p>En <strong>Morico</strong> nos preocupamos por una sola cosa, hacer que las cosas salgan como vos lo soñaste, el limite lo pones vos.</p>
				</article>
			</div>

			<div class="entregasProgramadas">
				<h3>Entregas programadas</h3>
				<a href="contacto.php" class="scroll-to" data-scroll:anchor="#contacto">Contactanos</a>
				<span class="auto"></span>
			</div>


			<div class="contacto">
				<dl>
					<dt>AR.</dt>
					<dd>
						<ul>
							<li>Fraga 1414, Buenos Aires</li>
							<li>00 54 11 45 55 61 43</li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt class="uy">UY.</dt>
					<dd>
						<ul>
							<li>Francisco Ros 2757, Punta Carretas</li>
							<li>00 59 82 712 31 41</li>
						</ul>
					</dd>
				</dl>
			</div>
		</section>

		<section id="historia">

			<header class="tituloSeccion">
				<hgroup>
					<h2>Morico</h2>
					<h3>... nuestra Historia</h3>
				</hgroup>
			</header>

			<div class="txt scroll-content">
				<p>Nunc sit amet consequat purus. Sed aliquam pretium varius. Phasellus mollis lacinia enim ac convallis. Donec sed laoreet risus. Integer adipiscing urna sit amet magna blandit ut egestas nulla tempus. Cras malesuada malesuada nibh, eget tristique urna accumsan condimentum. Ut vehicula nibh ut massa tristique dapibus. Vestibulum sed eros ipsum.</p>

				<p>Integer sem arcu, vulputate non auctor quis, aliquet et felis. Nam porta iaculis massa sit amet dignissim. Suspendisse tristique tortor quis nulla sollicitudin et lobortis velit dignissim. Nulla interdum ligula ac neque hendrerit tempus. Aenean accumsan, ipsum ac ornare viverra, ligula mauris accumsan libero, eu tempus metus leo eget turpis. Donec sit amet neque nulla, non venenatis felis. Mauris vitae augue ut nisl commodo cursus a et orci. Quisque a tempus sapien. Aliquam venenatis, lorem sit amet tristique tincidunt, nunc arcu hendrerit magna, sit amet aliquam libero mi id metus. Nam nec elit lacus. Nulla congue ultrices est, sed suscipit est vehicula vitae. Morbi lorem enim, tempus a lacinia at, posuere vitae quam. Sed volutpat ultricies dictum. Etiam nec mauris ac mi egestas dapibus.</p>

				<p>Integer sem arcu, vulputate non auctor quis, aliquet et felis. Nam porta iaculis massa sit amet dignissim. Suspendisse tristique tortor quis nulla sollicitudin et lobortis velit dignissim. Nulla interdum ligula ac neque hendrerit tempus. Aenean accumsan, ipsum ac ornare viverra, ligula mauris accumsan libero, eu tempus metus leo eget turpis. Donec sit amet neque nulla, non venenatis felis. Mauris vitae augue ut nisl commodo cursus a et orci. Quisque a tempus sapien. Aliquam venenatis, lorem sit amet tristique tincidunt, nunc arcu hendrerit magna, sit amet aliquam libero mi id metus. Nam nec elit lacus. Nulla congue ultrices est, sed suscipit est vehicula vitae. Morbi lorem enim, tempus a lacinia at, posuere vitae quam. Sed volutpat ultricies dictum. Etiam nec mauris ac mi egestas dapibus.</p>
			</div>

			<div class="reunion">
				<a href="contacto.php" class="circulo scroll-to" data-scroll:anchor="#contacto"><span>Pida una</span> reunion ahora</a>
			</div>

			<a href="contacto.php" class="ver-datos scroll-to" data-scroll:anchor="#contacto">Ver datos de <span>contacto</span></a>

		</section>

		<section id="delicias">

			<div class="contenedorTexto">

				<header class="tituloSeccion">
					<hgroup>
						<h2>Las delicias</h2>
						<h3>... y como elegirlas</h3>
					</hgroup>
				</header>

				<div class="txt scroll-content">
					<p>Nunc sit amet consequat purus. Sed aliquam pretium varius. Phasellus mollis lacinia enim ac convallis. Donec sed laoreet risus. Integer adipiscing urna sit amet magna blandit ut egestas nulla tempus. Cras malesuada malesuada nibh, eget tristique urna accumsan condimentum. Ut vehicula nibh ut massa tristique dapibus. Vestibulum sed eros ipsum.</p>

					<p>Integer sem arcu, vulputate non auctor quis, aliquet et felis. Nam porta iaculis massa sit amet dignissim. Suspendisse tristique tortor quis nulla sollicitudin et lobortis velit dignissim. Nulla interdum ligula ac neque hendrerit tempus. Aenean accumsan, ipsum ac ornare viverra, ligula mauris accumsan libero, eu tempus metus leo eget turpis. Donec sit amet neque nulla, non venenatis felis. Mauris vitae augue ut nisl commodo cursus a et orci. Quisque a tempus sapien. Aliquam venenatis, lorem sit amet tristique tincidunt, nunc arcu hendrerit magna, sit amet aliquam libero mi id metus. Nam nec elit lacus. Nulla congue ultrices est, sed suscipit est vehicula vitae. Morbi lorem enim, tempus a lacinia at, posuere vitae quam. Sed volutpat ultricies dictum. Etiam nec mauris ac mi egestas dapibus.</p>

					<p>Integer sem arcu, vulputate non auctor quis, aliquet et felis. Nam porta iaculis massa sit amet dignissim. Suspendisse tristique tortor quis nulla sollicitudin et lobortis velit dignissim. Nulla interdum ligula ac neque hendrerit tempus. Aenean accumsan, ipsum ac ornare viverra, ligula mauris accumsan libero, eu tempus metus leo eget turpis. Donec sit amet neque nulla, non venenatis felis. Mauris vitae augue ut nisl commodo cursus a et orci. Quisque a tempus sapien. Aliquam venenatis, lorem sit amet tristique tincidunt, nunc arcu hendrerit magna, sit amet aliquam libero mi id metus. Nam nec elit lacus. Nulla congue ultrices est, sed suscipit est vehicula vitae. Morbi lorem enim, tempus a lacinia at, posuere vitae quam. Sed volutpat ultricies dictum. Etiam nec mauris ac mi egestas dapibus.</p>
				</div>

			</div>

			<div class="galeria" id="galeria-delicias">
				<ul class="bjqs">
					<li><img src="./img/galeria-delicias/01.png" width="633" height="632" /></li>
					<li><img src="./img/galeria-delicias/01.png" width="633" height="632" /></li>
					<li><img src="./img/galeria-delicias/01.png" width="633" height="632" /></li>
				</ul>
			</div>

			<a href="contacto.php" class="ver-datos scroll-to" data-scroll:anchor="#contacto">Ver datos de <span>contacto</span></a>
		</section>

		<section id="fotos">

			<header class="tituloSeccion">
				<hgroup>
					<h2>Nuestros</h2>
					<h3>... platos y manjares</h3>
				</hgroup>
			</header>

			<div class="galeria">
				<ul id="galeria-fotos">
					<li><img src="./img/galeria-fotos/01.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/02.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/03.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/04.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/01.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/02.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/03.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/04.png" width="212" height="225" /></li>
				</ul>
			</div>

			<a href="contacto.php" class="ver-datos scroll-to" data-scroll:anchor="#contacto">Ver datos de <span>contacto</span></a>

		</section>

		<section id="cocina">

			<header class="tituloSeccion">
				<hgroup>
					<h2>Nuestras</h2>
					<h3>... instalaciones</h3>
				</hgroup>
			</header>

			<div class="galeria">
				<ul id="galeria-cocina">
					<li><img src="./img/galeria-fotos/01.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/02.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/03.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/04.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/01.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/02.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/03.png" width="212" height="225" /></li>
					<li><img src="./img/galeria-fotos/04.png" width="212" height="225" /></li>
				</ul>
			</div>

			<a href="contacto.php" class="ver-datos scroll-to" data-scroll:anchor="#contacto">Ver datos de <span>contacto</span></a>

		</section>

		<section id="contacto">

			<div class="txt">

				<header class="tituloSeccion">
					<hgroup>
						<h2>Contactenos</h2>
						<h3>... o pida su reunion</h3>
					</hgroup>
				</header>

				<p class="intro">Nunc sit amet consequat purus. Sed aliquam pretium varius. Phasellus mollis lacinia enim ac convallis. Donec sed laoreet risus.</p>

				<div class="contacto">
					<dl>
						<dt>AR.</dt>
						<dd>
							<ul>
								<li>Fraga 1414, Buenos Aires</li>
								<li>00 54 11 45 55 61 43</li>
							</ul>
						</dd>
					</dl>
					<dl>
						<dt class="uy">UY.</dt>
						<dd>
							<ul>
								<li>Francisco Ros 2757, Punta Carretas</li>
								<li>00 59 82 712 31 41</li>
							</ul>
						</dd>
					</dl>
				<form id="envio-consulta">
					<p><span>*</span><input type="text" class="text" name="nombre" id="nombre" placeholder="Nombre" /></p>
					<p><span>*</span><input type="email" class="text" name="email" id="email" placeholder="Email" /></p>
					<p><input type="tel" class="text" name="telefono" id="telefono" placeholder="Telefono" /></p>
					<p><span>*</span><textarea name="consulta" id="consulta" placeholder="Consulta"></textarea></p>

					<input type="submit" class="circulo enviar" name="enviar" id="enviar" />
				</form>

			</div>

		</section>
	</div>

	<footer>
		<p>&copy; 2006 - 2012 | Todas las marcas/imágenes pertenecen a sus respectivos dueños. </p>
	</footer>

	<script src="js/libs/jquery.min.js"></script>
	<script src="js/libs/basic-jquery-slider.min.js"></script>
	<script src="js/libs/jquery.jcarousel.min.js"></script>
	<script src="js/libs/jquery.jscrollpane.min.js"></script>
	<script src="js/libs/jquery.placeholder.js"></script>
	<script src="js/libs/jquery.scrollTo.js"></script>
	<script src="js/libs/jquery.easing.1.3.js"></script>
	<script src="js/libs/jquery.validate.min.js"></script>

	<script src="js/global.js"></script>

</body>
</html>