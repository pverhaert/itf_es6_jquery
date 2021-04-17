const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const alert = document.getElementById('alert');

form.addEventListener('submit', function (e) {
    // stop submitting the form and reset layout
    e.preventDefault();
    alert.style.display = 'none';
    let errorMsg = '';

    // validate name
    const nameValue = name.value.trim();
    if (nameValue === '' || nameValue.length < 3) {
        errorMsg += `<li><b>Name</b> is required and must contain at least 3 characters</li>`;
        name.classList.remove('is-valid');
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }

    // validate email
    const emailValue = email.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
    if (emailValue === '' || emailValue.match(emailPattern) === null) {
        errorMsg += `<li><b>Email</b> is required and must be a valid email address</li>`;
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }

    // no errors: submit the form, else show error messages
    if (errorMsg.length === 0) {
        form.submit();
    } else {
        alert.innerHTML = `<ul>${errorMsg}</ul>`;
        alert.style.display = 'block';
    }
});
