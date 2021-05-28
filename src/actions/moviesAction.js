import axios from 'axios'
import {popularMoviesURL, topratedMoviesURL, upcomingMoviesURL, searchMovieURL} from '../api'

//ACTION CREATOR

 export const loadMovies = () => async (dispatch) => {
    
    //FETCH AXIOS
    const popularData = await axios.get(popularMoviesURL())
    const topRatedMovies = await axios.get(topratedMoviesURL())
    const upComingMovies = await axios.get(upcomingMoviesURL())
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            popular: popularData.data.results,
            topRated: topRatedMovies.data.results,
            upComing: upComingMovies.data.results,
        }
    })
}

export const fetchSearched = (movie_name) => async (dispatch) => {

    //Fetch
    const searchedMovie = await axios.get(searchMovieURL(movie_name))

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedMovie.data.results,
        }
    })

}
