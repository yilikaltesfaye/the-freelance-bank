import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts';
import lines from '../img/lines.svg'
import questions from '../questions';
import Question from './Question';
import { Fade } from 'react-awesome-reveal';

function FAQsection() {
  return (
    <FaqStyled>
        <InnerLayout>
            <Fade direction='left'>
                <h3 className="small-heading">Frequently <span>Asked Questions</span></h3>
                <p className='center-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sit hic, sapiente ipsum repellat optio doloribus reiciendis delectus soluta dolor similique debitis alias aspernatur maxime.</p>
            </Fade>
            <div className="lines">
                <img src={lines} alt="" />
            </div>

            <div className="questions-container">
                {
                    questions.map((q) => {
                        return <Question key={q.id} {...q}/>
                    })
                }
            </div>
        </InnerLayout>
    </FaqStyled>
)
}
const FaqStyled = styled.section`
    .center-p{
        width: 60%;
        margin: 0 auto;
    }
    .questions-container{
        padding-top: 1rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 340%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }
`;

export default FAQsection
