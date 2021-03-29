const p = document.getElementById('quote');
console.log('p.textContent:', p.textContent); // get ALL the text inside p
console.log('p.innerText:', p.innerText); // get only the VISIBLE text inside p
console.log('p.innerHTML:', p.innerHTML); // get the HTML content inside p

const li1 = document.querySelector('main li:first-child');
const li2 = document.querySelector('main li:nth-child(2)');
const li3 = document.querySelector('main li:last-child');

li1.textContent = 'New first item'; // replace the content of the first item with new TEXT
li2.textContent = 'New second item with <b>bold text</b>?'; // replace the content of the second item with TEXT
li3.innerHTML = 'New last item with <b>bold text</b>!'; // replace the content of the last item with HTML
