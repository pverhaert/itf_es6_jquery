const img1 = document.querySelector('#img1');
console.log('style', img1.style);
console.log('padding', img1.style.padding);
img1.style.border = 'solid 3px #50a551';
// use camelCase backgroundColor instead of background-color
img1.style.backgroundColor = 'rgba(80, 165, 81, 0.1)';
