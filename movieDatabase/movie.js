
const results = document.getElementById("results-container");

function showMovieInfo(event) {
    event.preventDefault();


    const movieName = document.getElementById("search-input").value;
    
    const apiKey = "e9b6f8d4d90d9dad9f00b58b77fb697c";
    const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`;


    if (movieName === "")
    {
        return;
    } else {
    fetch(apiURL)

    .then(respone => {
        if (respone.ok) {
            return respone.json();
        } else {
            throw new Error("Network response was not ok");
        }
    })
    .then(data => {
        results.innerHTML = '';
        data.results.forEach(movie => {
            let movieDiv = document.createElement('div');
            movieDiv.classList.add('movie-card');

            let contentDiv = document.createElement('div');
            contentDiv.classList.add('movie-card-content');

            let moviePoster = document.createElement('img');
            const imageBaseURL = "https://image.tmdb.org/t/p/w500";
            
            if (movie.poster_path) {
                moviePoster.src = imageBaseURL + movie.poster_path;
            } else {
                moviePoster.src = "https://via.placeholder.com/500x750?text=No+Image+Available";
            }

            let movieTitle = document.createElement('h2');
            movieTitle.textContent = movie.title;

            let movieOverview = document.createElement('p');
            movieOverview.textContent = movie.overview;

            contentDiv.appendChild(movieTitle);
            contentDiv.appendChild(movieOverview);
            
            movieDiv.appendChild(moviePoster);
            movieDiv.appendChild(contentDiv);

            results.appendChild(movieDiv);
        })

    })

    .catch(error => console.error(error))
    }
}

document.getElementById("search-form").addEventListener('submit', showMovieInfo);