// new user object
const newUser = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.freecreatives.com/wp-content/uploads/2017/01/Person-Icons.jpg',
};
const url = 'https://reqres.in/api/users';
// options for the fetch() methode
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
};

function postUser() {
    fetch(url, options)
        .then((response) => response.json())
        .then((user) => {
            console.log('user', user);
            document.getElementById('user').innerHTML = `
              <div class="card">
                <img src="${user.avatar}" class="section media">
                <div class="section">
                    <p>${user.first_name} ${user.last_name}<br>
                    <a href="mailto:${user.email}">${user.email}</a>
                    </p>
                </div>
            </div>`;
        })
        .catch((error) => console.log(error));
}
postUser();
