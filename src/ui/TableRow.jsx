import React from 'react'
import Customer from '../Features/customers/Customer'
import Transactions from '../Features/transactions/Transactions'

export default function TableRow({ customer, transactionId }) {
    return (
        <tr>
            <Customer customer={customer} />
            <Transactions transactionId={transactionId} />
        </tr>
    )
}
