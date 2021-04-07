const delay = (ms = 1000) => new Promise((resolve) => setTimeout(() => resolve(`waited for ${ms} ms`), ms));

// delay in parallel
const runParallel = [delay(2000), delay(3000), delay()];
Promise.all(runParallel)
    .then((values) => {
        console.log(values);
        values.forEach((value) => console.log(value));
    })
    .catch((error) => console.error(error));

// delay in series (one after another)
/*
delay(2000)
    .then((data) => console.log(data))
    .then(() => delay(3000))
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
*/
