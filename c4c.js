$(document).ready(function()
{
	$(":checkbox").change(function()
	{
		updateTools();
	});

	if(navigator.geolocation)
		navigator.geolocation.getCurrentPosition(handleGetCurrentPosition, onError);
	/*
	$(".toolsRequest").change(function()
			{
				//alert("requesting");
			});
			*/
});

function handleGetCurrentPosition(location)
{
	alert("" + location.coords.longitude + "," + location.coords.latitude);
}

function onError()
{
	alert("errror");
}

function updateTools()
{
	var selectedTools = "";
	$(":checkbox").each(function(i,elem)
	{
		if($(elem).is(":checked"))
		{
			selectedTools += $(elem).val() + ",";
		}
	});
	selectedTools = selectedTools.substring(0, selectedTools.length - 1);

	$.get("ajax.php", {keywords: selectedTools}, function(data)
			{
				var htmlString = "";
				$(data).each(function(i, val)
						{
							htmlString += "Name: " + (val[0]) + ", location: " + val[1] + "<br/>";
						});
				$("#demo").html(htmlString);
			}, "json");
}

/* google maps -----------------------------------------------------*/

google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(52.3731, 4.8922);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 13
  };

  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

  var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
 function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
 }

};
/* end google maps -----------------------------------------------------*/
