// First image: add the title-attribute
const img1 = document.querySelector('main img:first-child');
img1.title = 'A new title for the first image';

// Second image: copy the alt-attribute to the title-attribute
const img2 = document.querySelector('main img:nth-child(2)');
img2.title = img2.alt;

// Third image: replace the image itself
document.querySelector('main img:nth-child(3)').src = 'https://picsum.photos/id/742/200/200';

// Last image: add multiple attributes
const img4 = document.querySelector('main img:last-child');
img4.setAttribute('title', 'A new title for the last image');
img4.setAttribute('width', '100px');
img4.setAttribute('height', '100px');
