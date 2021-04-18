$('section').hover(
    function (e) {
        $(this).addClass('green');
        $('#info').text(`event.type: ${e.type}`);
    },
    function (e) {
        $(this).removeClass('green');
        $('#info').text(`event.type: ${e.type}`);
    }
);
