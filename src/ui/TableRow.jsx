import React from 'react';
import Customer from '../Features/customers/Customer';
import Transactions from '../Features/transactions/Transactions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const StyledTableRow = styled.tr`
    border: 1px solid black;
    cursor: pointer;
    &:hover { 
        background-color: #698474;
        color: white;
    }
`;



export default function TableRow({ customer, customerTransacions, filter }) {


    const transactions = customerTransacions.filter(
        (transaction) => transaction.customer_id === Number(customer.id)
    );

    const isNameMatch = filter.name
        ? customer.name.toLowerCase().includes(filter.name.toLowerCase())
        : true;

    const isAmountMatch = (transaction) =>
        filter.amount ? transaction.amount === Number(filter.amount) : true;


    const filteredTransactions = transactions.filter(isAmountMatch);

    return (

        <StyledTableRow>
            {filteredTransactions.length > 0 && isNameMatch && (
                <>
                    <Customer customer={customer} />
                    <Transactions transactions={filteredTransactions} />
                    <td>

                        <Link to={`customerStats/${customer.id}`}>Customer Statistics</Link>
                    </td>

                </>

            )}
        </StyledTableRow>

    )
}


