let x = 5;
console.log(`x = ${x}`);

// step 1 (x = x * 2)
x *= 2;
console.log(`x * 2 = ${x}`);

// step 2 (x = x +6)
x += 6;
console.log(`x + 6 = ${x}`);

// step 3 (x = x - 1)
x -= 1;
console.log(`x - 1 = ${x}`);

// step 4 (output x to DOM)
document.querySelector('pre').innerText = `x = ${x}`;
