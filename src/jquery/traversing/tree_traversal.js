$('#travers')
    .change(function () {
        const select = $(this).find(':selected').text();
        $('*').removeClass('selected');
        eval(select).addClass('selected');
    })
    .change();
