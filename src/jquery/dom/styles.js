const img1 = $('#img1');
console.log('padding', img1.css('padding'));
console.log('original height', img1.height());
// img1.css('border', 'solid 3px #50a551').css('background-color', 'rgba(80, 165, 81, 0.1)');
img1.css({
    border: 'solid 3px #50a551',
    backgroundColor: 'rgba(80, 165, 81, 0.1)',
});
console.log('height after changing the style', img1.height());
console.log('innerHeight', img1.innerHeight());
console.log('outerHeight', img1.outerHeight());
