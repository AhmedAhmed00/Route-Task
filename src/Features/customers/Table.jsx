import React, { useState } from 'react'
import styled from 'styled-components'
import TableRow from '../../ui/TableRow'
import Filter from '../../ui/Filter'
import Heading from '../../ui/Heading'
import useDb from '../hooks/useDb'


export const StyledTable = styled.table`
text-transform: capitalize;
width: 100%;
text-align: center;
border: 2px solid #e5e7eb;
border-radius: 20px;
border-collapse: separate;
border-spacing: 0px 3px;
background-color: #f9fafb;
`

export const Th = styled.th`
padding:20px  ; 

`



export default function Table() {




    const [filter, setFilter] = useState({ name: '', amount: '' });

    const { isLoading, tables } = useDb()


    if (isLoading) return <div>loaaaaaaaaading</div>

    const { customers, transactions } = tables


    return (
        <>
            <Heading customers={customers} transactions={transactions} />
            <Filter filter={filter} setFilter={setFilter} />
            <StyledTable>
                <thead>
                    <tr>
                        <Th>Customer id</Th>
                        <Th>Customer Name</Th>
                        <Th>Transactions id</Th>
                        <Th>Transactions Amout</Th>
                        <Th>Transactions Date</Th>
                        <Th>More Details</Th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {
                            tables.customers?.map(customer =>
                                <TableRow customerTransacions={tables.transactions} filter={filter} customer={customer} />
                            )
                        }
                    </>

                </tbody>



            </StyledTable>
        </>
    )
}
