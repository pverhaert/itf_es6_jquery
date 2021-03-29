let x = 10;
const y = 2;
const z = 3;

let example = `Assignment operators:
----------------------------\n`;
x += y;
example += `x += y => (10 + 2) => x = ${x}\n`;
x -= z;
example += `x -= z => (12 - 3) => x = ${x}\n`;
x *= z;
example += `x *= z => (9 * 3)  => x = ${x}\n`;
x /= z;
example += `x /= z => (27 / 3) => x = ${x}\n`;
x %= y;
example += `x %= y => (9 % 2)  => x = ${x}`;

console.log(example);
document.querySelector('pre').innerHTML = example;
