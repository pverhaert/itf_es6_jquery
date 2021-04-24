// Hangman

//
// INITIALISATION
//
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const words = ['JAZZ', 'TEST', 'FIVE', 'VISUAL', 'WONDER', 'BEFORE', 'STUDENTS', 'BACHELOR', 'UMBRELLA'];
let lettersGuessed = 0;
let lettersWrong = 0;

//
// FUNCTIONS
//

const checkLetter = (letter) => {
    let success = false;
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
            success = true;
            const letterPlayDiv = document.querySelector(`#playDiv span:nth-child(${i + 1})`);
            letterPlayDiv.style.borderBottomColor = 'green';
            letterPlayDiv.innerText = letter;
            lettersGuessed++;
        }
    }

    // Letter is not present
    if (!success) {
        const image = document.querySelector('#scoreDiv img');
        image.src = `../../../assets/hangman/Hangman-${++lettersWrong}.png`;
    }
};

const checkStatus = () => {
    if (lettersGuessed === word.length) {
        //WIN
        disableButtons();
        updateFigcaption('YOU WON :-)');
    } else if (lettersWrong === 6) {
        //LOSS
        disableButtons();

        // Show not found letters in red
        for (let i = 0; i < word.length; i++) {
            const letterPlayDiv = document.querySelector(`#playDiv span:nth-child(${i + 1})`);
            if (letterPlayDiv.innerHTML === '&nbsp;') {
                letterPlayDiv.style.color = 'red';
                letterPlayDiv.style.borderBottomColor = 'red';
                letterPlayDiv.innerText = word.charAt(i);
            }
        }

        updateFigcaption('YOU LOST :-(');
    }
};

const disableButtons = () => {
    buttons.forEach(function (element) {
        element.setAttribute('disabled', 'true');
    });
};

const updateFigcaption = (text) => {
    const caption = document.querySelector('#scoreDiv figcaption');
    caption.append(text);
};

//
// CODE
//

// Make buttons with letters
const buttonDiv = document.getElementById('buttonDiv');
for (let i = 0; i < 26; i++) {
    buttonDiv.innerHTML += `<button class="tertiary">${alphabet.charAt(i)}</button>`;
}

// Determine random word
const length = words.length;
const rnd = Math.floor(Math.random() * length);
const word = words[rnd];

// Show number of letters on playDiv
const playDiv = document.getElementById('playDiv');
for (let i = 0; i < word.length; i++) {
    playDiv.innerHTML += `<span>&nbsp;</span>`;
}

// Handle click events/play game
const buttons = document.querySelectorAll('button');
buttons.forEach(function (element) {
    element.addEventListener('click', (e) => {
        // Disable button
        element.setAttribute('disabled', 'true');

        checkLetter(e.target.textContent);
        checkStatus();
    });
});
