const x = 6;
const y = 4;

const example = `Logical operators:
*****************************
(x < 8 && y > 3)    => ${x < 8 && y > 3}
(x < 8 && y > 6)    => ${x < 8 && y > 6}
(x < 8 || y > 3)    => ${x < 8 || y > 3}
!(x < 8 || y > 6)   => ${!(x < 8 || y > 6)}
`;

console.log(example);
document.querySelector('pre').innerHTML = example;
