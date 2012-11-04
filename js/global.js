$(function(){

	/**
	 * Efecto de fade al cargar y salir de las paginas
	 */
	$('.fd-pattern').fadeIn(500);
	$('nav a, footer a').click(function(e){
		e.preventDefault();
		var link = this;
		$('.fd-pattern').fadeOut(200, function(){
			document.location = link.href;
		});
	})


	/* MAP */
	if( typeof(google) != "undefined"){
		var options = {
	        zoom: 15,
	        center: new google.maps.LatLng(-34.58, -58.47),
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: false,
			navigationControl: true,
			streetViewControl: false
	    };
	    var map = new google.maps.Map(document.getElementById('map'), options);

		new google.maps.Marker({
	        position: map.getCenter()
	        , map: map
	        , title: 'Pulsa aquí'
	        , icon: './img/im_map-marker.png'
	        , cursor: 'default'
	        , draggable: true
	    });
	}
    /* FIN MAP */




    /*PLACEHOLDER CHROME*/

    $('input, textarea').on('focus',function(){
        if ( $(this).attr('placeholder') ) {
            $(this).data('placeholder', $(this).attr('placeholder'))
            .removeAttr('placeholder');
        }
    }).on('blur', function(){
        if ( $(this).data('placeholder') ) {
            $(this).attr('placeholder', $(this).data('placeholder'))
            .removeData('placeholder');
        }
    });

   /* FIN PLACEHOLDER CHROME */


});