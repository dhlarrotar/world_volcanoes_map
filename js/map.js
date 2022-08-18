



// setting basemaps and attributions)

// OpenStreetMap
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// mapbox Streets
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

// satellite
var satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});





// creating leaflet map element
var map = L.map('map', {
  center: [25.65, 4.1],
  zoom: 1,
  layers: [streets]
});



// creating parent group layer with marker clustering
var   parentGroup = L.markerClusterGroup();





var baseLayers = {
  'OpenStreetMap': osm,
  'Streets': streets,
 'Satellite':  satellite,
 
};

var overlays = {
    'World volcanoes':   parentGroup,
};

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);



  



map.attributionControl.addAttribution('Smithsonian Institution &copy; <a href="https://volcano.si.edu/">Global Volcanism Program</a>, downloaded 01 Aug 2022');




