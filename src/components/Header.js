import React from 'react'
import styled from 'styled-components'
import bg from '../img/bg.svg'
import Navigation from './Navigation';
import HeaderContent from './HeaderContent';

function Header() {
  return (
    <HeaderStyled>
        <div className="header-content">
          <Navigation />
          <HeaderContent />
        </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100% ;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content {
      padding: 0 15rem;
      @media screen and (max-width: 1347px) {
        padding: 0 15rem;
      }
      @media screen and (max-width: 1186px) {
          padding: 0 8rem;
      }
      @media screen and (max-width: 990px) {
          padding: 0 4rem;
      }
    }
`;

export default Header
