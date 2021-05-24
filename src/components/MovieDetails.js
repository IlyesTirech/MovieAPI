import React, {useEffect} from 'react'
import styled from 'styled-components'
//Redux
import {useSelector, useDispatch} from 'react-redux'
import {loadDetail} from '../actions/detailAction'
import {useLocation} from 'react-router-dom'
const MovieDetails = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location)
    // useEffect(() => {
    //     dispatch(loadDetails());
    //   },[])
    //Data
    const {image,movie} = useSelector(state => state.detail);
    // const fiveImages = image.posters.slice(0,5)

    return (
        <div>
            <h3>{movie.name}</h3>
            <h3>{movie.overview}</h3>

            {/* {image.posters.map((image) => (
                <img src={image.po
                    sters} alt="game"/>
            ))} */}

       
        </div>
    )
}

export default MovieDetails
