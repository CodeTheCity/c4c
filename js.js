
function findClosest(point, array, top) {
for (var i = 0; i < array.length; i++) {
  array[i].distanceBetween = distanceBetweenPoints(array[i], point);
};

array.sort(compare);

return array.slice(0, top);
}

function compare(a,b) {
  if (a.distanceBetween < b.distanceBetween)
    return -1;
  if (a.distanceBetween > b.distanceBetween)
    return 1;
  return 0;
}

function distanceBetweenPoints(latlng1, latlng2) {
        var line = new ol.geom.LineString([latlng1, latlng2]);
            return line.getLength(); 
    }

    function findClosestPoint(){
       var point =  new ol.geom.Point(pos.lon, pos.lat);
        var closest =_.min(nodeLayer.features, function(feature) {
            return feature.geometry.distanceTo(point);
        });
    }


