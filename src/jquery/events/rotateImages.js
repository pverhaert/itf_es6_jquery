$('#rotate').on('input', function () {
    const value = $(this).val();
    // rotate all images
    $('main img').css('transform', `rotate(${value}deg)`);
});

$('#shadow')
    .on('input', function () {
        const value = $(this).val();
        // add a drop shadow to all images
        $('main img').css('filter', `drop-shadow(0 0 ${value}px rgba(0, 0, 0, .8)`);
    })
    .trigger('input'); // trigger the input event when (re)loading the page
