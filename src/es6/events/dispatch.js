const button = document.querySelector('main button');
const output = document.querySelector('main pre');

button.addEventListener('click', function (e) {
    console.log('button is clicked');
    output.innerHTML += 'button is clicked<br>';
});

// trigger a click event on the button
button.dispatchEvent(new Event('click'));
