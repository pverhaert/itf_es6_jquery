const original = document.getElementById('original').innerHTML;

// Replace only the first word (=default) - case sensitive (=default)
const replace1 = document.getElementById('replace1');
replace1.innerHTML = original.replace('Python', 'JavaScript').replace('programming', 'scripting');

// Replace only the first word (=default) - case insensitive
const replace2 = document.getElementById('replace2');
replace2.innerHTML = original.replace(/Python/i, 'JavaScript').replace(/programming/i, 'scripting');

// Replace globally - case sensitive (=default)
const replace3 = document.getElementById('replace3');
replace3.innerHTML = original.replace(/Python/g, 'JavaScript').replace(/programming/g, 'scripting');

// Replace globally - case insensitive
const replace4 = document.getElementById('replace4');
replace4.innerHTML = original.replace(/Python/gi, 'JavaScript').replace(/programming/gi, 'scripting');
