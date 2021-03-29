// select all buttons inside #buttongroup
const buttons = document.querySelectorAll('#buttongroup button');

// loop over the buttons inside the NodeList
buttons.forEach(function (button) {
    // add event on every button
    button.addEventListener('click', function (e) {
        // log the whole event
        console.log('event', e);
        // get the clicked button via the event
        console.log('e.target', e.target);
        // or get the clicked button via the this keyword
        console.log('this', this);
    });
});
