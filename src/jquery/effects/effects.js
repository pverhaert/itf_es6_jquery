$('#effects').change(function () {
    const select = $(this).find(':selected').text();
    eval(select);
});

$('#reset').click(() => $('figure').attr('style', ''));
