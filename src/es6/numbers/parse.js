document.querySelectorAll('[type=number]').forEach(function (input) {
    input.addEventListener('blur', function (e) {
        const nr1 = document.getElementById('nr1').value;
        const nr2 = document.getElementById('nr2').value;
        const sum = nr1 + nr2;
        document.getElementById('sum').textContent = sum;
    });
});

// dispatch (trigger) change event
document.getElementById('nr1').dispatchEvent(new Event('blur'));
