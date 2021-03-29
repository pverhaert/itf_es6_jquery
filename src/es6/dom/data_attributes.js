const img = document.getElementById('img1');
console.log(img.dataset);

// fill the figcaption with the data-* attributes
const caption = document.querySelector('figcaption');
caption.innerHTML = `
  <b>Photographer</b>: ${img.dataset.photographer}<br>
  <b>URL</b>: <a href="${img.dataset.unsplashUrl}" target="_blank">${img.dataset.unsplashUrl}</a>
`;

// add a new data-* attribute for later use...
img.dataset.newAttribute = 'New attribute';
