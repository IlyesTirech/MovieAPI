import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSearched} from '../actions/moviesAction'
import Movies from '../components/Movies'
import styled from 'styled-components'
const SearchedPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSearched)
        
      },[])
    const {popular,upComing,topRated,searched} = useSelector((state) => state.movies)
    return (
        <MoviesStyle>
            {searched.map(movie => (
                 <Movies movie={movie} key={movie.id}/>
            ))}
        </MoviesStyle>
    )
}
const MoviesStyle = styled.div`
  min-height: 30vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  padding: 40px;
  align-items: center;
  justify-content: center;
  `
export default SearchedPage
