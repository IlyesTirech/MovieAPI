//Base URL
const BASE_URL = "https://api.themoviedb.org/3/"

const BASE_IMG_URL = "https://image.tmdb.org/t/p/"

//API Key
const KEY = "6579bc9ba84565fc456dc0712a6a43bf"

//Popular Games
const POPULAR_MOVIES = "movie/popular?api_key=6579bc9ba84565fc456dc0712a6a43bf"

export const popularMoviesURL = () => `${BASE_URL}${POPULAR_MOVIES}`

// w is needed as it specifies the width, the p in the base img url signifies a picture
export const getImageURL = (path, size) => `${BASE_IMG_URL}w${size}${path}`

