import React,{useEffect} from 'react'
import {useMeasure} from 'react-use'
import {useDispatch, useSelector} from 'react-redux'
import {loadMovies} from '../actions/moviesAction'
//Style And Animations
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'
import { Link} from "react-router-dom";
//Components
import Movies from '../components/Movies'

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
      <div>
        <MovieList  variants = {fadeIn} initial='hidden' animate="show">
          <Link to="/popular">
            <h2>Popular Movies</h2>
            <h4>View More:</h4>
          </Link>
          { popular ?
            <MoviesStyle ref ={ref}>
             {/* Slices the array such that only the correct amount of movies is printed (1 row) */}
            {popular.slice(0, itemCount()).map(movie => (
              <Movies movie={movie} key={movie.id}
              />
              ))}
          </MoviesStyle>
            : 
            <>
            <h2> No movies imported </h2>
            </>}
        </MovieList>
        <MovieList variants = {fadeIn} initial='hidden' animate="show">
          <Link to="/upcoming">
            <h2>Up and Coming Movies</h2>
            <h4>View More:</h4>
          </Link>
          { upComing ?
            <MoviesStyle>
            {/* Slices the array such that only the correct amount of movies is printed (1 row) */}
            {upComing.slice(0, itemCount()).map(movie => (
              <Movies movie={movie} key={movie.id}
              />
              ))}
          </MoviesStyle>
            : 
            <>
            <h2> No movies imported </h2>
            </>}
        </MovieList>
        <MovieList variants = {fadeIn} initial='hidden' animate="show">
          <Link to="/toprated">
            <h2>Top Rated Movies</h2>
            <h4>View More:</h4>
          </Link>
          { topRated ?
            <MoviesStyle>
            {/* Slices the array such that only the correct amount of movies is printed (1 row) */}
            {topRated.slice(0, itemCount()).map(movie => (
              <Movies movie={movie} key={movie.id}
              />
              ))}
          </MoviesStyle>
            : 
            <>
            <h2> No movies imported </h2>
            </>}
        </MovieList>
      </div>
    )
}

  const MovieList = styled(motion.div)`

  h2{
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f3ce13;
    font-family: 'Montserrat', sans-serif;
  }
  h4{
    color: white;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
  }
  `

const MoviesStyle = styled.div`
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  padding: 40px;
  align-items: center;
  justify-content: center;
  `
export default Home


