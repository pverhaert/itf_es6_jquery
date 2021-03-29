// update user object
const updateUser = {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane.doe@example.com',
    avatar: 'https://images.freecreatives.com/wp-content/uploads/2017/01/Person-Icons.jpg',
};
const url = 'https://reqres.in/api/users/7';
// options for the fetch() methode
const options = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateUser),
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
