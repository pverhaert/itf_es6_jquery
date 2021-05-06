const img = $('#img1');

// fill the figcaption with the data-* attributes
$('figcaption').html(`
  <b>Photographer</b>: ${img.data('photographer')}<br>
  <b>URL</b>: <a href="${img.data('unsplash-url')}" target="_blank">${img.data('unsplash-url')}</a>
`);

// add a new data-* attribute for later use...
img.attr('data-new-attribute', 'New attribute');
