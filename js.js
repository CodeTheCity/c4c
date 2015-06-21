popup();

function popup(){
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

			$(element).popover({
				'placement': 'top',
				'html': true,
				'animation' : true,
				'content': feature.get('name') + "<button type=\"button\">Click</button>"
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
		var hit = map.hasFeatureAtPixel(pixel);
		map.getTarget().style.cursor = hit ? 'pointer' : '';
	});
}
