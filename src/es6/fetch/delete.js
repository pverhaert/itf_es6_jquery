const url = 'https://reqres.in/api/users/7';
// options for the fetch() methode
const options = {
    method: 'DELETE',
};

function deleteUser() {
    fetch(url, options)
        .then((response) => {
            console.log('response', response);
            if (response.status === 204) {
                document.getElementById('user').innerHTML = 'User successfully deleted';
            }
        })
        .catch((error) => console.log(error));
}
deleteUser();
