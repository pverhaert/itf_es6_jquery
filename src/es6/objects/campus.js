const campus = {
    name: 'Campus Geel',
    address: {
        street: 'Kleinhoefstraat 4',
        city: 'Geel',
        zipcode: '2440',
        geo: {
            lat: 51.16095,
            lng: 4.96166,
            zoom: 15,
        },
    },
    getFullAddress() {
        return `${this.address.street}, ${this.address.zipcode} ${this.address.city}`;
    },
    getMapUrl() {
        const lang = 'en_US';
        const layers = 'sat,skl';
        const zoom = this.address.geo.zoom;
        const size = '650,350';
        const marker = `${this.address.geo.lng},${this.address.geo.lat}`;
        const icon = 'pm2rdm1';
        return `https://static-maps.yandex.ru/1.x/?lang=${lang}&l=${layers}&z=${zoom}&size=${size}&pt=${marker},${icon}`;
    },
};

const zoom = document.getElementById('zoom');
const card = document.querySelector('.card');
const image = card.querySelector('img');

// card.querySelector('...') === document.querySelector('.card').querySelector('...')
card.querySelector('h3').innerHTML = `Thomas More <small>${campus.name}</small>`;
card.querySelector('p').textContent = campus.getFullAddress();

zoom.addEventListener('change', () => {
    campus.address.geo.zoom = zoom.value;
    image.src = campus.getMapUrl();
});

zoom.dispatchEvent(new Event('change'));
