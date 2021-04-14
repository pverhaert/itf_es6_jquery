// color day of the week
const dayOfWeek = new Date().getDay();
$(`tbody tr:nth-child(${dayOfWeek + 1})`).css('background-color', 'greenYellow');

// add a data-label to every td
$('tbody tr td:nth-of-type(2)').attr('data-label', 'Morning');
$('tbody tr td:nth-of-type(3)').attr('data-label', 'Afternoon');
$('tbody tr td:last-of-type').attr('data-label', 'Evening');
