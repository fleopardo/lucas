/**
 * Efecto de fade al cargar y salir de las paginas
 */
$('body > div').fadeIn(500);

$('a').click(function(e){
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
	    responsive  : true
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

	/*INCIALIZACION DE PLUG IN SELECTMENU*/
	if ( $("body").hasClass("contacto") ){
		$('select').selectmenu({
			transferClasses:true
		});


		//Placeholder fallback
		$('input[placeholder],textarea[placeholder]').placeholder();
	}

});