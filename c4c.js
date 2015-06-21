
var map;
var currentLocation;

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

	//Get map
	$.get("https://raw.githubusercontent.com/lunaroverlord/c4c/master/export.geojson", function(data) {
	  var json = JSON.parse(data);
	  var coords = [];
	  for (var i = 0; i < json.features.length; i++) {
	    if (json.features[i].geometry.coordinates[0][0] === undefined){
	      coords.push(json.features[i].geometry.coordinates);
	    } else
	    coords.push(json.features[i].geometry.coordinates[0][0]);
	  };
	  setMarkers(coords);
	});
});

function handleGetCurrentPosition(location)
{
	currentLocation = location;
	//alert("" + location.coords.longitude + "," + location.coords.latitude);
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

function setMarkers(array){
  var iconFeatures=[];

  for (var i = 0; i < array.length; i++) {
    if(array[i] !== undefined){
      if (array[i].length>=2){
        var coord = array[i];

        var iconFeature = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([coord[0], coord[1]], 'EPSG:4326',     
            'EPSG:3857')),
          name: 'Bike parking'
        });
        iconFeatures.push(iconFeature);
      }
    }
  };

  var vectorSource = new ol.source.Vector({
    features: iconFeatures
  });

  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon(({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      scale: 0.75,
      src: 'http://google-maps-icons.googlecode.com/files/bicycleparking.png'
    }))
  });

  var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: iconStyle
  });

  map = new ol.Map({
    target: 'map',
    layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM
    }), vectorLayer
    ],
    view: new ol.View({
      center: ol.proj.transform([-3.1839465, 55.9449353], 'EPSG:4326', 'EPSG:3857'),
      zoom: 11
    })
  });
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
