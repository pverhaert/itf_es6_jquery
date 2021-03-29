const scores = [
    { name: 'John', score: 15 },
    { name: 'Adam', score: 10 },
    { name: 'David', score: 8 },
    { name: 'Ziggy', score: 14 },
];

// sort array by score and transform each item
const transformedArray = scores
    .sort((a, b) => b.score - a.score)
    .map((item, index) => {
        return {
            id: index + 1,
            name: item.name.toUpperCase(),
            score: `${item.score * 5}%`,
            pass: item.score >= 10,
        };
    });

// log transformed array
console.table(transformedArray);

let output = '';
// loop over each item inside the transformed array
transformedArray.forEach((item) => {
    output += `<div class="${item.pass ? 'border-green' : 'border-red'}">
                <b>${item.id} - ${item.name}</b>: score ${item.score}
              </div>`;
});
document.getElementById('score').innerHTML = output;
