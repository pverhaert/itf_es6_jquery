$('#effects').change(function () {
    const select = $(this).find(':selected').text();
    eval(select);
    // if (select.includes('toggle')) {
    //     $(this).val(-1);
    // }
});

$('#reset').click(() => $('figure').attr('style', ''));
