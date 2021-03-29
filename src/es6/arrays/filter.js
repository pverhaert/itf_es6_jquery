const scores = [
    { name: 'John', score: 15 },
    { name: 'Adam', score: 5 },
    { name: 'David', score: 8 },
    { name: 'Ziggy', score: 14 },
];

// sort scores[] by score
scores.sort((a, b) => b.score - a.score);

// filter scores >= 10
const passedArray = scores.filter((item) => item.score >= 10);
// filter scores < 10
const failedArray = scores.filter((item) => item.score < 10);

// log passedArray[] and failedArray[]
console.table(passedArray);
console.table(failedArray);

// loop over passedArray[]
let output = '';
passedArray.forEach((item) => {
    output += `<div class="border-green"><b>${item.name}</b>: score ${item.score * 5}%</div>`;
});
document.getElementById('pass').innerHTML = output;

// loop over failedArray[]
output = '';
failedArray.forEach((item) => {
    output += `<div class="border-red"><b>${item.name}</b>: score ${item.score * 5}%</div>`;
});
document.getElementById('fail').innerHTML = output;
