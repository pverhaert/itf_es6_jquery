const omdbapi = 'https://www.omdbapi.com/';
const spinner = document.querySelector('.spinner');
const form = document.querySelector('form');

function updatePage(movie) {
    // info if movie not found
    let info = `
          <div class="card warning full-width">
            <p>No info found for <b>${title.value}</b></p>
          </div>`;
    // overwrite info if the movie is found
    if (movie.Response === 'True') {
        const poster = movie.Poster && movie.Poster.length > 10 ? `<img src="${movie.Poster}">` : '';
        info = `
            <div class="row">
              <div class="col-sm-6">${poster}</div>
              <div class="col-sm-6">
                <h2>${movie.Title}</h2>
                <p><b>Genre: </b>${movie.Genre}<br>
                <b>Released: </b>${movie.Released}<br>
                <b>Actors: </b>${movie.Actors}<br>
                <b>Director: </b>${movie.Director}<br></p>
                <hr>
                <p class="text-justify">${movie.Plot}</p>
              </div>
            </div>`;
    }
    document.getElementById('movieContainer').innerHTML = info;
}

async function fetchMovie(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`An error has occurred: ${response.status}  ${response.statusText}`); // check for errors
        }
        const movie = await response.json();
        updatePage(movie);
    } catch (error) {
        console.error(error);
    }
    spinner.classList.add('hidden');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const queryString = new URLSearchParams(data).toString();
    spinner.classList.remove('hidden');
    fetchMovie(`${omdbapi}?${queryString}`);
});
form.dispatchEvent(new Event('submit'));
