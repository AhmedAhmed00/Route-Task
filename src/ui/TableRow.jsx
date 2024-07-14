import React from 'react';
import Customer from '../Features/customers/Customer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomerTransactions from './../Features/transactions/Transactions';




export const StyledTableRow = styled.tr`
    border: 1px solid #e5e7eb ;
    background-color: white;
    text-align: start;

`;


const LinkTd = styled.td`
a{
  text-decoration: none;
  color: var(--color-blue);
}

`



export default function TableRow({ customer, customerTransacions, filter }) {

    /*
    customerTransacions prop contains all the customers Transacions but i need only the ttransactions
    related to the specific customer (who has the customer.id === transaction customer_id)
    */

    const transactions = customerTransacions.filter(
        (transaction) => transaction.customer_id === Number(customer.id)
    );


    /*
     check if the customer's name matches the filter provided in the name input.
       If the name input is empty or does not contain any letters, return true (indicating a match).
    */
    const isNameMatch = filter.name
        ? customer.name.toLowerCase().includes(filter.name.toLowerCase())
        : true;

    /*
    check if the transaction amount matches the filter provided in the amount input.
    If the amount input is empty or does not contain any numbers, return true (indicating a match).
   */
    const isAmountMatch = (transaction) => filter.amount ? transaction.amount === Number(filter.amount) : true;


    /*
        filter transactions based on the amount input filter.
        if the amount input is empty or contains no numbers,  isMatchAmount equal true,
        meaning no transactions will be filtered out.
    */

    const filteredTransactions = transactions.filter(isAmountMatch);



    return (

        <StyledTableRow>
            {
                // render the row only if there's a match for the name and the filtered transactions.
                // if both the name and amount filter inputs are empty, this also means means all names and transactions match (true).
            }
            {filteredTransactions.length > 0 && isNameMatch && (
                <>
                    <Customer customer={customer} />
                    <CustomerTransactions transactions={filteredTransactions} />
                    <LinkTd>
                        <Link to={`customerStats/${customer.id}`}>Show Statistics &#x21D2;</Link>
                    </LinkTd>
                </>

            )}
        </StyledTableRow>

    )
}




