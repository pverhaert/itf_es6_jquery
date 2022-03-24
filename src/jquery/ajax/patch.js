// update user object
const updateUser = {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane.doe@example.com',
    avatar: 'https://images.freecreatives.com/wp-content/uploads/2017/01/Person-Icons.jpg',
};
const url = 'https://reqres.in/api/users/7';

$.ajax(url, {
    url: url,
    type: 'PATCH',
    data: updateUser,
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
});
