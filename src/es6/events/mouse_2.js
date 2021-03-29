const btnHide = document.getElementById('hide');
const btnShow = document.getElementById('show');
const btnToggle = document.getElementById('toggle');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

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
