import React from 'react'
import styled from 'styled-components'

function Chartstats({name, amount}) {
  return (
    <ChardStatsStyled>
        <p><b>{name}</b></p>
        <h4>{amount}</h4>
    </ChardStatsStyled>
  )
}

const ChardStatsStyled = styled.div`
    background-color: white;
    border-radius: 50px;
    border: 1px solid var(--border-colour);
    height: 9rem;
    width: 11rem;
    padding: 1.5rem;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    h4 {
        font-size: 2rem;
        color: var(--purple-primary);
    }
    p {
        color: black;
    }
`;

export default Chartstats