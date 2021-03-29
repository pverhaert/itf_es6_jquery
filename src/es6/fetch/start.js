const url = 'https://my-json-server.typicode.com/pverhaert/itf-api/picsum';
const spinner = document.querySelector('.spinner');

async function fetchImages() {
    // fetch API

    // check for errors

    // extract the data from the response

    // hide spinner

    // return an array of images
    return [];
}

fetchImages()
    .then((images) => {
        const parent = document.getElementById('imgContainer');
        // loop over each image
        images.forEach((image) => {
            // construct a card
            const card = ``;
            // add card to #imgContainer
            parent.insertAdjacentHTML('beforeend', card);
        });
    })
    .catch((err) => console.log(err));
