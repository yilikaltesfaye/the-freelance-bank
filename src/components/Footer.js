import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts';
import logo from '../img/logo.svg'

function Footer() {
  return (
    <FooterStyled>
        <InnerLayout>
            <div className="footer-container">
                <div className="logo-container">
                    <div className="logo-item">
                        <img src={logo} alt="" />
                        <p>
                            Copyright @2024 The-Freelance-Bank <br />
                            All Rights Reserved.
                        </p>
                    </div>
                </div>
                <ul className="bottom-nav">
                    <div className="links1">
                        <li>
                            <a href="_">Team</a>
                        </li>
                        <li>
                            <a href="_">Press</a>
                        </li>
                        <li>
                            <a href="_">Fees</a>
                        </li>
                    </div>
                    <div className="links2">
                        <li>
                            <a href="_">Services</a>
                        </li>
                        <li>
                            <a href="_">Projects</a>
                        </li>
                        <li>
                            <a href="_">Affiliate</a>
                        </li>
                    </div>
                    <div className="links3">
                        <li>
                            <a href="_">Terms of Use</a>
                        </li>
                        <li>
                            <a href="_">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="_">Contact Us</a>
                        </li>
                    </div>
                </ul>
            </div>
        </InnerLayout>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
    padding: 0 9rem;
    background-color: #dce2f0;
    @media screen and (max-width: 1347px) {
        padding: 0 15rem;
    }
    @media screen and (max-width: 1186px) {
        padding: 0 8rem;
    }
    @media screen and (max-width: 990px) {
        padding: 0 4rem;
    }
    .footer-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .logo-container{
            display: flex;
            align-items: center;
            .logo-item{
                img{
                    width: 90px;
                }
            }
        }
    }
    .bottom-nav{
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        li {
            padding: 2rem 0;
            color: #16194f;
        }
    }
`;

export default Footer