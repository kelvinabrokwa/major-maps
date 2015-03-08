var points = require('./data/points.js'),
		lines = require('./data/lines.js')

L.mapbox.accessToken = 'pk.eyJ1Ijoia2VsdmluYWJyb2t3YSIsImEiOiJkcUF1TWlVIn0.YzBtz0O019DJGk3IpFi72g';
var map = L.mapbox.map('map', 'kelvinabrokwa.335851e7')
    .setView([37.26820, -76.715000], 16);


var circle_options = {
  color: '#E97335',
  opacity: 1,
  weight: 4,
  fillColor: '#E97335',
  fillOpacity: 0
};

var polyline_options = {
  color: '#E97335',
  opacity: 1,
  weight: 4
}

var featureGroup = L.featureGroup().addTo(map);

function addFeatures(points, lines) {
	var featureLayer = L.mapbox.featureLayer({
	  type: 'FeatureCollection',
	  features: points
	})
	.addTo(map);

	featureLayer.eachLayer(function(layer) {
	  var content = layer.feature.properties.name;
	  layer.bindPopup(content);
	});

	var polyline = L.polyline(lines, polyline_options).addTo(featureGroup);
}

addFeatures(points.ensp,lines.ensp);

window.setTimeout(function() {}, 4000)
