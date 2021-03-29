const original = document.getElementById('original').innerHTML;

// replace only the first word!
const replace1 = document.getElementById('replace1');
replace1.innerHTML = original.replace('Python', 'JavaScript').replace('programming', 'scripting');

// replace globally but case sensitive
const replace2 = document.getElementById('replace2');
replace2.innerHTML = original.replace(/Python/g, 'JavaScript').replace('programming', 'scripting');

// replace globally but case sensitive
const replace3 = document.getElementById('replace3');
replace3.innerHTML = original.replace(/PYTHON/gi, 'JavaScript').replace('programming', 'scripting');
