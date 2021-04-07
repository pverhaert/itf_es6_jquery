let x = 5;
console.log(`x = ${x}`);

// step 1
console.warn('Give me two seconds, first empty my coffee and then I will multiply x by 2');
setTimeout(() => {
    x *= 2;
    console.log(`x * 2 = ${x}`);
}, 2000);

// step 2
console.warn("Give me a sec, I'm coming down and add 6 to x");
setTimeout(() => {
    x += 6;
    console.log(`x + 6 = ${x}`);
}, 1000);

// step 3
x -= 1;
console.log(`x - 1 = ${x}`);

// step 4 (output x to DOM)
document.querySelector('pre').innerText = `x = ${x}`;
