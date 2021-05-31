import React, {useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'
//Redux
import {useSelector, useDispatch} from 'react-redux'
import {deleteDetail, loadDetail} from '../actions/detailAction'
import {useLocation} from 'react-router-dom'

//ReactPlayer
import ReactPlayer from 'react-player'
import {useMeasure} from 'react-use'

const MovieDetails = () => {
    
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [ref, { width}] = useMeasure();
    
    const videoWidth = () => {
        if(width > 640){
            return 640;
        }
        return width-10;
    }
    console.log(videoWidth)
    useEffect(() => {
        dispatch(deleteDetail)
        dispatch(loadDetail(id));
      },[])

    //Data
    const {image,movie, credits, videos} = useSelector(state => state.detail);
    

    return (
        <DetailStyle variants = {fadeIn} initial='hidden' animate="show">
        

        {
            useSelector(state => state.detail) ?
       
        <div>
            <h2>{movie.original_title}</h2>
            {               
                  videos.results ? 
                  <VideoStyle>
                      {
                         
                          videos.results.slice(0,1).map(video =>(
                              <PlayerWrapper ref={ref}>
                            <ReactPlayer width={`${videoWidth()}px`} className='react_player' url={`https://www.youtube.com/watch?v=${video.key}`}/>
                            </PlayerWrapper>
                          ))
                      }
                  </VideoStyle>
                  :
                  <>
                  
                  </>
                }   
            <h3>Release Date: {movie.release_date}</h3>
            {               
                  movie.genres ? 
                  <GenreStyle>
                       <h3 className='genre_title'>Genre:</h3>
                      {                        
                          movie.genres.slice(0,2).map(genre =>(
                              <h3 className='genre_name'> {genre.name},</h3>
                          ))
                      }
                  </GenreStyle>
                  :
                  <>
                  
                  </>
                }
                
            <h3>{movie.overview}</h3>
   
            {               
                  credits.cast ? 
                  <CastStyle>
                       <h4 className='cast_title'>Cast: </h4>
                      {
                         
                          credits.cast.slice(0,5).map(cast =>(
                              <h4 className='genre_name'> {cast.name},</h4>
                          ))
                      }
                  </CastStyle>
                  :
                  <>       
                  </>
                }        
           
           
                
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
                 
                  </>
                }
        </div>
        :
        <>     
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

const CastStyle = styled.div`
display: flex;
.cast_title{
    margin-right: 5px;
}
.genre_name{
    margin-right: 5px;
}
`
const VideoStyle = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
`
const PlayerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    `
export default MovieDetails
