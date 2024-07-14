import React from 'react'
import { AiOutlineTransaction } from 'react-icons/ai'
import { RiCustomerService2Fill } from 'react-icons/ri'
import styled from 'styled-components'


const StyledHeading = styled.div`
display: flex;
justify-content: center;
background-color: #fff;
margin: auto;
margin-top: 20px;
padding: 15px 0;
margin-bottom: 20px;
border-radius: 20px;
border: 1px solid #707FDD;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const Div = styled.div`
width: calc(100% /2 );
display: flex;
padding: 10px;
align-items: center;
justify-content: center;
&:first-of-type{ 
    border-right: 1px solid gray;
}



`
const Ul = styled.ul`
padding: 0 15px;
text-align: center;
`
const Li = styled.li`
font-size: 22px;
font-weight: bold;
color: var(--color-green);
`

const Total = styled.li`
font-size: 20px;

padding: 0;
font-weight: bold;
color: var(--color-blue);



`

const Icon = styled.i`
font-size: 30px;
padding: 15px;
color: #00AC4F;
background-color: #D3FFE7;
display: grid;
border-radius: 50%;
`



export default function Heading({ customers, transactions }) {

    const totalCustomers = customers?.length
    const totalTransactions = transactions?.length
    // console.log(totalCustomers);
    // console.log(totalTransactions);


    return (
        <header>
            <h1>Customers Transactions</h1>
            <StyledHeading>
                <Div>
                    <Icon>
                        <RiCustomerService2Fill />
                    </Icon>
                    <Ul>
                        <Li>Total Customers</Li>
                        <Total>{totalCustomers}</Total>
                    </Ul>
                </Div>
                <Div>
                    <Icon>
                        <AiOutlineTransaction />

                    </Icon>
                    <Ul>
                        <Li>Total Transactions</Li>
                        <Total>{totalTransactions}</Total>
                    </Ul>
                </Div>
            </StyledHeading>
        </header>
    )
}
