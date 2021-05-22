//Base URL
const BASE_URL = "https://api.themoviedb.org/3/"

//API Key
const KEY = "6579bc9ba84565fc456dc0712a6a43bf"

//Popular Games
const POPULAR_MOVIES = "movie/popular?api_key=6579bc9ba84565fc456dc0712a6a43bf"

export const popularMoviesURL = () => `${BASE_URL}${POPULAR_MOVIES}`

