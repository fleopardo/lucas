$(function(){
	
	
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

	
}); 