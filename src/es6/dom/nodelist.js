// select all buttons inside #buttongroup
const buttons = document.querySelectorAll('#buttongroup button');
console.log('buttons', buttons);

// loop over the buttons inside the NodeList
buttons.forEach(function (button, index) {
    // log information about every button
    console.log('button', index, button);
});
