const url = 'https://my-json-server.typicode.com/pverhaert/itf-api/picsum';
const spinner = document.querySelector('.spinner');

function updatePage(images) {
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
}

async function fetchImages() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`An error has occurred: ${response.status}  ${response.statusText}`); // check for errors
        }
        const images = await response.json();
        updatePage(images);
    } catch (error) {
        console.error(error);
    }
    spinner.classList.add('hidden');
}
fetchImages();
