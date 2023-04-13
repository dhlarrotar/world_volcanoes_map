



// setting basemaps and attributions)

// OpenStreetMap
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// mapbox Streets
var esriAttr = 'Tiles &copy; Esri';
var esriUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';

var streets = L.tileLayer(esriUrl, {id: 'ESRI streets', tileSize: 512, zoomOffset: -1, attribution: esriAttr});

// satellite
var mbUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
var satellite = L.tileLayer(mbUrl, {id: 'ESRI satellite', tileSize: 512, zoomOffset: -1, attribution: esriAttr});





// creating leaflet map element
var map = L.map('map', {
  center: [-1.65, 4.1],
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




