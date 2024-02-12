import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts';
import Card from './card';
import card from '../img/creditcard.svg'
import active from '../img/active.svg'
import inactive from '../img/inactive.svg'
import check from '../img/check.svg'
import checkdisabled from '../img/check-disabled.svg'

function PaymentSection() {
  return (
    <PaymentStyled>
        <InnerLayout>
            <h3 className="small-heading">
                An exceptional service, 
                <span>at the right place</span>
            </h3>
            <p className='center-p'>Start with our free plan and switch to premium as you grow.</p>
            <div className="card-container">
                <Card 
                    account={'Free'}
                    amount={'$0'}
                    text={'Manage your Business with a simple and efficient account.'}
                    button={'Get Started'}
                    Card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkdisabled = {checkdisabled}
                    text1={'10 free local transfers'}
                    text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                    text3={'Free payments to other Draft accounts'}
                    text4={'Prepaid Debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 Currencies'}
                    text8={'Multi-user access'}
                    />

                <Card 
                    account={'Premium'}
                    amount={'$30'}
                    text={'Manage your Business with a simple and efficient account.'}
                    button={'Get Started'}
                    Card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkdisabled = {checkdisabled}
                    text1={'10 free local transfers'}
                    text2={'Free ATM withdrawals in Dollar up to $250 per month'}
                    text3={'Free payments to other Draft accounts'}
                    text4={'Prepaid Debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 Currencies'}
                    text8={'Multi-user access'}
                    />
            </div>
        </InnerLayout>
    </PaymentStyled>
)

}

const PaymentStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 3.5rem;
    }
`;

export default PaymentSection
