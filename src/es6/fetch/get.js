const url = 'https://reqres.in/api/users?page=2';

function getUsers() {
    fetch(url)
        .then((response) => {
            console.log('response', response);
            // the first then() always returns response.json()
            return response.json();
        })
        .then((users) => {
            console.log('users', users);
            let cards = '';
            // users.data[] contains 6 users
            users.data.forEach((user) => {
                cards += `
                    <div class="card">
                      <img src="${user.avatar}" class="section media">
                      <div class="section">
                        <p>${user.first_name} ${user.last_name}<br>
                        <a href="mailto:${user.email}">${user.email}</a>
                        </p>
                      </div>
                    </div>`;
            });
            document.getElementById('users').innerHTML = cards;
        })
        .catch((error) => console.log(error));
}
getUsers();
