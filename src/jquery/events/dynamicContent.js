// click event DON'T WORK on newly created span tags
$('#section1 span').on('click', function (e) {
    const items = $('#section1 span').length;
    $('#section1').append(`<span>1${items}</span>`);
});

// click event works on newly created span tags
$('#section2').on('click', 'span', function (e) {
    const items = $('#section2 span').length;
    $('#section2').append(`<span>2${items}</span>`);
});
