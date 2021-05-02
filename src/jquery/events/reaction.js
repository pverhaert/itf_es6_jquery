const block = $('#block');

// max left position of #block: screen width - width of the block
let maxLeftPosition = window.innerWidth - block.width();
let maxTopPosition = window.innerHeight - block.height();

// start the timer
let timer = new Date();

block.click((e) => {
    // calculate the time between block shown and block clicked
    $('#reaction').text(`${(new Date() - timer) / 1000} sec`);
    // hide the block
    block.hide();
    // move the block to a random position
    const blockX = `${maxLeftPosition * Math.random()}px`;
    const blockY = `${maxTopPosition * Math.random()}px`;
    block.css({ top: blockY, left: blockX });
    // wait between 2 and 5 seconds to show the block at the new position
    const waitTime = (Math.random() * 3 + 2) * 1000;
    setTimeout(() => {
        // show the block and restart the timer
        block.show();
        // reset the start time
        timer = new Date();
    }, waitTime);
});

// add event listener on resizing the screen
$(window).resize(function (e) {
    // recalculate maxLeftPosition and maxTopPosition
    maxLeftPosition = window.innerWidth - block.width();
    maxTopPosition = window.innerHeight - block.height();
    console.clear();
    console.log('maxLeftPosition', maxLeftPosition, 'maxTopPosition', maxTopPosition);
    // move the block to the top left corner and restart the timer
    block.show();
    block.css({ top: 0, left: 0 });
    timer = new Date();
});
