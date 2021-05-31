import React from 'react'
//Styling and Animations
import styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch} from 'react-redux'
import {loadDetail} from '../actions/detailAction'
import {Link} from 'react-router-dom'

const Movies = ({movie}) => {

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(id))
    }

    const {title, release_date, backdrop_path, vote_average, id, } = movie
    return(
        <Link to={{pathname: `/details/${id}`}}>
        <MoviesStyle onClick = { loadDetailHandler }>
            <h3>{title}</h3>
            <img src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt={title} />
           <StarComp rating={vote_average}/>
            <p>Release Date: {release_date}</p>

            
        </MoviesStyle>
        </Link>
    )
        }

    const MoviesStyle = styled.div`

        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.25rem;
        h3{
            padding: 1rem 0rem;
            font-size: 20px;
            color: white;
            font-family: 'Montserrat', sans-serif;
            }
        img{
            border-radius: 5px;
            margin-bottom: 5px;
        }
        p{
            color: white;
            font-family: 'Montserrat', sans-serif;
        }
`
                

const StarComp = ({rating}) => {
 
    return (
        <StarDiv>
            <StarRatingComponent 
            name="rate1" 
            starCount={5}
            editing={false}
            isHalf={true}
            emptyIcon={<FontAwesomeIcon icon={["far", "star"]} />}
            halfIcon={<FontAwesomeIcon icon={["fa", "star-half"]}/>}
            fullIcon={<FontAwesomeIcon icon={["fa", "star"]}/>}
            activeColor="#ffd700"
            value={rating/2}
            />       
        </StarDiv>
    )
}




const StarDiv = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
     
  `
 

export default Movies;
