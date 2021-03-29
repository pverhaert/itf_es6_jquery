const url = 'https://jsonplaceholder.typicode.com/users/1';
// const url = 'https://jsonplaceholder.typicode.com/users/1111111';
// const url = 'https://nonexistingurl.com/users/1';

function getUser() {
    fetch(url)
        .then((response) => {
            console.log('response', response);
            if (!response.ok) {
                if (response.status === 404) throw Error('The requested user was not found');
                throw Error('Something went wrong with your request');
            }
            return response.json();
        })
        .then((user) => {
            console.log('User found', user);
        })
        .catch((error) => {
            console.error(error);
        });
}
getUser();
