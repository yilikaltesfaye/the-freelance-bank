import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts'
import chart from '../img/chart.svg'
import Chartstats from './chartstats'
import AnimatedButton from './AnimatedButton'
function Chartsection() {
  return (
    <ChartStyled>
        <InnerLayout>
            <div className="chart-container">
                <div className="chart-left">
                    <div className="stats">
                        <div className="stats-money">
                            <Chartstats name={'Balance'} amount={'$250'}/>
                            <Chartstats name={'Last Transaction'} amount={'$1,000'}/>
                        </div>
                        <img src={chart} alt="" />
                    </div>
                </div>
                <div className="chart-right">
                    <h2 className="secondary-heading">
                        Manage your finances like a pro in no time
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolorum fuga pariatur natus autem aspernatur enim magnam error accusantium! Reprehenderit qui laboriosam quod dolor et.
                    </p>
                    <AnimatedButton name={'Learn More'} />
                </div>
            </div>
        </InnerLayout>
    </ChartStyled>
  )
}

const ChartStyled = styled.section`
    .chart-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 845px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left {
            width: 95%;
            @media screen and (max-width: 1347px) {
                width: 100%;
            }
            .stats {
                img {
                    border-radius: 62px;
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    width: 100%;
                }
                .stats-money {
                    display: flex;
                    padding-bottom: 1rem;
                    justify-content: space-between;
                }
            }
        }
        .chart-right {
            padding-left: 2rem;
            p {
                padding: 1.3rem 0;
            }
        }
    }
`;

export default Chartsection