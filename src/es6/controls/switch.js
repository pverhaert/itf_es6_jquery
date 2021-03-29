const scoreInput = document.getElementById('score');
const result = document.getElementById('result');

scoreInput.addEventListener('change', function (e) {
    const score = scoreInput.value;
    let scoreMsg = null;
    let scoreClass = 'border-gray';

    // switch
    switch (score) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
            scoreMsg = `<b>${score}/20</b>: unfortunately, you failed the JavaScript course. Better luck next time!`;
            scoreClass = 'border-red';
            break;
        case '8':
        case '9':
            scoreMsg = `<b>${score}/20</b>: you failed the JavaScript course, but you may tolerate it!`;
            scoreClass = 'border-blue';
            break;
        default:
            scoreMsg = `<b>${score}/20</b>: you passed the JavaScript course. Congratulations!`;
            scoreClass = 'border-green';
    }

    // show result
    result.innerHTML = `<p>${scoreMsg}</p>`;
    result.className = '';
    result.classList.add(scoreClass);
});

// dispatch (trigger) change event
scoreInput.dispatchEvent(new Event('change'));
