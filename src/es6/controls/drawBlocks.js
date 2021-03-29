const blockInput = document.getElementById('block');

blockInput.addEventListener('change', function (e) {
    const blocks = blockInput.value;

    // for
    let draw = '';
    for (let i = 0; i < blocks; i++) {
        draw += `<span>${i + 1}</span>`;
    }
    document.querySelector('main section:first-of-type div').innerHTML = draw;

    // while
    draw = '';
    let i = 0;
    while (i < blocks) {
        draw += `<span>${i + 1}</span>`;
        i++;
    }
    document.querySelector('main section:nth-of-type(2) div').innerHTML = draw;

    // do while
    draw = '';
    i = 0;
    do {
        draw += `<span>${i + 1}</span>`;
        i++;
    } while (i < blocks);
    document.querySelector('main section:last-of-type div').innerHTML = draw;
});

// dispatch (trigger) change event
blockInput.dispatchEvent(new Event('change'));
