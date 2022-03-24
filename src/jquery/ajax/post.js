// new user object
const newUser = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.freecreatives.com/wp-content/uploads/2017/01/Person-Icons.jpg',
};
const url = 'https://reqres.in/api/users';

// version 1: $.post()
$.post(url, newUser, 'json')
    .then((user) => {
        console.log('user', user);
        $('#user').html(`
              <div class="card">
                <img src="${user.avatar}" class="section media">
                <div class="section">
                    <p>${user.first_name} ${user.last_name}<br>
                    <a href="mailto:${user.email}">${user.email}</a>
                    </p>
                </div>
            </div>`);
    })
    .catch(function (error) {
        console.error('error', error);
    })
    .always(function () {
        console.log('Request completed with success or error callback arguments');
    });

// version 2: $.ajax()
/*$.ajax(url, {
    url: url,
    type: 'POST',
    data: newUser,
    dataType: 'json',
    success(user) {
        console.log('user', user);
        $('#user').html(`
              <div class="card">
                <img src="${user.avatar}" class="section media">
                <div class="section">
                    <p>${user.first_name} ${user.last_name}<br>
                    <a href="mailto:${user.email}">${user.email}</a>
                    </p>
                </div>
            </div>`);
    },
    error(error) {
        console.error('error', error);
    },
    complete() {
        // this function is always run last
        console.log('Request completed with success or error callback arguments');
    },
});*/
