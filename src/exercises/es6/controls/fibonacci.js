// Fibonacci
const list = document.querySelector('ul:first-of-type');
const end = 50;
let previousNumber1 = 0;
let previousNumber2 = 1;
list.innerHTML += '<li>0</li><li>1</li>';

for (let i = 1; i < end; i++) {
    const addition = previousNumber1 + previousNumber2;
    previousNumber1 = previousNumber2;
    previousNumber2 = addition;
    list.innerHTML += `<li>${addition}</li>`;
}
