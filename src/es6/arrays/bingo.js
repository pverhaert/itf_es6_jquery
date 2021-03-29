const numbers = [];
let output = '';

// fill numbers[] with numbers from 1 to 75
for (let i = 0; i < 75; i++) {
    numbers.push(i + 1);
}

// shuffle numbers[]
numbers.sort(() => 0.5 - Math.random());
console.log(numbers);

// add event listener to #dropBalldropCoin
document.getElementById('dropCoin').addEventListener('click', (e) => {
    // get first number from numbers[] ...
    output += `<div>${numbers[0]}</div>`;
    // ... and remove this number from numbers[]
    numbers.shift();
    // update #bingo
    document.getElementById('bingo').innerHTML = output;
    // disable button if numbers[] is empty
    if (numbers.length === 0) e.target.setAttribute('disabled', true);
});
