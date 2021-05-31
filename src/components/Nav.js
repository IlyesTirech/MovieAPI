import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'

function Nav() {
    return (
        <StyledNav variants = {fadeIn} initial='hidden' animate="show">
            <Link to='/'>
            <div className="title">
                <h1>MovieDB</h1>
            </div>
            </Link>
            
        </StyledNav>
    )
}

export default Nav

const StyledNav = styled(motion.div)`

    min-height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color:black ;
    color: white;
    h1{
        color: #f3ce13;
        font-family: 'Lobster', cursive;
        margin-left: 10rem;
    }
   
    
`


