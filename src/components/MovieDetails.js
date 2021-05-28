import React, {useEffect} from 'react'
import styled from 'styled-components'
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
        <DetailStyle>
        

        {
            useSelector(state => state.detail) ?
       
        <div>
            <h2>{movie.original_title}</h2>
            <h3>{movie.overview}</h3>
   
                     
            {
                  movie.genres ? 
                  <div>
                      {
                          movie.genres.map(genre =>(
                              <h2>{genre.name}</h2>
                          ))
                      }
                  </div>
                  :
                  <>
                  <h2>No Genre</h2>
                  </>
                }
           
                
                {
                  image.posters ? 
                  <div>
                      {
                          image.posters.slice(0, 5).map(images =>(
                              <img src={`https://image.tmdb.org/t/p/w200/${images.file_path}`} alt="movies" key={image.id} />
                          ))
                      }
                  </div>
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

const DetailStyle = styled.div`
display: flex;
justify-content: center;

h2{
    color: white;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
}
h3{
    color: white;
    margin-bottom: 1rem;
}
`
export default MovieDetails
