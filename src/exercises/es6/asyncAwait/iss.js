const issPositionUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
const reverseGeoUrl = 'https://nominatim.openstreetmap.org/reverse?format=json';

// default coordinates are for Thomas More, campus Geel
const iss = {
    lat: 51.16095,
    lng: 4.96166,
    zoom: 3,
    country: 'Belgium',
};

// initialize new Leaflet map
const map = L.map('map').setView([0, 0], iss.zoom);
// add marker (latitude = 0 and longitude = 0) to the map
const issMarker = L.marker([0, 0]).addTo(map);
// display openstreetmap tile layer on the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// call this function to update the map
function updateIssMarker() {
    issMarker.setLatLng([iss.lat, iss.lng]);
    map.setView([iss.lat, iss.lng], map.getZoom());
}
updateIssMarker();
