import React, {useEffect} from 'react'
import styled from 'styled-components'
import { loadMovies } from "../actions/moviesAction"
import {useDispatch, useSelector} from 'react-redux'
import Movies from "../components/Movies"
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'
const TopRatedPage = () => {
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadMovies());
    },[])

    const {popular} = useSelector((state) => state.movies)

    return (
        

            <PopularPageStyle variants = {fadeIn} initial='hidden' animate="show">
        <h2>Popular Movies</h2>
       
          { popular ?
            <MoviesStyle>
             
            {popular.map(movie => (
              <Movies movie={movie} key={movie.id}
              />
              ))}
          </MoviesStyle>
            : 
            <>
            <h2> No movies imported </h2>
            </>}
        </PopularPageStyle>

       
    )
}


const PopularPageStyle = styled(motion.div)`
  h2{
    margin-top: 3rem;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: #f3ce13;
    font-size: 30px;
  }
`

const MoviesStyle = styled.div`
  min-height: 30vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  padding: 40px;
  align-items: center;
  justify-content: center;
  `

export default TopRatedPage
