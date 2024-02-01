import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
import phone from '../img/phone.svg'

function HeaderContent() {
  return (
    <HeaderContentStyled>
      <div className="left-content">
        <div className="left-left-container">
          <h1>Smart banking for freelancers</h1>
          <p className="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis optio blanditiis cumque reprehenderit, cupiditate aliquam suscipit eum quibusdam maiores nostrum provident qui a ipsum illum repellendus delectus voluptas perferendis corporis.
          </p>
          <SecondaryButton name={'Register Now'} />
        </div>
      </div>
      <div className="right-content">
        <img src={phone} alt="" />
      </div>
    </HeaderContentStyled>
  )
}

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .left-content {
    display: flex;
    align-items: center;
    padding-right: 3rem;
    h1 {
      font-size: 4rem;
      font-weight: 600;
    }
    .white{
      padding: 1.4rem 0;
      line-height: 1.8rem;
    }
  }
`;
export default HeaderContent
