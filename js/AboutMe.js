function initialize(){
	var mapProp = {
		center: new google.maps.LatLng(-7.825289,112.098598),
		zoom: 7,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
	setInterval(function(){
		$('#carousel ul').animate({marginLeft: '-400px'}, 2000, function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		});
	}, 4000);
});

/*----Google Map to be displayed-------*/

