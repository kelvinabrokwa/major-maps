(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/kelvinabrokwa/Documents/Git/wm-dept-locations/data/lines.js":[function(require,module,exports){
module.exports.ir = [
	[37.2675, -76.71694],
	[37.270850, -76.709008], // Wren Building (Religions)
	[37.2675, -76.71694],
	[37.269331,-76.714443], // ISC (Psychology)
	[37.2675, -76.71694],
	[37.266253, -76.718305], // Miller (Business)
	[37.2675, -76.71694],
	[37.27019,-76.7109], // Washington (Anthropology)
	[37.2675, -76.71694]
]

module.exports.policy = [
	[37.2675, -76.71694],
	[37.270850, -76.709008], // Wren Building (Religions)
	[37.2675, -76.71694],
	[37.269331,-76.714443], // ISC (Psychology)
	[37.2675, -76.71694],
	[37.266253, -76.718305], // Miller (Business)
	[37.2675, -76.71694],
	[37.269331, -76.714443], // ISC (Psychology)
	[37.2675, -76.71694],
	[37.268, -76.71677], // Jones (Mathematics)
	[37.2675, -76.71694],
	[37.271448843303716, -76.71181619167328] // Blair(Philosophy)
]

module.exports.ensp = [
    [37.26972,-76.7225],
    [37.270850,-76.709008], // Wren (Religion)
    [37.26972,-76.7225],
    [37.26861,-76.71833], // Adair (Kinesiology)
    [37.26972,-76.7225],
    [37.27019,-76.7109], // Washington (Anthropology)
    [37.26972,-76.7225], 
    [37.271448843303716,-76.71], // Tucker (English)
    [37.26972,-76.7225],
    [37.2675,-76.71694], // Morton (Government)
    [37.26972,-76.7225],
    [37.269331,-76.714443], // ISC (Chemistry)
    [37.26972,-76.7225],
    [37.264780, -76.705068], // Marshall Wythe (Law)
    [37.26972,-76.7225],
    [37.248889, -76.499467] // VIMS (Marine Science)
    
]

module.exports.medieval = [
    [37.27154, -76.71079],
    [37.270850, -76.709008], // Wren Building (Religions)
    [37.27154, -76.71079],
    [37.2675, -76.71694], // Morton (History)
    [37.27154, -76.71079],
    [37.27015, -76.70996], // Ewell (Music)
    [37.27154, -76.71079],
    [37.271448843303716, -76.71], // Tucker (English)
    [37.27154, -76.71079],
    [37.27019, -76.7109], // Washington (Languages)
    [37.27154, -76.71079],
    [37.271448843303716, -76.71181619167328], //Blair (Philosophy)
    [37.27154, -76.71079],
    [37.268379, -76.715301]   
]

module.exports.neuro = [
    [37.269331, -76.714443],
    [37.268,-76.71677], // Jones (Mathematics)
    [37.269331, -76.714443],
    [37.26861, -76.71833], // Adair (Kinesiology)
    [37.269331, -76.714443]
    //[] // Applied Science
]

module.exports.math = [
    [37.268,-76.71677],
    [37.270138288300345,-76.71179473400115], // McGlothlin Street (Computer Science)
    [37.268,-76.71677],
    [37.2675,-76.71694], // Morton (Economics)
    [37.268,-76.71677],
    [37.26889,-76.71722], // Small (Physics)
    [37.268,-76.71677] // REMEBER TO ADD: School of Education (Education)
]

module.exports.bio = [
    [37.269331,-76.714443],
    [37.268,-76.71677] // Jones (Math)
]

module.exports.english = []
},{}],"/Users/kelvinabrokwa/Documents/Git/wm-dept-locations/data/points.js":[function(require,module,exports){
module.exports.bio = [
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71677,
                37.268
            ]
        },
        "properties":{
            "name":"Jones Hall: Mathematics",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.714443,
                37.269331
            ]
        },
        "properties":{
            "name":"ISC: Chemistry",
            "marker-color":"#E97335"
        }
    }
]

module.exports.english = [
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71,
                37.271448843303716
            ]
        },
        "properties":{
            "name":"Tucker Hall: English",
            "marker-color":"#E97335"
        }
    }
]

module.exports.ensp = [
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.7109,
                37.27019
            ]
        },
        "properties":{
            "name":"Washington Hall: Anthropology",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.705068,
                37.264780
            ]
        },
        "properties":{
            "name":"Marshall Wythe Hall: Law",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71,
                37.271448843303716
            ]
        },
        "properties":{
            "name":"Tucker Hall: English",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.7225,
                37.26972
            ]
        },
        "properties":{
            "name":"Keck Environmental Field Lab",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71694,
                37.2675
            ]
        },
        "properties":{
            "name":"Morton Hall: Public Policy, Government, Economics, Sociology, History",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71833,
                37.26861
            ]
        },
        "properties":{
            "name":"Adair Hall: Kinesiology",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.714443,
                37.269331
            ]
        },
        "properties":{
            "name":"ISC: Chemistry",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.709008,
                37.270850
            ]
        },
        "properties":{
            "name":"Wren Building: Religion",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.499467,
                37.248889
            ]
        },
        "properties":{
            "name":"VIMS: Marine Science",
            "marker-color":"#E97335"
        }
    }
]

module.exports.ir = [
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.7109,
                37.27019
            ]
        },
        "properties":{
            "name":"Washington Hall: Anthropology",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71694,
                37.2675
            ]
        },
        "properties":{
            "name":"Morton Hall: Government, Economics, History",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.718305,
                37.266253
            ]
        },
        "properties":{
            "name":"Bussiness School: Business",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.714443,
                37.269331
            ]
        },
        "properties":{
            "name":"ISC: Psychology",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.709008,
                37.270850
            ]
        },
        "properties":{
            "name":"Wren Building: Religion",
            "marker-color":"#E97335"
        }
    }
]

module.exports.math = [
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71677,
                37.268
            ]
        },
        "properties":{
            "name":"Jones Hall",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71179473400115,
                37.270138288300345
            ]
        },
        "properties":{
            "name":"McGlothlin-Street Hall: Computer Science",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71694,
                37.2675
            ]
        },
        "properties":{
            "name":"Morton Hall: Economics",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71722,
                37.26889
            ]
        },
        "properties":{
            "name":"Small Hall: Physics",
            "marker-color":"#E97335"
        }
    }
]

module.exports.medieval = [
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71079,
                37.27154
            ]
        },
        "properties":{
            "name":"Tyler Hall",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71181619167328,
                37.271448843303716
            ]
        },
        "properties":{
            "name":"James Blair Hall: Philosophy",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71694,
                37.2675
            ]
        },
        "properties":{
            "name":"Morton Hall: History",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.715301,
                37.268379
            ]
        },
        "properties":{
            "name":"Andrews Hall: Art History",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.70996,
                37.27015
            ]
        },
        "properties":{
            "name":"Ewell Hall: Music",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71,
                37.271448843303716
            ]
        },
        "properties":{
            "name":"Tucker Hall: English",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.7109,
                37.27019
            ]
        },
        "properties":{
            "name":"Washington Hall: French, German, Hispanic Studies, Italian",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.709008,
                37.270850
            ]
        },
        "properties":{
            "name":"Wren Building: Religion",
            "marker-color":"#E97335"
        }
    }
]

module.exports.neuro = [
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.714443,
                37.269331
            ]
        },
        "properties":{
            "name":"ISC: Biology, Chemistry, Psychology",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71677,
                37.268
            ]
        },
        "properties":{
            "name":"Jones Hall: Mathematics",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71833,
                37.26861
            ]
        },
        "properties":{
            "name":"Adair Hall: Kinesiology",
            "marker-color":"#E97335"
        }
    }
]

module.exports.policy = [
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71181619167328,
                37.271448843303716
            ]
        },
        "properties":{
            "name":"James Blair Hall: Philosophy",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71677,
                37.268
            ]
        },
        "properties":{
            "name":"Jones Hall: Mathematics",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.71694,
                37.2675
            ]
        },
        "properties":{
            "name":"Morton Hall: Government, Economics, Sociology",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.718305,
                37.266253
            ]
        },
        "properties":{
            "name":"Bussiness School: Business",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.714443,
                37.269331
            ]
        },
        "properties":{
            "name":"ISC: Psychology",
            "marker-color":"#E97335"
        }
    },
    {
        "type":"Feature",
        "geometry":{
            "type":"Point",
            "coordinates":[
                -76.709008,
                37.270850
            ]
        },
        "properties":{
            "name":"Wren Building: Religion",
            "marker-color":"#E97335"
        }
    }
]

},{}],"/Users/kelvinabrokwa/Documents/Git/wm-dept-locations/index.js":[function(require,module,exports){
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

function changeSubject(subject) {
	map.removeLayer(featureGroup); 
	map.removeLayer(featureLayer);
	featureGroup = L.featureGroup().addTo(map);
	addFeatures(points[subject], lines[subject]);
}

var color = {'backgroundColor': '#91CB24'};
addFeatures(points['ensp'],lines['ensp']);
$('#ensp').css(color);
function resetButtonColor() {
	$('.button').css({'backgroundColor': '#000'});
}
$('#ir').click(function() { changeSubject('ir'); resetButtonColor(); $(this).css(color) });
$('#ensp').click(function() { changeSubject('ensp'); resetButtonColor(); $(this).css(color) });
$('#policy').click(function() { changeSubject('policy'); resetButtonColor(); $(this).css(color) });
$('#neuro').click(function() { changeSubject('neuro'); resetButtonColor(); $(this).css(color) });
$('#bio').click(function() { changeSubject('bio'); resetButtonColor(); $(this).css(color) });
$('#medieval').click(function() { changeSubject('medieval'); resetButtonColor(); $(this).css(color) });
$('#math').click(function() { changeSubject('math'); resetButtonColor(); $(this).css(color) });
$('#english').click(function() { changeSubject('english'); resetButtonColor(); $(this).css(color) });

},{"./data/lines.js":"/Users/kelvinabrokwa/Documents/Git/wm-dept-locations/data/lines.js","./data/points.js":"/Users/kelvinabrokwa/Documents/Git/wm-dept-locations/data/points.js"}]},{},["/Users/kelvinabrokwa/Documents/Git/wm-dept-locations/index.js"]);
