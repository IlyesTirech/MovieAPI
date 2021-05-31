import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSearched} from '../actions/moviesAction'
import Movies from '../components/Movies'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'
import {Redirect} from 'react-router-dom'

const SearchedPage = () => {
    const {searched} = useSelector((state) => state.movies)
    
    return (
      <>
      {
        searched.length > 0 ?
        <MoviesStyle variants = {fadeIn} initial='hidden' animate="show">
        {searched.map(movie => (
             <Movies movie={movie} key={movie.id}/>
        ))}
       </MoviesStyle>
       :
       <>
        <Redirect to='/'/>
       </>
      }
        
        </>
    )
}
const MoviesStyle = styled(motion.div)`
  min-height: 30vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  padding: 40px;
  align-items: center;
  justify-content: center;
  `
export default SearchedPage
