import React, {useState} from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";
//Redux 
import {fetchSearched} from '../actions/moviesAction'
import {useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'

const Search = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [textInput, setTextInput] = useState ("");

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearched(textInput))
        setTextInput("")
        history.push("/searched")
    }

   

   
    
    return (
        <StyledSearch>
            
            <form>
            <input value={textInput} onChange={inputHandler} type="text" placeholder="Search For Movies..." />
            <Link to='/searched'>
            <button onClick={submitSearch} type="submit" >Search</button>
            </Link>
            </form>
              
        </StyledSearch>
    )
}

export default Search

const StyledSearch = styled.div`
    margin-top: 1rem;
    margin-left: 10rem;
    margin-right: 10rem;
    button{
        display: none;
    }
    input{
        ::-webkit-input-placeholder{
        color: white;
        
    }
   
        color: white;
        display: block;
        width: 100%;
        padding: 1rem;
        outline: none;
        background-color: #222222;
        border:none;
    }
    svg{
        background-size: 100px 100px;
        position: absolute;
        left: 0;
        margin-top: 15px;
        margin-left: 10px;
    }
   
`
