let x = 5;

const delay = (ms = 1000) => {
    return new Promise((resolve, reject) => {
        if (isNaN(ms)) {
            reject(new Error('Delay only except milliseconds'));
        } else {
            setTimeout(() => resolve(`waited for ${ms} ms`), ms);
        }
    });
};

console.log(`x = ${x}`);
// step 1
console.warn('Give me two seconds, first empty my coffee and then I will multiply x by 2');
delay(2000)
    .then((data) => {
        console.log(`%c ${data}`, 'color: blue');
        x *= 2;
        console.log(`x * 2 = ${x}`);
    })
    // step 2
    .then(() => console.warn("Give me a sec, I'm coming down and add 6 to x"))
    .then(() => delay()) // 1000 is the default value
    .then((data) => {
        console.log(`%c ${data}`, 'color: blue');
        x += 6;
        console.log(`x + 6 = ${x}`);
    })
    .then(() => {
        // step 3
        x -= 1;
        console.log(`x - 1 = ${x}`);
        // step 4 (output x to DOM)
        document.querySelector('pre').innerText = `x = ${x}`;
    })
    .catch((error) => console.error(error));
