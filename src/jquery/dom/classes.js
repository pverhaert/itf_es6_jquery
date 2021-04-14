// remove the original class(es) and add new classes
$('#fotoFrame img:first-child').removeClass().addClass('shadow grayscale');
$('#fotoFrame img:nth-child(2)').removeClass().addClass('sepia');

// add class 'green'
$('#fotoFrame img:nth-child(3)').toggleClass('green');

const img4 = $('#fotoFrame img:last-child');
// replace class 'green' with class 'red'
img4.removeClass('green').addClass('red');
// or img4.toggleClass(['green', 'red']);

console.log('contains', img4.hasClass('red'));
