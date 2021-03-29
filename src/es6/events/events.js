const name = document.getElementById('name');
const button = document.querySelector('button');
const anker = document.querySelector('a');
const p = document.querySelectorAll('p');

button.addEventListener('click', (ev) => {
    console.log('button target', ev.target);
    console.log('button target', ev.target.type);
});
