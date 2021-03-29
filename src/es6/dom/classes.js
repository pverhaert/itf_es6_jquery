const img1 = document.querySelector('#fotoFrame img:first-child');
console.log('classList', img1.classList);
console.log('className', img1.className);
// replace the original class(es) with new classes
img1.className = 'shadow grayscale';

const img2 = document.querySelector('#fotoFrame img:nth-child(2)');
img2.classList.remove('border', 'red');
img2.classList.add('sepia');

const img3 = document.querySelector('#fotoFrame  img:nth-child(3)');
img3.classList.toggle('green');

const img4 = document.querySelector('#fotoFrame  img:last-child');
img4.classList.replace('green', 'red');
console.log('contains', img4.classList.contains('red'));
