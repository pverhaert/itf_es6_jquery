document.querySelectorAll('[type=number]').forEach(function (input) {
    input.addEventListener('blur', function (e) {
        const radius = document.getElementById('radius').value;
        const height = document.getElementById('height').value;
        const volume = radius * radius * Math.PI * height;

        document.querySelector('#volume1 b').innerHTML = `${volume} cm<sup>3</sup>`;

        // rounded
        document.querySelector('#volume2 b').innerHTML = `${Math.round(volume)} cm<sup>3</sup>`;

        // rounded to 2 decimal points
        // document.querySelector('#volume3 b').innerHTML = `${Math.round(volume * 100) / 100} cm<sup>3</sup>`;
        document.querySelector('#volume3 b').innerHTML = `${volume.toFixed(2)} cm<sup>3</sup>`;
    });
});

// dispatch (trigger) blur event
document.getElementById('radius').dispatchEvent(new Event('blur'));
