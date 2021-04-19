// click event DOESN'T WORK on newly created span tags
$('#section1 span').on('click', function (e) {
    $('#section1').append(`<span>&#128531;</span>`);
});

// click event works on newly created span tags
$('#section2').on('click', 'span', function (e) {
    $('#section2').append(`<span>&#128578;</span>`);
});
