let i = 0;
// mouseover
$('#div1').mouseover(function () {
    i += 1;
    $('#over').text(`mouseover: ${i}`);
});

// mouseenter
let j = 0;
$('#div2').mouseenter(function () {
    j += 1;
    $('#enter').text(`mouseenter: ${j}`);
});
