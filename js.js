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

  var map = new ol.Map({
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