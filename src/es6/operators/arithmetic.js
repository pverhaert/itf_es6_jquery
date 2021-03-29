let x = 10;
let y = 3;

const example = `Arithmetic operators:
**************************
x = ${x}
y = ${y}
x + y = ${x + y}
x - y = ${x - y}
x * y = ${x * y}
x / y = ${x / y}
x % y = ${x % y}
x ** y = ${x ** y}
`;

console.log(example);
document.querySelector('pre').innerHTML = example;

// post increment
const post = `Post increment (x++):
***************************************
x = ${x}       x starts at 10
x++ = ${x++}     x has not incremented yet!
x = ${x}
`;

console.log(post);
document.querySelector('pre:nth-of-type(2)').innerHTML = post;

// pre increment
const pre = `Pre increment (++y):
***************************************
y = ${y}       y starts at 3
++y = ${++y}     y has has already been incremented
y = ${y}
`;

console.log(pre);
document.querySelector('pre:nth-of-type(3)').innerHTML = pre;
