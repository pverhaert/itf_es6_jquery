const btnHide = document.getElementById('hide');
const btnShow = document.getElementById('show');
const btnToggle = document.getElementById('toggle');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

const styles1 = window.getComputedStyle(section1);
console.log('all css properties of #section1', styles1);
console.log('the height of #section1', styles1.height);
section1.style.maxHeight = styles1.height;

window.addEventListener('resize', (e) => {
    section1.style.maxHeight = ''; // delete the old max-height
    console.clear();
    console.log('the height of #section1', styles1.height);
    section1.style.maxHeight = styles1.height; // set the new max-height
});

btnHide.addEventListener('click', function (e) {
    section1.classList.add('hide');
});

btnShow.addEventListener('click', function (e) {
    section1.classList.remove('hide');
});

btnToggle.addEventListener('dblclick', function (e) {
    section1.classList.toggle('hide');
});

section2.addEventListener('mouseenter', function (e) {
    section1.classList.add('flip');
});

section2.addEventListener('mouseleave', function (e) {
    section1.classList.remove('flip');
});
