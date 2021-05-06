// Oef [jQuery]

const max = 100; //1084
for (let i = 1; i <= max; i++) {
    $('#gallery').append(`
      <div>
        <span>${i}</span>
        <img src="https://picsum.photos/id/${i}/200/200" alt="${i}">
      </div>`);
}

$('img').css('opacity', '0.25');

//ERROR event -> img - src bestaat niet (bijv.id = 86);
$('img').on('error', function () {
    $(this).css('opacity', '0');
    $(this).prev().css('color', 'red'); //use TRAVERSING to
});

$('img').hover(
    function () {
        $(this).fadeTo(500, 1);
    },
    function () {
        $(this).fadeTo(500, 0.25);
    }
);
