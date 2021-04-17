/*
let color = 'red';
console.log('color', color);
debugger;
color = 'green';
console.log('color', color);
*/

// Most used console outputs
console.log('This is a (gray) common log message');
console.warn('This is a (orange) warning message');
console.error('This is a (red) error message');
// Use custom colors
console.log('%c This is a message on a "lime" background', 'background: lime');
console.log('%c This is a "purple" message ', 'color: purple');

// Log the value of a variable
const name = 'John';
const age = 35;
// Bad
console.log(name);
console.log(age);
// Good
console.log('name', name);
console.log('age', age);
console.log('name', name, 'age', age);
console.log(`My name is ${name} and I am ${age} years old`);

// Log objects as a table
const fruits = ['kiwi', 'pineapple', 'mango', 'apple'];
console.log('fruits', fruits);
console.table(fruits);

const users = [
    { name: 'John', surname: 'Doe', age: 23 },
    { name: 'Jane', surname: 'Doe', age: 41 },
];
console.log('users', users);
console.table(users);
console.table(users, ['name', 'age']);
