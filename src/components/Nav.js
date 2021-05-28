import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Nav() {
    return (
        <StyledNav>
            <div className="title">
                <h1>MovieDB</h1>
            </div>
            <StyledAbout>
                <h2>
                    <Link to='/about'>
                    About Us
                    </Link>
                </h2>
                <h2>
                <Link to='/contact'>
                    Contact Us
                    </Link>
                </h2>
            </StyledAbout>
        </StyledNav>
    )
}

export default Nav

const StyledNav = styled.div`

    min-height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:black ;
    color: white;
    h1{
        color: #f3ce13;
        font-family: 'Lobster', cursive;
    }
   
    
`

const StyledAbout = styled.div`
width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h2{
        margin-left: 10rem;
        color: white;
        text-decoration: none;
    }
    
    
`