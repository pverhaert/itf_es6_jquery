const x1 = 10;
const x2 = '10';
const y = 5;

const example = `Comparison operators:
----------------------------
x1 == x2    => ${x1 == x2}
x1 === x2   => ${x1 === x2}
x1 !== y    => ${x1 !== y}
x1 < y      => ${x1 < y}
x1 > y      => ${x1 > y}`;

console.log(example);
document.querySelector('pre').innerHTML = example;
