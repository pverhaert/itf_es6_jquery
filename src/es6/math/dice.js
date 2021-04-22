const diceButton = document.querySelector('main button');

diceButton.addEventListener('click', function (e) {
    let dices = '';
    let caption = '';
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        const roll = Math.floor(Math.random() * 6 + 1);
        sum += roll;
        caption += `${roll} + `;
        dices += `<img src="/assets/dices/dice${roll}.svg" alt="dice ${roll}">`;
    }
    // remove last 2 characters from the string and add the sum
    caption = `${caption.slice(0, -2)} = ${sum}`;
    document.querySelector('main figure').innerHTML = `${dices}<figcaption><h4>${caption}</h4></figcaption>`;
});

// dispatch (trigger) click event
diceButton.dispatchEvent(new Event('click'));
