import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations'

function Nav() {
    return (
        <StyledNav variants = {fadeIn} initial='hidden' animate="show">
            <Link className='nav_title' to='/'>     
                <h1>MovieDB</h1>
            </Link>
            
        </StyledNav>
    )
}

export default Nav

const StyledNav = styled(motion.div)`
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
   
    background-color:black ;
    color: white;
    .nav_title{
        color: #f3ce13;
        font-family: 'Lobster', cursive;
        text-align: center;
    }
   
    
`


