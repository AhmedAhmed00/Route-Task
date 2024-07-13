import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TableRow from '../../ui/TableRow'
import Filter from '../../ui/Filter'
import { getCustomers } from '../../services/customersApi'
import { getTransactions } from '../../services/transactionsApi'


const StyledTable = styled.table`
border: 1px solid black;
border-radius: 8px;
font-size: 20px;
text-transform: capitalize;
width: 100%;
text-align: center;
`

const Th = styled.th`
padding:10px ;  
`



export default function Table() {



    const [isLoading, setIsLoading] = useState(false)
    const [tables, setTables] = useState([])
    const [filter, setFilter] = useState({ name: '', amount: '' });


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const customersData = await getCustomers()
            const transacitonsData = await getTransactions()
            setTables({ transactions: transacitonsData, customers: customersData })
            setIsLoading(false)
        }
        fetchData()
    }, [])



    if (isLoading) return <div>loaaaaaaaaading</div>


    return (
        <>
            <Filter filter={filter} setFilter={setFilter} />
            <StyledTable>
                <thead >
                    <Th>Customer id</Th>
                    <Th>Customer Name</Th>
                    <Th>Transactions id</Th>
                    <Th>Transactions Amout</Th>
                </thead>
                <tbody>
                    {
                        tables.customers?.map(customer =>
                            <TableRow customerTransacions={tables.transactions} filter={filter} customer={customer} />
                        )
                    }

                </tbody>



            </StyledTable>
        </>
    )
}
