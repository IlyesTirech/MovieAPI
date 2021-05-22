import React from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";

function Search() {
    return (
        <StyledSearch>
            < FiSearch/>
            <input type="text" placeholder="      Search.."/>
        </StyledSearch>
    )
}

export default Search

const StyledSearch = styled.div`

    input{
        display: block;
        width: 100%;
        padding: 1rem;
        outline: none;
        background-color: #474747;
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
