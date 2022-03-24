const url = 'https://reqres.in/api/users';

const pars = {
    page: 2,
};

// version 1: $.getJson() with default callback function
$.getJSON(url, pars, function (users) {
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
    .catch(function (error) {
        console.error('API not resolved!', error);
    })
    .always(function () {
        // this function is always run last
        console.log('Request completed with success or error callback arguments');
    });

// version 2: $.getJson() without default callback function, but with done()
/*$.getJSON(url, pars)
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
    .catch(function (error) {
        console.error('API not resolved!', error);
    })
    .always(function () {
        // this function is always run last
        console.log('Request completed with success or error callback arguments');
    });*/

// version 3: $.getJson() without default callback function, but with then()
/*
$.getJSON(url, pars)
    .then(
        function (users) {
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
        },
        function (error) {
            console.error('API not resolved!', error);
        }
    )
    .always(function () {
        // this function is always run last
        console.log('Request completed with success or error callback arguments');
    });*/

// version 4: $.get()
/*
$.get(url, pars, 'json')
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
    .catch(function (error) {
        console.error('API not resolved!', error);
    })
    .always(function () {
        // this function is always run last
        console.log('Request completed with success or error callback arguments');
    });*/

// version 5: $.ajax()
/*$.ajax(url, {
    url: url,
    type : 'GET',     // you may delete this line because GET is the default value
    data: pars,
    dataType: 'json',
    success(users) {
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
    },
    error(error) {
        console.error('API not resolved!', error);
    },
    complete() {
        // this function is always run last
        console.log('Request completed with success or error callback arguments');
    },
});*/
