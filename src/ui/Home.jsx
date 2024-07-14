import React, { useState } from 'react'
import styled from 'styled-components'
import TableRow from './TableRow'
import Filter from './Filter'
import Heading from './Heading'
import useDb from '../Features/hooks/useDb'
import TableHead from './TableHead'
import Loader from './Loader'


export const StyledTable = styled.table`
text-transform: capitalize;
width: 100%;
text-align: center;
/* border: 2px solid #e5e7eb; */
border-radius: 15px;
border-collapse: collapse;
border-spacing: 0px 3px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
/* table-layout: fixed; */
background-color: var(--color-blue);
`





export default function Home() {

    const [filter, setFilter] = useState({ name: '', amount: '' });
    const { isLoading, tables } = useDb()
    const { customers, transactions } = tables

    if (isLoading) return <Loader />


    return (
        <div>
            <Heading customers={customers} transactions={transactions} />
            <Filter filter={filter} setFilter={setFilter} />
            <StyledTable>
                <TableHead />
                <tbody>
                    <>
                        {
                            customers?.map(customer =>
                                <TableRow key={customer.id} customerTransacions={transactions} filter={filter} customer={customer} />
                            )
                        }
                    </>
                </tbody>
            </StyledTable>
        </div>
    )
}
