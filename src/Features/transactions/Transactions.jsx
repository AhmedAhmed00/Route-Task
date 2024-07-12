import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getTransactions } from '../../services/transactionsApi'

export default function Transactions({ transactionId }) {
    // const { transactionId } = useParams()
    // // const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        const fetchTransactions = async () => {
            setIsLoading(true)
            const data = await getTransactions(transactionId)
            setIsLoading(false)
            setTransactions(data)
            console.log(transactions);
        }
        fetchTransactions()

    }, [])

    if (isLoading) return <div>loaaaaaaaaaaading trans</div>


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

                </ul>
            </td>

        </>





    )
}
