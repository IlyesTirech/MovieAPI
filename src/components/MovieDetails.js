import React, {useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'
//Redux
import {useSelector, useDispatch} from 'react-redux'
import {deleteDetail, loadDetail} from '../actions/detailAction'
import {useLocation} from 'react-router-dom'
import { useSetState } from 'react-use'

const MovieDetails = () => {
    
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    

    useEffect(() => {
        dispatch(deleteDetail)
        dispatch(loadDetail(id));
      },[])

    //Data
    const {image,movie} = useSelector(state => state.detail);
    

    return (
        <DetailStyle variants = {fadeIn} initial='hidden' animate="show">
        

        {
            useSelector(state => state.detail) ?
       
        <div>
            <h2>{movie.original_title}</h2>
            <h3>Release Date: {movie.release_date}</h3>
            {
                
                  movie.genres ? 
                  <GenreStyle>
                       <h3 className='genre_title'>Genre:</h3>
                      {
                         
                          movie.genres.map(genre =>(
                              <h3 className='genre_name'> {genre.name},</h3>
                          ))
                      }
                  </GenreStyle>
                  :
                  <>
                  <h2>No Genre</h2>
                  </>
                }
                
            <h3>{movie.overview}</h3>
   
                     
           
           
                
                {
                  image.posters ? 
                  <MoviesStyle>
                      {
                          image.posters.slice(0, 2).map(images =>(
                              <img src={`https://image.tmdb.org/t/p/w400/${images.file_path}`} alt="movies" key={image.id} />
                          ))
                      }
                  </MoviesStyle>
                  :
                  <>
                  <h2>Loading...</h2>
                  </>
                }
            

       
        </div>
        :
        <>
        <h2>Loading...</h2>
        </>

         }
        </DetailStyle>
    )
}

const DetailStyle = styled(motion.div)`
display: flex;
justify-content: center;
width: 50%;
margin: auto;
h2{
    color: white;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    text-align: center;
    
}
h3{
    color: white;
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    text-align: justify;
    
}
h4{
   
    color: white;
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
}
`
const MoviesStyle = styled.div`
  min-height: 30vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  align-items: center;
  justify-content: center;
  text-align: center;
  img{
      margin-bottom: 2rem;
      
  }
  `

  const GenreStyle = styled.div`
    display: flex;
    .genre_title{
        margin-right: 5px;
    }
    .genre_name{
        margin-right: 5px;
    }
  `

export default MovieDetails
