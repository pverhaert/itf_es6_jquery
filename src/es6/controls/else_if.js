const scoreInput = document.getElementById('score');
const result = document.getElementById('result');

scoreInput.addEventListener('blur', function (e) {
    // ternary operator
    const score = scoreInput.value === '' ? null : scoreInput.value;
    let scoreMsg = null;
    let scoreClass = 'border-gray';

    // if - else if
    if (score === null) {
        scoreMsg = '-- NO SCORE AVAILABLE --';
    } else if (score >= 10) {
        scoreMsg = `<b>${score}/20</b>: you passed the JavaScript course. Congratulations!`;
        scoreClass = 'border-green';
    } else if (score >= 8) {
        scoreMsg = `<b>${score}/20</b>: you failed the JavaScript course, but you may tolerate it!`;
        scoreClass = 'border-blue';
    } else {
        scoreMsg = `<b>${score}/20</b>: unfortunately, you failed the JavaScript course. Better luck next time!`;
        scoreClass = 'border-red';
    }

    // show result
    result.innerHTML = `<p>${scoreMsg}</p>`;
    result.className = '';
    result.classList.add(scoreClass);
});

// dispatch (trigger) blur event
scoreInput.dispatchEvent(new Event('blur'));
