// Accordion [jQuery]

const allDivs = $('.block div');

//all blocks closed, except first one
allDivs.hide();
$('.block:first-of-type div').show();

$('h3').click((e) => {
    const title = $(e.target).text().toLowerCase();
    const divWithTitle = $(`div[data-id=${title}]`);

    //only if clicked block is not open yet
    if (divWithTitle.css('display') !== 'block') {
        //all blocks closed
        $('.block div').slideUp();
        //clicked block open
        divWithTitle.slideDown();
    }
});
