import React, {useState} from 'react'
import styled from 'styled-components'
//Redux 
import {fetchSearched} from '../actions/moviesAction'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'

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
        history.push(`/searched:${textInput}`)
        setTextInput("")
    }

   

   
    
    return (
        <StyledSearch variants = {fadeIn} initial='hidden' animate="show">           
            <form>
            <input value={textInput} onChange={inputHandler} type="text" placeholder="Search For Movies..." />

            <button onClick={submitSearch} type="submit" >Search</button>
           
            </form>             
        </StyledSearch>
    )
}

export default Search

const StyledSearch = styled(motion.div)`
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
