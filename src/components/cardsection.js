import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts';
import card from '../img/creditcard.svg'

function CardSection() {
  return (
    <CardSectionStyled>
        <InnerLayout>
            <div className="card-container">    
                <div className="card-left">
                    <h2 className="secondary-heading">
                        One card for all your transaction
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab aliquam et possimus voluptatibus quas fugit iste eaque corrupti, repellendus obcaecati ut sapiente saepe dolorem nulla?
                    </p>
                </div>
                <div className="card-right">
                    <img src={card} alt="" />
                </div>
            </div>
        </InnerLayout>
    </CardSectionStyled>
  )
}

const CardSectionStyled = styled.section`
    margin-top: 2rem;
    margin-bottom: 3rem;
    .card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 845px) {
            grid-template-columns: repeat(1, 1fr);
        }

        .card-right {
            display: flex;
            justify-content: flex-end;

            img{
                width: 95%;
            }
        }
        .card-left{
            p {
                padding: 1rem 0;;
            }
        }
    }
`;
export default CardSection