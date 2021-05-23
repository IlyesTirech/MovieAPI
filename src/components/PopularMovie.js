import React from 'react'
//Styling and Animations
import styled from 'styled-components'
import { loadMovies } from '../actions/moviesAction';
import {imageURL} from "../api"
import * as icon from 'react-icons/bs'
import StarRatingComponent from 'react-star-rating-component';


const PopularMovie = ({movie}) => {
    const {title, release_date, backdrop_path, vote_average, vote_count} = movie
    const imageSource = imageURL
    
    return(
        <PopularMovieItem>
            <h3>{title}</h3>
            <img src={`https://image.tmdb.org/t/p/w200/${backdrop_path}`} alt={title} />
            <p>({vote_count})</p>
            <StarComp rating={vote_average}/>
            <p>{release_date}</p>
        </PopularMovieItem>
    )
        }

    const PopularMovieItem = styled.div`
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;

    &:hover{
        -webkit-transition: background-color 0.5s ease-out;
        -moz-transition: background-color 0.5s ease-out;
        -o-transition: background-color 0.5s ease-out;
        transition: background-color 0.5s ease-out;
        background-color: #252525f4;
    }
        width: 80%;
        height: 90%;
        background-color: #3d3d3de2;
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.25rem;
        h3{
            padding: 1rem 0rem;
            color: #dee1e4;
            }
        img{
            border-radius: 5px;
            margin-bottom: 5px;
        }
        p{
            color: #dee1e4;
        }
`
                














const StarComp = ({rating}) => {
    const halfStar = () =>{ 
        if(Math.round(rating) < rating - 0.25){
          
            return true
        }
        
        return false
};
    return (
        <StarDiv>
            <StarRatingComponent 
            name="rate1" 
            starCount={halfStar ? Math.round(rating/2)-1 : Math.round(rating/2)}
            editing={false}
            renderStarIcon={() => <icon.BsStarFill/>}
            value={rating/2}
            />
            {/* {halfStar ?
            
            <StarRatingComponent 
            name="rate2" 
            starCount={1}
            editing={false}
            renderStarIcon={() => <icon.BsStarHalf/>}
            /> : null} */}
            
       
        </StarDiv>
    )
}


const StarDiv = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
     
  `
 

export default PopularMovie;
