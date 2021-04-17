const btnHide = document.getElementById('hide');
const btnShow = document.getElementById('show');
const btnToggle = document.getElementById('toggle');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

// hide #section1 with inline style: display:none
btnHide.addEventListener('click', function (e) {
    section1.style.display = 'none';
});

// show #section1 with inline style: display:block
btnShow.addEventListener('click', function (e) {
    section1.style.display = 'block';
});

// toggle #section1 between display:none and display:block
btnToggle.addEventListener('dblclick', function (e) {
    if (section1.style.display === 'none') {
        section1.style.display = 'block';
    } else {
        section1.style.display = 'none';
    }
});

// when entering #section2, rotate #section1 180 degrees
section2.addEventListener('mouseenter', function (e) {
    section1.style.transform = 'rotateX(180deg)';
});

// when leaving #section2, rotate #section1 back to 0 degrees
section2.addEventListener('mouseleave', function (e) {
    section1.style.transform = 'rotateX(0)';
});
