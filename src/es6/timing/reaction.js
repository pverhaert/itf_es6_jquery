// max left position of #block: screen width - width of the block
let maxLeftPosition = window.innerWidth - 50;
let maxTopPosition = window.innerHeight - 50;

// start the timer
let timer = new Date();

const block = document.getElementById('block');

block.addEventListener('click', function () {
    // calculate the time between block shown and block clicked
    document.getElementById('reaction').textContent = `${(new Date() - timer) / 1000} sec`;
    // hide the block
    block.style.display = 'none';
    // move the block to a random position
    block.style.left = `${maxLeftPosition * Math.random()}px`;
    block.style.top = `${maxTopPosition * Math.random()}px`;
    // wait between 2 and 5 seconds to show the block at the new position
    const waitTime = (Math.random() * 3 + 2) * 1000;
    setTimeout(function () {
        // show the block and restart the timer
        block.style.display = 'block';
        // reset the start time
        timer = new Date();
    }, waitTime);
});

// add event listener on resizing the screen
window.addEventListener('resize', function (e) {
    // recalculate maxLeftPosition and maxTopPosition
    maxLeftPosition = window.innerWidth - 50;
    maxTopPosition = window.innerHeight - 50;
    console.clear();
    console.log('maxLeftPosition', maxLeftPosition, 'maxTopPosition', maxTopPosition);
    // move the block to the top left corner and restart the timer
    block.style.display = 'block';
    block.style.left = '0px';
    block.style.top = '0px';
    timer = new Date();
});
