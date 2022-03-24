const omdbapi = 'https://www.omdbapi.com/';

$('form')
    .submit(function (e) {
        e.preventDefault();
        $.getJSON(omdbapi, $('form').serialize())
            .then((movie) => {
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
            })
            .catch((error) => {
                console.error('API not resolved!', error);
            })
            .always(() => {
                $('.spinner').hide();
            });
    })
    .submit();
