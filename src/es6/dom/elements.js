const h1 = document.querySelector('h1');
// remove h1
h1.remove();

const ul = document.querySelector('main ul');
// add HTML before ul
const bqBefore = document.createElement('blockquote');
bqBefore.innerHTML = 'Insert a blockquote <b>before</b> ul';
ul.before(bqBefore);

// add HTML after ul
const bqAfter = document.createElement('blockquote');
bqAfter.innerHTML = 'Insert a blockquote <b>after</b> ul';
ul.after(bqAfter);

// Add text inside ul
const liFirst = document.createElement('li');
liFirst.innerText = '*** first text item added';
ul.prepend(liFirst);

// Add HTML inside ul
const liLast = document.createElement('li');
liLast.innerHTML = '*** last <b>HTML item</b> added';
ul.append(liLast);
