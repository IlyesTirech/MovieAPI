import React, {useEffect} from 'react'
import styled from 'styled-components'
import { loadMovies } from "../actions/moviesAction"
import {useDispatch, useSelector} from 'react-redux'
import Movies from "../components/Movies"
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'
const UpComingPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadMovies());
    },[])

    const {upComing} = useSelector((state) => state.movies)

    return (
        <UpcomingStyle variants = {fadeIn} initial='hidden' animate="show">

            
        <h2>Upcoming Movies</h2>
          { upComing ?
            <MoviesStyle>
             
            {upComing.map(movie => (
              <Movies movie={movie} key={movie.id}
              />
              ))}
          </MoviesStyle>
            : 
            <>
            <h2> No movies imported </h2>
            </>}
        

        </UpcomingStyle>
    )
}


const UpcomingStyle = styled(motion.div)`
  h2{
    margin-top: 5rem;
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

export default UpComingPage
