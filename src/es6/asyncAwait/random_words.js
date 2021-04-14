const number = document.getElementById('number');
const dl = document.querySelector('dl');
const wordUrl = 'https://random-words-api.vercel.app/word';

async function fetchWord() {
    const response = await fetch(wordUrl);
    return response.json();
}

async function updatePage(words) {
    const responses = await Promise.all(words);
    responses.forEach((response, index) => {
        console.log(`response ${index}`, response);
        dl.innerHTML += `<dt>${response[0].word}</dt><dd>${response[0].definition}</dd>`;
    });
}

number.addEventListener('change', () => {
    console.clear();
    dl.innerHTML = '';
    const words = [];
    for (let i = 1; i <= number.value; i++) {
        words.push(fetchWord());
    }
    updatePage(words);
});

number.dispatchEvent(new Event('change'));
