const bing = document.getElementById('bing');
const searchForm = document.getElementById('searchForm');
const q = document.getElementById('q');
const output = document.querySelector('main pre');

bing.addEventListener('click', function (e) {
    e.preventDefault(); // prevent to open the default URL
    output.innerText = `Sorry I'm sending you to google.com`;
    window.open('https://google.com', '_blank');
});

searchForm.addEventListener('submit', function (e) {
    if (q.value.length < 3) {
        e.preventDefault(); // prevent submitting the form if length < 3 characters
        output.innerHTML = `Search term must contain <b>at least 3</b> characters`;
    }
});
