const idMin = 151;
const idMax = 180;
let currentImg = 151;

function loop() {
    let nextImg = currentImg;
    // the next image is a random image between idMin and idMax but may not be the same as the current image
    do {
        nextImg = Math.floor(Math.random() * (idMax - idMin + 1) + idMin);
    } while (nextImg === currentImg);
    currentImg = nextImg;
    // figure slideUp() -> replace the image -> wait 500ms -> slideDown()
    $('figure').slideUp(1000, function () {
        $(this)
            .empty()
            .append(`<img src="https://picsum.photos/id/${currentImg}/600/400" alt="image ${currentImg}">`)
            .delay(500)
            .slideDown(1000);
    });
}

loop();
setInterval(loop, 4000);
