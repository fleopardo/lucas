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

	if ( $(".home .carousel").length > 0){
	  $('.carousel').bjqs({
	    height      : 420,
	    width       : 960,
	    responsive  : true
	  });
	}

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

	if ( $("#map_canvas").length > 0){
	  initialize();
	}

});