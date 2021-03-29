const circle = document.getElementById('circle');
const keys = [
    { code: 'KeyR', color: 'indianred' },
    { code: 'KeyG', color: 'palegreen' },
    { code: 'KeyB', color: 'lightblue' },
    { code: 'KeyY', color: 'lightyellow' },
    { code: 'KeyP', color: 'mediumpurple' },
    { code: 'KeyO', color: 'orange' },
];

// add event listener on keydown
window.addEventListener('keydown', (e) => {
    // e.code returns the code of the key pressed
    const keyHitCode = e.code;
    console.log('keyHitCode', keyHitCode);
    const keyHit = keys.find((key) => key.code === keyHitCode);
    // if the keycode is in keys[], change the background color
    if (keyHit) {
        circle.style.backgroundColor = keyHit.color;
        circle.innerText = keyHit.color;
    }
});
