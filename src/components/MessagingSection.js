import React from 'react'
import { InnerLayout } from '../styles/layouts'
import styled from 'styled-components'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4 from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg'
import conversation from '../img/conversation.svg'
import circlesbg from '../img/bg_circles.svg'

function MessagingSection() {
  return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-container">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            We support you  in 5 different languages 
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero mollitia quasi? Vitae praesentium eveniet fugit blanditiis. Optio laboriosam sapiente dolor numquam corporis.
                        </p>
                        <div className="images-container">
                            <img src={avatar1} alt="" className="image-1" />
                            <img src={avatar2} alt="" className="image-2" />
                            <img src={avatar3} alt="" className="image-3" />
                            <img src={avatar4} alt="" className="image-4" />
                            <img src={avatar5} alt="" className="image-5" />
                            <p>&nbsp; +25</p>
                        </div>
                        <img src={circlesbg} alt="" className="bgcircle" />
                    </div>
                    <div className="right-items">
                        <img src={circlesbg} alt="" className="bgcircle" />
                        <img src={conversation} alt="" className='conversation-img'/>
                    </div>
                </div>
            </InnerLayout>
        </MessageStyle>
    )
}

const MessageStyle = styled.section`
    .message-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .left-items {
        position: relative;
        padding: 2rem;
        p {
            padding: 1rem 0;
        }
        .images-container {
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5 {
                margin-left: -22px;
            }
        }
        .bgcircle {
            position: absolute;
            top: -5%;
            left: -5%;
            z-index: -1;
        }
    }
    
    .right-items {
        position: relative;
        .conversation-img {
            padding-left: 2rem;
            width: 65vh;
        }
        .bgcircle {
            position: absolute;
            bottom: -5%;
            right: -5%;
            width: 20vh;
            z-index: -1;
        }
    }
`;

export default MessagingSection