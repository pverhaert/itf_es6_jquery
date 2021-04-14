const img = $('#img1');

// fill the figcaption with the data-* attributes
$('figcaption').html(`
  <b>Photographer</b>: ${img.data('photographer')}<br>
  <b>URL</b>: <a href="${img.data('unsplashUrl')}" target="_blank">${img.data('unsplashUrl')}</a>
`);

// add a new data-* attribute for later use...
img.attr('data-new-attribute', 'New attribute');
