const p = $('#quote');
console.log('p.text():', p.text()); // get ALL the text inside p
console.log('p.html():', p.html()); // get the HTML content inside p

$('main li:first-child').text('New first item'); // replace the content of the first item with new TEXT
$('main li:nth-child(2)').text('New second item with <b>bold text</b>?'); // replace the content of the second item with TEXT
$('main li:last-child').html('New last item with <b>bold text</b>!'); // replace the content of the last item with HTML
// $('main li').text('Same text for all list items');
