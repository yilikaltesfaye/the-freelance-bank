import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import plus from '../img/plus.svg'

function Question({title, description}) {
    const [ toggle, setToggle ] = useState(false);

    const btnToggler = () => {
        setToggle(!toggle);
    }

  return (
    <QuestionStyled>
        <div className="q-container">
            <div className="toggle-title">
                <h4>{title}</h4>
                <button onClick={btnToggler}>
                    <img src={plus} alt="" />
                </button>
            </div>
            {toggle && <p>{description}</p>}
        </div>
    </QuestionStyled>
  )
}

const QuestionStyled = styled.div`
    background-color: #fff;
    margin: 1rem 0;
    padding: 1.2rem 1rem;
    border-radius: 24px;
    p{
        transition: all .4s ease-in-out;
    }
    h4 {
        font-size: 1.3rem;
        color: #16194f;
    }
    .toggle-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
        }
    }
`;

export default Question