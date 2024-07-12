import React from 'react';
import Customer from '../Features/customers/Customer';
import Transactions from '../Features/transactions/Transactions';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
    border: 1px solid black;
    cursor: pointer;
    &:hover { 
        background-color: #698474;
        color: white;
    }
`;

export default function TableRow({ customer, tables, filter }) {

    const transactions = tables.transactions.filter(
        (transaction) => transaction.customer_id === customer.id
    );

    const isAmountMatch = (transaction) =>
        filter.amount ? transaction.amount === Number(filter.amount) : true;

    const isNameMatch = filter.name
        ? customer.name.toLowerCase().includes(filter.name.toLowerCase())
        : true;

    const filteredTransactions = transactions.filter(isAmountMatch);

    return (
        <StyledTableRow>
            {filteredTransactions.length > 0 && isNameMatch && (
                <>
                    <Customer customer={customer} />
                    <Transactions transactions={filteredTransactions} />
                </>
            )}
        </StyledTableRow>
    );
}
