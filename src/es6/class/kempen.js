// Campus class
class Campus {
    constructor(name, street, lat, lng, zoom = 15) {
        this.name = name;
        this.address = {
            street, // shorthand for street = street
            geo: {
                lat,
                lng,
                zoom,
            },
        };
    }

    // methodes
    getMapUrl() {
        const lang = 'en_US';
        const layers = 'map';
        const zoom = this.address.geo.zoom;
        const size = '650,350';
        const marker = `${this.address.geo.lng},${this.address.geo.lat}`;
        const icon = 'pm2rdm1';
        return `https://static-maps.yandex.ru/1.x/?lang=${lang}&l=${layers}&z=${zoom}&size=${size}&pt=${marker},${icon}`;
    }
}

// campuses array
const campuses = [];

// push new campus to array (order is important)
campuses.push(new Campus('Campus Geel', 'Kleinhoefstraat 4', 51.16095, 4.96166));
campuses.push(new Campus('Campus Lier', 'Antwerpsestraat 99', 51.134006, 4.566427, 10));
campuses.push(new Campus('Campus Turnhout', 'Campus Blairon 800', 51.317004, 4.928719));
// you can also specify all properties separately (order is not important)
const turnhout = new Campus();
turnhout.name = 'Campus Vorselaar';
turnhout.address.street = 'Lepelstraat 2';
turnhout.address.geo.lat = 51.200987;
turnhout.address.geo.lng = 4.77261;
turnhout.address.geo.zoom = 16;
campuses.push(turnhout);

// create cards from array
let cards = '';
campuses.forEach((campus) => {
    console.log(campus);
    cards += `
        <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card fluid">
                <h3>${campus.name}</h3>
                <p>${campus.address.street}</p>
                <img src="${campus.getMapUrl()}" alt="${campus.name}" />
            </div>
        </div>`;
});
document.querySelector('.border-green').innerHTML = cards;
