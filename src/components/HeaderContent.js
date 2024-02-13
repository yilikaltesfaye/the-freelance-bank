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
  .left-content {
    display: flex;
    padding-right: 4rem;
    h1 {
      padding-top: 10rem; //edited
      font-size: 2.8rem; //edited
      font-weight: 600;
    }
    .white{
      padding: 1.2rem 0;
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
      width: 87%;
      position: relative;
      left: 15px;
    }
    .ring1 {
      position: absolute;
      bottom: 15%;
      right: 8%;
      /* left: auto; */
      width: 16%;
      animation: move2 20s infinite;
      transition: all .4s ease-in-out;
    }
    .message1 {
      position: absolute;
      top: 0.6rem;
      right: 1rem;
      left: auto;
      width: 20%;
      animation: move1 5s infinite;
      transition: all .4s ease-in-out;
    }
    .message2 {
      position: absolute;
      bottom: 18%;
      left: 0;
      right: auto;
      width: 22%;
      animation: move1 8s infinite;
      animation-delay: .5s;
      transition: all .4s ease-in-out;
    }
  }

  //Header Animations
    @keyframes move1 {
      0%{
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50%{
        transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
      }
      100%{
        transform: translateY(0) rotate(0) scale(1)  translateX(0);
      }
    }
    @keyframes move2 {
      0%{
        transform: translateY(0) rotate(0) scale(1) translateX(0);
      }
      50%{
        transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
      }
      100%{
        transform: translateY(0) rotate(0) scale(1)  translateX(0);
      }
    }
`;
export default HeaderContent
