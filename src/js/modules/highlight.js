function Highlight() {
    console.log('myNumbers, pets');
    // Copy script#highlight
    const highlight = document.getElementById('highlight');
    // console.log(highlight.innerText);
    const main = document.querySelector('main');
    if (highlight)
        main.insertAdjacentHTML('beforeend', `<pre><code class="language-js">${highlight.textContent}</code></pre>`);
}

// Highlight();

export { Highlight as default };

function unused() {
    // This function is used nowhere
}
