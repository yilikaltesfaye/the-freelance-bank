import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg'
import { Fade } from 'react-awesome-reveal';

function Navigation() {
  return (
    <Fade direction="top">
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li><a href="_">Home</a></li>
                <li><a href="_">Features</a></li>
                <li><a href="_">Pricing</a></li>
            </ul>
            <PrimaryButton name ={'Sign Up'} />
        </NavigationStyled>
    </Fade>
  )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;
    font-size: 17px; // edited
    padding-top: 5px; // edited

    ul {
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
export default Navigation
