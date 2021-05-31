import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSearched} from '../actions/moviesAction'
import Movies from '../components/Movies'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'
import {useLocation} from 'react-router-dom'
const SearchedPage = () => {
  const dispatch = useDispatch();
  const {searched} = useSelector((state) => state.movies)
  let location = useLocation();
  let path = location.pathname.split(":")[1]

  useEffect(() => {
    dispatch(fetchSearched(path))
  })
    return (
      <SearchedPages>
        <h2>Searched For <span>{path}</span> </h2>
        <MoviesStyle variants = {fadeIn} initial='hidden' animate="show">
        {searched.map(movie => (
             <Movies movie={movie} key={movie.id}/>
        ))}
       </MoviesStyle>
        </SearchedPages>
    )
}
const MoviesStyle = styled(motion.div)`
  min-height: 30vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  padding: 40px;
  align-items: center;
  justify-content: center;
  h2{
    margin-top: 5rem;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: #f3ce13;
    font-size: 30px;
  }
  `
  const SearchedPages = styled(motion.div)`
  h2{
    margin-top: 4rem;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: #f3ce13;
    font-size: 30px;
  }
  span{
    text-decoration: underline;
  }
  `
export default SearchedPage
