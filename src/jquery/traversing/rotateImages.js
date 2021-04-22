$('#rotate').on('input', function () {
    const value = $(this).val();
    $('main img').even().css('transform', `rotate(${value}deg)`);
    $('main img').odd().css('transform', `rotate(${-value}deg)`);
});

$('#shadow')
    .on('input', function () {
        const value = $(this).val();
        $('main img').css('filter', 'none');
        $('main img')
            .eq(value - 1)
            .css('filter', `drop-shadow(0 0 20px rgba(0, 0, 0, 1)`);
    })
    .trigger('input');
