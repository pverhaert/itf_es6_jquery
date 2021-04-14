const h1 = $('h1');
// remove h1
h1.remove();

const ul = $('main ul');
// add HTML before ul
ul.before('<blockquote>Insert a blockquote <b>before</b> ul</blockquote>');

// add HTML after ul
ul.after('<blockquote>Insert a blockquote <b>after</b> ul</blockquote>');

// Add text inside ul
ul.prepend('<li>*** first text item added</li>');

// Add HTML inside ul
ul.append('<li>*** last <b>HTML item</b> added</li>');
