const url = 'https://my-json-server.typicode.com/pverhaert/itf-api/picsum';

$.getJSON(url)
    .done((images) => {
        images.forEach((image) => {
            $('#imgContainer').append(`
                    <div class="card">
                      <img src="${image.url}/600/400" class="section media" alt="Image by ${image.author}">
                      <div class="section">
                        Image &copy; <a href="https://unsplash.com/photos/${image.meta.unsplash}" target="_blank">${image.author}</a>
                        <br>
                        Category: ${image.category}
                      </div>
                    </div>
                `);
        });
    })
    .catch((error) => {
        console.error('API not resolved!', error);
    })
    .always(() => {
        $('.spinner').hide();
    });
