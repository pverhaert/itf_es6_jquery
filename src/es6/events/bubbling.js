const figure = document.querySelector('main figure');
const image = document.querySelector('main img');
const figcaption = document.querySelector('main figcaption');
const bold = document.querySelector('main figcaption b');

figure.addEventListener('click', function (e) {
    console.log('figure is clicked');
});

image.addEventListener('click', function (e) {
    // e.stopPropagation();
    console.log('image is clicked');
});

figcaption.addEventListener('click', function (e) {
    // e.stopPropagation();
    console.log('figcaption is clicked');
});

bold.addEventListener('click', function (e) {
    // e.stopPropagation();
    console.log('bold is clicked');
});
