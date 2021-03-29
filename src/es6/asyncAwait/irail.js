const buttons = document.getElementById('buttons');
const preloader = document.getElementById('preloader');
const stationsUrl = 'https://api.irail.be/stations/?format=json&lang=en';
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
            fetchStations().catch((error) => {
                preloader.classList.add('hidden');
                console.log(error);
            });
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

async function fetchStations() {
    preloader.style.visibility = 'visible';
    preloader.querySelector('p').textContent = 'Loading stations ...';
    // fetch all Belgian railway stations
    const response = await fetch(stationsUrl);
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}  ${response.statusText}`); // check for errors
    }
    let stations = await response.json();
    // add distance between your location and the station location
    stations = stationDistance(stations);
    // order railway stations by distance from your location and get the five closest railway stations
    stations = stations.sort((a, b) => a.distance - b.distance).slice(0, 5);
    console.table(stations);
    // add a button with an event listener for every station
    stationButtons(stations);
    // trigger click event on first button
    buttons.querySelector('button:first-child').dispatchEvent(new Event('click'));
    preloader.style.visibility = 'hidden';
}

async function fetchTimetable(id, station) {
    preloader.style.visibility = 'visible';
    preloader.querySelector('p').textContent = `Loading timetable for ${station}...`;
    const liveboardUrl = `https://api.irail.be/liveboard/?id=${id}&format=json&lang=en`;
    const response = await fetch(liveboardUrl);
    const data = await response.json();
    // we only need the departure[] containing the timetable
    let table = data.departures.departure;
    // transform the timetable
    table = transformTimetable(table);
    // build the timetable
    showTimetable(table);
    preloader.style.visibility = 'hidden';
}

function stationDistance(stations) {
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
}

function stationButtons(stations) {
    stations.forEach((station) => {
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
}

function transformTimetable(table) {
    return table.map((tbl) => {
        const departure = new Date(+tbl.time * 1000).toTimeString().substring(0, 5);
        let delay = '';
        let color = 'border-green';
        if (tbl.delay !== '0') {
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
}

function showTimetable(table) {
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
