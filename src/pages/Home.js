import React,{useEffect} from 'react'
import {useMeasure} from 'react-use'
import {useDispatch, useSelector} from 'react-redux'
import {loadMovies} from '../actions/moviesAction'
import styled from 'styled-components'
import * as icon from 'react-icons/bs'
//Components
import PopularMovie from '../components/PopularMovie'

const Home = () => {
    //FETCH Movies
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadMovies());
    },[])
    // Package used to get the width of a component to dynamically run different functions
    const [ref, { width}] = useMeasure();
    // Divides the avaible space in the container by the size of each movie to returns the amount of movies that need to be displayed so that each only has one row
    const itemCount = () => {
      let item = Math.floor(width / 350)
      // If the available space is less than 1 movie it displays just one 
      if(item < 1){
        return 1
      }
      return item
    } 
    //GET DATA
    const {popular,upComing,topRated} = useSelector((state) => state.movies)
        
    return(
      <>
        <MovieList>
          <h1>Popular Movies</h1>
          { popular ?
            <PopularMoviesStyle ref ={ref}>
             {/* Slices the array such that only the correct amount of movies is printed (1 row) */}
            {popular.slice(0, itemCount()).map(movie => (
              <PopularMovie movie={movie} key={movie.id}
              />
              ))}
          </PopularMoviesStyle>
            : 
            <>
            <h2> No movies imported </h2>
            </>}
        </MovieList>
        <MovieList>
          <h1>Upcoming Movies</h1>
          { upComing ?
            <PopularMoviesStyle>
            {/* Slices the array such that only the correct amount of movies is printed (1 row) */}
            {upComing.slice(0, itemCount()).map(movie => (
              <PopularMovie movie={movie} key={movie.id}
              />
              ))}
          </PopularMoviesStyle>
            : 
            <>
            <h2> No movies imported </h2>
            </>}
        </MovieList>
        <MovieList>
          <h1>Top Rated Movies</h1>
          { topRated ?
            <PopularMoviesStyle>
            {/* Slices the array such that only the correct amount of movies is printed (1 row) */}
            {topRated.slice(0, itemCount()).map(movie => (
              <PopularMovie movie={movie} key={movie.id}
              />
              ))}
          </PopularMoviesStyle>
            : 
            <>
            <h2> No movies imported </h2>
            </>}
        </MovieList>
      </>
    )
}

  const MovieList = styled.div`

  margin: 20px auto;
  h1{
    margin: 0 auto;
    text-align: center;
    
    width: 25%;
    padding: 5px;
    color: #ebece7;
  }
  padding: 0rem 5rem;
  h2{
    padding: 5rem 0rem;
  }
 
  `

const PopularMoviesStyle = styled.div`

  margin: 20px auto;
  background-color: #5b74aaac;
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  padding: 40px;
  align-items: center;
  justify-content: center;
  `

export default Home


