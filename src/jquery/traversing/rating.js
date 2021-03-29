$('figcaption span').click(function () {
    $(this).siblings().removeClass('rated');
    $(this).prevAll().addBack().addClass('rated');
    $(this).closest('figure').find('img').addClass('border');
    countStars();
});

$('figure img').click(function () {
    $(this).closest('figure').find('span').removeClass('rated');
    $(this).removeClass('border');
    countStars();
});

$('#clearScore').click(function () {
    $('span').removeClass('rated');
    $('img').removeClass('border');
    // $('*').removeClass('border rated');
    countStars();
});

function countStars() {
    const total = $('.rated').length;
    $('#counter').text(total);
    $('#clearScore').prop('disabled', !(total > 0));
}
