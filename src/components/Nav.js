import React from 'react'
import styled from 'styled-components'

function Nav() {
    return (
        <StyledNav>
            <div className="title">
                <h1>Title</h1>
            </div>
            <StyledAbout>
                <h2>
                    About Us
                </h2>
                <h2>
                    Contact Us
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
    background-color:#666666 ;
    color: white;
    
    
`

const StyledAbout = styled.div`
width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h2{
        margin-left: 10rem;
    }
    
    
`