import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getTransactions } from '../../services/transactionsApi'

export default function Transactions({ transactions }) {


    // console.log(transaction);




    return (


        <>
            <td>
                <ul>
                    {
                        transactions?.map(transaction =>
                            <>
                                <li>{transaction.id}</li>
                            </>)
                    }
                </ul>
            </td>
            <td>
                <ul>
                    {
                        transactions?.map(transaction =>
                            <>
                                <li>{transaction.amount}</li>
                            </>)
                    }

                    {/* <li>total : {transactions.reduce((acc, item) => { return acc + item.amount }, 0)}</li> */}
                </ul>
            </td>
            <td>
                show More Details
            </td>

        </>





    )
}
