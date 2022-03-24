const url = 'https://reqres.in/api/users/7';

$.ajax(url, {
    url: url,
    type: 'DELETE',
    success(response, textStatus, xhr) {
        console.log('response', response);
        console.log('xhr', xhr);
        console.log('xhr.status', xhr.status);
        if (xhr.status === 204) {
            $('#user').text('User successfully deleted');
        }
    },
    error(error) {
        console.error('error', error);
    },
    complete() {
        // this function is always run last
        console.log('Request completed with success or error callback arguments');
    },
});
