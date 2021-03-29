const username = document.getElementById('username');
const password = document.getElementById('password');

document.getElementById('loginform').addEventListener('submit', () => {
    // add username and password to the 'logindata' object
    const logindata = {
        username: username.value,
        password: password.value,
    };
    // save 'logindata' to local storage
    localStorage.setItem('logindata', JSON.stringify(logindata));
});

window.addEventListener('load', () => {
    // get 'logindata' from local storage when the page is loaded
    // or make an empty object if the key don't exists in local storage
    const logindata = JSON.parse(localStorage.getItem('logindata')) || {};
    // get username and password and add it the the form
    // set te value to an empty string if the key does not exist in the object
    username.value = logindata.username || '';
    password.value = logindata.password || '';
});
