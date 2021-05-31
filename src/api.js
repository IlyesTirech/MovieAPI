//Base URL
const BASE_URL = "https://api.themoviedb.org/3/"

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/"

//API KeY

const KEY = '6579bc9ba84565fc456dc0712a6a43bf'

//Popular Games
const POPULAR_MOVIES = `movie/popular?api_key=${KEY}`
const UPCOMING_MOVIES = `movie/upcoming?api_key=${KEY}&page=1`
const TOPRATED_MOVIES = `movie/top_rated?api_key=${KEY}&page=1`


export const popularMoviesURL = () => `${BASE_URL}${POPULAR_MOVIES}`
export const upcomingMoviesURL = () => `${BASE_URL}${UPCOMING_MOVIES}`
export const topratedMoviesURL = () => `${BASE_URL}${TOPRATED_MOVIES}`


// w is needed as it specifies the width, the p in the base img url signifies a picture
export const imageURL = () => `${BASE_IMG_URL}w500`
//Get Details
export const DetailsURL = (movie_id) => `${BASE_URL}/movie/${movie_id}?api_key=${KEY}`
//Get Images
export const DetailImages = (movie_id) => `${BASE_URL}/movie/${movie_id}/images?api_key=${KEY}`
//Searched Movie
export const searchMovieURL = (movie_name) => `${BASE_URL}search/movie?api_key=${KEY}&query=${movie_name}`

export const creditsURL = (movie_id) => `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}`

export const videoURL = (movie_id) => `${BASE_URL}/movie/${movie_id}/videos?api_key=${KEY}`