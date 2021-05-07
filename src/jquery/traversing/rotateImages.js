// rotate images
$('#rotate').on('input', function () {
    const value = $(this).val();
    // even images: rotate with value
    $('main img').even().css('transform', `rotate(${value}deg)`);
    // odd images: rotate with -value
    $('main img').odd().css('transform', `rotate(${-value}deg)`);
});

// count the images and update the max value for the #shadow slider
// add a drop-shadow to the selected image
// trigger the input event on the #shadow slider
$('#shadow')
    .attr('max', $('main img').length)
    .on('input', function () {
        const value = $(this).val();
        // remove the drop-shadow from all images
        $('main img').css('filter', 'none');
        // add drop-shadow to the selected image
        // remark: eq(x) starts from index 0 while our slider starts from 1
        $('main img')
            .eq(value - 1)
            .css('filter', `drop-shadow(0 0 20px rgba(0, 0, 0, 1)`);
    })
    .trigger('input');
