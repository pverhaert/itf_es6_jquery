const number = document.getElementById('number');
const dl = document.querySelector('dl');
const wordUrl = 'https://random-words-api.vercel.app/word';

number.addEventListener('change', () => {
    console.clear();
    dl.innerHTML = '';
    const words = [];
    for (let i = 1; i <= number.value; i++) {
        // push the JSON response from the fetch API to the words[] array
        // remember that the JSON response is also a promise!
        words.push(fetch(wordUrl).then((response) => response.json()));
    }

    Promise.all(words)
        .then((responses) => {
            // loop over all JSON responses once they have all been resolved
            responses.forEach((response, index) => {
                console.log(`response ${index}`, response);
                dl.innerHTML += `<dt>${response[0].word}</dt><dd>${response[0].definition}</dd>`;
            });
        })
        .catch((error) => console.error(error));
});

number.dispatchEvent(new Event('change'));
