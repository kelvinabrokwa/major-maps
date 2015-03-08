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
var featureLayer;

function addFeatures(points, lines) {
	featureLayer = L.mapbox.featureLayer({
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

addFeatures(points['ensp'],lines['ensp']);

function changeSubject(subject) {
	map.removeLayer(featureGroup); 
	map.removeLayer(featureLayer);
	featureGroup = L.featureGroup().addTo(map);
	addFeatures(points[subject], lines[subject]);
}
var color = {'backgroundColor': '#000'};
function resetButtonColor() {
	$('.button').css(color);
}
$('#ir').click(function() { changeSubject('ir'); resetButtonColor(); $(this).css({'backgroundColor': '#91CB24'}) });
$('#ensp').click(function() { changeSubject('ensp'); resetButtonColor(); $(this).css({'backgroundColor': '#91CB24'}) });
$('#policy').click(function() { changeSubject('policy'); resetButtonColor(); $(this).css({'backgroundColor': '#91CB24'}) });
$('#neuro').click(function() { changeSubject('neuro'); resetButtonColor(); $(this).css({'backgroundColor': '#91CB24'}) });
$('#bio').click(function() { changeSubject('bio'); resetButtonColor(); $(this).css({'backgroundColor': '#91CB24'}) });
$('#medieval').click(function() { changeSubject('medieval'); resetButtonColor(); $(this).css({'backgroundColor': '#91CB24'}) });
$('#math').click(function() { changeSubject('math'); resetButtonColor(); $(this).css({'backgroundColor': '#91CB24'}) });
$('#english').click(function() { changeSubject('english'); resetButtonColor(); $(this).css({'backgroundColor': '#91CB24'}) });

