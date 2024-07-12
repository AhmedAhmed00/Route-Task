import React, { useState } from 'react'
import styled from 'styled-components'
import Customer from './Customer'
import { useNavigate } from 'react-router-dom'
import Transactions from '../transactions/Transactions'
import TransactionsHeader from '../transactions/TransactionsHeader'
import TableRow from '../../ui/TableRow'


const StyledTable = styled.table`
border: 1px solid black;
font-size: 20px;
text-transform: capitalize;
width: 100%;
text-align: center;
`

const Tr = styled.tr`
border: 1px solid black;


`
const Th = styled.th`
padding:10px ;
border: 1px solid black;
`


export default function Table({ allData }) {
    const { customers, transactions } = allData


    return (
        <StyledTable>
            <thead>
                <Th>Customer id</Th>
                <Th>Customer Name</Th>
                <Th>Transactions id</Th>
                <Th>Transactions Amout</Th>
            </thead>
            <tbody>
                {
                    customers?.map(customer =>
                        <TableRow customer={customer} transactionId={customer.id} />
                    )
                }

            </tbody>



        </StyledTable>
    )
}
