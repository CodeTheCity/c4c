
var map;
var currentLocation;
var communityLayer;
var parkingSpots;

$(document).ready(function()
{
	$(":checkbox").change(function()
	{
		updateTools();
	});

	/*
	$(".toolsRequest").change(function()
			{
				//alert("requesting");
			});
			*/


	//Create map
	  window.map = new ol.Map({
	    target: 'map',
	    layers: [
	    new ol.layer.Tile({
	      source: new ol.source.OSM
	    }) ]
	  });

	//Get map data
	$.get("https://raw.githubusercontent.com/lunaroverlord/c4c/master/export.geojson", function(data) {
	  var json = JSON.parse(data);
	  var coords = [];
	  for (var i = 0; i < json.features.length; i++) {
	    if (json.features[i].geometry.coordinates[0][0] === undefined){
	      coords.push(json.features[i].geometry.coordinates);
	    } else
	    coords.push(json.features[i].geometry.coordinates[0][0]);
	  };
	  parkingSpots = coords;
	  setParkingMarkers(coords);

	  //Get position on map
		if(navigator.geolocation)
			navigator.geolocation.getCurrentPosition(handleGetCurrentPosition, onError);

  	popup();
	});
});

function centerMap(long, lat)
{
    console.log("Long: " + long + " Lat: " + lat);
    map.getView().setCenter(ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
    map.getView().setZoom(17);
}

function handleGetCurrentPosition(location)
{
	centerMap(location.coords.longitude, location.coords.latitude);
	
	  setUserMarker(location.coords.longitude, location.coords.latitude);
	
	//	alert("" + location.coords.longitude + "," + location.coords.latitude);
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
		var coords = [];
		$(data).each(function(i, val)
		{
			coords.push(val);
			htmlString += "Name: " + (val[0]) + ", location: " + val[1] + "<br/>";
		});
		$("#demo").html(htmlString);
		setCommunityMarkers(coords);
	}, "json");
}

function setCommunityMarkers(array)
{
var iconFeatures=[];

  for (var i = 0; i < array.length; i++) {
    if(array[i] !== undefined){
      if (array[i].length>=2){
        var coord = array[i][1].split(",");

        var iconFeature = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([parseFloat(coord[1]), parseFloat(coord[0])], 'EPSG:4326',     
            'EPSG:3857')),
          name: array[i][0] + "<br/><span style='font-size:11px'>" + array[i][2].replace(",", ", ") + "</span>"
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
      opacity: 1.0,
      scale: 1.0,
      src: 'biker.jpg'
    }))
  });

  var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: iconStyle
  });

  if(communityLayer != undefined)
	  map.removeLayer(communityLayer);
  communityLayer = vectorLayer;

  map.addLayer(vectorLayer);

}

function setParkingMarkers(array){
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
      opacity: 1.00,
      scale: 0.75,
      src: 'http://google-maps-icons.googlecode.com/files/bicycleparking.png'
    }))
  });

  var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: iconStyle
  });

  map.addLayer(vectorLayer);
}

function setUserMarker(long, lat)
{
	var iconFeatures=[];
	var iconFeature = new ol.Feature({
	  geometry: new ol.geom.Point(ol.proj.transform([long, lat], 'EPSG:4326',     
	    'EPSG:3857')),
	  name: 'Your location'
	});
	iconFeatures.push(iconFeature);

	  var vectorSource = new ol.source.Vector({
	    features: iconFeatures
	  });

	  var iconStyle = new ol.style.Style({
	    image: new ol.style.Icon(({
	      anchor: [0.5, 46],
	      anchorXUnits: 'fraction',
	      anchorYUnits: 'pixels',
	      opacity: 1.0,
	      scale: 1.0,
	      src: 'me.png'
	    }))
	  });

	  var vectorLayer = new ol.layer.Vector({
	    source: vectorSource,
	    style: iconStyle
	  });

	  map.addLayer(vectorLayer);
}


function popup(){
	//alert("test");
	var element = document.getElementById('popup');

	var popup = new ol.Overlay({
		offset:  [0, -30],
		element: element,
		positioning: 'top-center',
		stopEvent: false
	});

	map.addOverlay(popup);

	map.on('click', function(evt) {
		var feature = map.forEachFeatureAtPixel(evt.pixel,
			function(feature, layer) {
				return feature;
			});
		if (feature) {
			var geometry = feature.getGeometry();
			var coord = geometry.getCoordinates();
			popup.setPosition(coord);

			//alert(feature.get("name"));
			$(element).popover('destroy');
			$(element).popover({
				'placement': 'top',
				'html': true,
				'animation' : false,
				'content': feature.get('name') + "<br/><button type=\"button\">Contact</button>"
			});
			$(element).popover('show');
		} else {
			$(element).popover('destroy');
		}
	});

	map.on('pointermove', function(e) {
		if (e.dragging) {
			$(element).popover('destroy');
			return;
		}
		var pixel = map.getEventPixel(e.originalEvent);
		//var hit = map.hasFeatureAtPixel(pixel);
		//map.getTarget().style.cursor = hit ? 'pointer' : '';
	});
}

/* google maps -----------------------------------------------------*/

/*
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

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
*/
/* end google maps -----------------------------------------------------*/
