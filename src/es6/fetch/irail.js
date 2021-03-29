const buttons = document.getElementById('buttons');
const preloader = document.getElementById('preloader');
const stationsUrl = 'https://api.irail.be/stations/?format=json&lang=en';
let closestStations = [];
// default value for myLocation = Geel
const myLocation = {
    lat: 51.162074,
    lng: 4.99088,
};

// get current position
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            // update myLocation
            myLocation.lat = position.coords.latitude;
            myLocation.lng = position.coords.longitude;
            // fetch all Belgian railway stations
            fetchStations();
        },
        (error) => {
            alert('Unable to retrieve your location');
        },
        {
            enableHighAccuracy: true,
            timeout: 3000,
        }
    );
} else {
    alert('Geolocation is not supported by this browser');
}

function fetchStations() {
    // fetch all Belgian railway stations
    preloader.style.visibility = 'visible';
    preloader.querySelector('p').textContent = 'Loading stations ...';
    fetch(stationsUrl)
        .then((response) =>
            // return JSON part of the response
            response.json()
        )
        .then((stations) => {
            console.log('unordered list of railway stations', stations);
            preloader.querySelector('p').textContent = 'Find closest station ...';
            // modify the properties of every station
            return stations.station.map((st) => {
                // convert lat and lng form string to number
                const lat = +st.locationY;
                const lng = +st.locationX;
                // calculate the distance between your location and the station location as the crow flies (in km)
                const distance = calcCrow(lat, lng, myLocation.lat, myLocation.lng);
                return {
                    lat,
                    lng,
                    distance,
                    id: st.id,
                    name: st.name,
                };
            });
        })
        .then((stations) => {
            // order railway stations by distance from your location
            const ordered = stations.sort((a, b) => a.distance - b.distance);
            console.log('ordered list of railway stations', ordered);
            return ordered;
        })
        .then((orderedStations) => {
            // get the five closest railway stations
            closestStations = orderedStations.slice(0, 5);
            console.table(closestStations);
            // add a button for every station
            closestStations.forEach((station) => {
                buttons.innerHTML += `<button data-id="${station.id}">${station.name}</button>`;
            });
            // add event listener to every button
            buttons.querySelectorAll('button').forEach((button) => {
                button.addEventListener('click', function (e) {
                    const id = this.dataset.id;
                    document.getElementById('station').textContent = this.textContent;
                    // get timetable from the clicked station
                    fetchTimetable(id, this.textContent);
                });
            });
            // trigger click event on first button
            buttons.querySelector('button:first-child').dispatchEvent(new Event('click'));
            preloader.style.visibility = 'hidden';
        })
        .catch((error) => {
            console.log(error);
        });
}

function fetchTimetable(id, station) {
    preloader.style.visibility = 'visible';
    preloader.querySelector('p').textContent = `Loading timetable for ${station}...`;
    const liveboardUrl = `https://api.irail.be/liveboard/?id=${id}&format=json&lang=en`;
    fetch(liveboardUrl)
        .then((response) => response.json())
        .then((data) => {
            // we only need the departure[] containing the timetable
            const table = data.departures.departure;
            console.log('timetable', table);
            // return the transformed timetable
            return table.map((tbl) => {
                // the API sends the time in sec, we need ms
                const departure = new Date(+tbl.time * 1000).toTimeString().substring(0, 5);
                let delay = '';
                let color = 'border-green';
                // if delay is not '0', draw a red border
                if (tbl.delay !== '0') {
                    // convert the delay from sec to min
                    delay = `+${tbl.delay / 60}`;
                    color = 'border-red';
                }
                return {
                    to: tbl.station,
                    platform: tbl.platform,
                    delay,
                    color,
                    departure,
                };
            });
        })
        .then((table) => {
            // build the timetable
            let rows = '';
            table.forEach((train) => {
                rows += `
                    <div class="${train.color}">
                      <span>${train.departure}</span>
                      <span>${train.delay}</span>
                      <span>${train.platform}</span>
                      <span>${train.to}</span>
                   </div> 
                `;
            });
            document.getElementById('timetable').innerHTML = rows;
            preloader.style.visibility = 'hidden';
        })
        .catch((error) => alert(error));
}

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const latitude1 = (lat1 * Math.PI) / 180;
    const latitude2 = (lat2 * Math.PI) / 180;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(latitude1) * Math.cos(latitude2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 100) / 100;
}
