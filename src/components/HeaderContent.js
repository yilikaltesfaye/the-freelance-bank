import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
import phone from '../img/phone.svg'
import ring1 from '../img/ring_orange.svg'
import message1 from '../img/message_pink.svg'
import message2 from '../img/message_blue.svg'

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
        <img src={phone} alt="" className='phone'/>
        <img src={ring1} alt="" className='ring1'/>
        <img src={message1} alt="" className='message1'/>
        <img src={message2} alt="" className='message2'/>
      </div>
    </HeaderContentStyled>
  )
}

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* padding-top: 3rem; */
  .left-content {
    display: flex;
    /* align-items: center; */
    padding-right: 4rem;
    h1 {
      padding-top: 10rem; //edited
      font-size: 2.8rem; //edited
      font-weight: 600;
    }
    .white{
      padding: 1.2rem 0;
      font-size: 14px;
      text-align: start;
      font-weight: 300;
      color: white;
      line-height: 1.1rem;
    }
  }
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 0.5rem; //edited
    .phone {
      width: 85%;
      position: relative;
      left: 15px;
    }
    .ring1 {
      position: absolute;
      bottom: 13%;
      right: 5%;
      left: auto;
      width: 15%;
    }
    .message1 {
      position: absolute;
      top: 0.6rem;
      right: 1rem;
      left: auto;
      width: 20%;
    }
    .message2 {
      position: absolute;
      bottom: 18%;
      left: 0;
      right: auto;
      width: 22%;
    }
  }
`;
export default HeaderContent
