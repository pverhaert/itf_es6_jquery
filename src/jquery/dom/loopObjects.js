// select all buttons inside #buttongroup
const buttons = $('#buttongroup button');
console.log('buttons', buttons);

// loop over the buttons inside jQuery object
buttons.each(function (index, button) {
    // log information about every button
    console.log('button', index, button);
});
