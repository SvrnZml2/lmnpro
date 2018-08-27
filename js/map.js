function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 47.648950, lng: -2.743205},
	  zoom: 15
	});
	marker = new google.maps.Marker({position: map.center,map: map,icon: "../images/icon.png"});
	
	marker.setAnimation(google.maps.Animation.BOUNCE); //Animation des marqueurs


	}