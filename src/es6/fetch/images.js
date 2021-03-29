const url = 'https://my-json-server.typicode.com/pverhaert/itf-api/picsum';
const spinner = document.querySelector('.spinner');

function fetchImages() {
    fetch(url)
        .then((response) => {
            // check for errors
            if (!response.ok) {
                throw new Error(`An error has occurred: ${response.status}  ${response.statusText}`); // check for errors
            }
            // return JSON data
            return response.json();
        })
        .then((images) => {
            // add a card for every image in the array images[]
            images.forEach((image) => {
                document.getElementById('imgContainer').innerHTML += `
                    <div class="card">
                      <img src="${image.url}/600/400" class="section media" alt="Image by ${image.author}">
                      <div class="section">
                        Image &copy; <a href="https://unsplash.com/photos/${image.meta.unsplash}" target="_blank">${image.author}</a>
                        <br>
                        Category: ${image.category}
                      </div>
                    </div>
                `;
            });
        })
        .then(() => {
            // hide the spinner
            spinner.classList.add('hidden');
        })
        .catch((error) => {
            spinner.classList.add('hidden');
            console.log(error);
        });
}
fetchImages();
