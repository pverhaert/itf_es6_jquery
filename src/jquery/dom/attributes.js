// First image: add the title-attribute
$('main img:first-child').attr('title', 'A new title for the first image');

// Second image: copy the alt-attribute to the title-attribute
const img2 = $('main img:nth-child(2)');
img2.attr('title', img2.attr('alt'));

// Third image: replace the image itself
$('main img:nth-child(3)').attr('src', 'https://picsum.photos/id/742/200/200');

// Last image: add multiple attributes
$('main img:last-child').attr({
    title: 'A new title for the last image',
    width: '100px',
    height: '100px',
});
