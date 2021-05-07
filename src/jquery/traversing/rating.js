// click on a star
$('figcaption span').click(function () {
    // remove the class .rating on all it's siblings
    $(this).siblings().removeClass('rated');
    // add the class .rating to all the previous siblings and on itself
    $(this).prevAll().addBack().addClass('rated');
    // move up the DOM to the closest figure tag and from there, move down the DOM and find the image tag
    // add the class .border to the image
    $(this).closest('figure').find('img').addClass('border');
    countStars();
});

// click on an image
$('figure img').click(function () {
    // move up the DOM to the closest figure tag and from there, move down the DOM and find all span tags
    // remove the class .rated from all the span tags
    $(this).closest('figure').find('span').removeClass('rated');
    // remove the class .border from the image
    $(this).removeClass('border');
    countStars();
});

// clear the total score
$('#clearScore').click(function () {
    // remove the class .rated from all the spans
    $('span').removeClass('rated');
    // remove the class .border on all the images
    $('img').removeClass('border');
    // remark: the two lines above can be writhe in just one line: $('*').removeClass('border rated');
    countStars();
});

function countStars() {
    // Count all stars witch has the class .rating
    const total = $('.rated').length;
    $('#counter').text(total);
    // disable the button if total is 0
    $('#clearScore').prop('disabled', total === 0);
}
