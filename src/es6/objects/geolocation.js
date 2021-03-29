const myLocation = {
    lat: 51.16095,
    lng: 4.96166,
    zoom: 15,
    getCoordinates() {
        return JSON.stringify(myLocation);
    },
    getMapUrl() {
        const lang = 'en_US';
        const layers = 'map';
        const zoom = this.zoom;
        const size = '650,350';
        const marker = `${this.lng},${this.lat}`;
        const icon = 'pm2rdm1';
        return `https://static-maps.yandex.ru/1.x/?lang=${lang}&l=${layers}&z=${zoom}&size=${size}&pt=${marker},${icon}`;
    },
};

const zoom = document.getElementById('zoom');
const card = document.querySelector('.card');
const latLng = card.querySelector('p');
const image = card.querySelector('img');

// Options for the Geolocation API
const watchOptions = {
    enableHighAccuracy: true,
    timeout: 3000,
};

// location found
function successCallback(position) {
    console.log('new position', position);
    myLocation.lat = position.coords.latitude;
    myLocation.lng = position.coords.longitude;
    updateCard();
}

// location not found (timeout, error, ...)
function errorCallback() {
    latLng.innerHTML = 'Unable to retrieve your location';
}

function updateCard() {
    latLng.innerHTML = `My location ${myLocation.getCoordinates()}`;
    image.src = myLocation.getMapUrl();
}

// check if geolocation is available in the browser
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(successCallback, errorCallback, watchOptions);
} else {
    latLng.innerHTML = 'Geolocation is not supported by this browser.';
}

zoom.addEventListener('change', () => {
    myLocation.zoom = zoom.value;
    updateCard();
});
