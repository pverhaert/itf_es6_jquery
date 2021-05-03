// jQuery
$('#buttongroup1 button').click((e) => {
    const val = $(e.target).text();
    $('pre:first-of-type').html(`You clicked on <b>${val}</b>`);
});

// vanilla JS
document.querySelectorAll('#buttongroup2 button').forEach(function (button) {
    button.addEventListener('click', (e) => {
        const val = e.target.textContent;
        document.querySelector('pre:first-of-type').innerHTML = `You clicked on <b>${val}</b>`;
    });
});
