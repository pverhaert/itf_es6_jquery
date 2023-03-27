const url = 'https://reqres.in/api/login';

const pars = {
    // page: 2,
    email: 'john@doe',
};
// e.responseJSON.error
$.post(url, pars, 'json')
    .done(function (users) {
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
        $('#users').html(cards);
    })
    .then(function (z) {
        console.log('z', z);
        return 'vvvvv';
    })
    .then(function (v) {
        console.log('v', v);
        return 'allll';
    })
    .catch(function (e) {
        console.log('catch', e);
        console.log('catch', e.responseJSON.error);
        return e.responseJSON.error;
    })
    .fail(function (e) {
        console.log('fail', e);
        console.log('fail', e.responseJSON.error);
    })
    .always(function (e) {
        console.log('always', e);
    });

/*function getUsers() {
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
getUsers();*/
