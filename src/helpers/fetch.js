import API_KEY from '../constants/api'



const getMovies = query =>
    new Promise((resolve, reject) =>
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    )

const getMovieDetails = imdbId =>
    new Promise((resolve, reject) =>
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    )

export {
    getMovies,
    getMovieDetails
}