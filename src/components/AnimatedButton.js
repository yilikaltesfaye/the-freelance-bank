import React from 'react'
import arrow from '../img/arrow.svg'
import styled from 'styled-components'
import blob1 from '../img/blob_top.svg'
import blob2 from '../img/blob_bottom.svg'
function AnimatedButton({name}) {
    return (
        <AnimatedButtonStyled>
            {name}
            <img src= {arrow} alt="" className='arrow'/>
            <img src={blob1} alt="" className='blob1'/>
            <img src={blob2} alt="" className='blob2'/>
        </AnimatedButtonStyled>
    )
}

const AnimatedButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    .arrow {
        padding-left: 0.9rem;
        transition: all 0.4s ease-in-out;
    }
    
    &:hover {
        color: var(--accent-pink);
        .blob1 {
            transition: all 0.4s ease-in-out;
            transform: translateX(-95px);
        }
        .blob2 {
            transition: all 0.4s ease-in-out;
            transform: translateX(95px);
        }
        .arrow {
            padding-left: 1.4rem;
            transition: all 0.4s ease-in-out;
        }
    }
    
    .blob1, .blob2 {
        position: absolute;
        pointer-events: none;
        transition: all 0.4s ease-in-out;
    }
    .blob1 {
        top: 0; 
        right: 0;
    }
    .blob2 {
        bottom: 0;
        left: 20px;
    }

`;

export default AnimatedButton