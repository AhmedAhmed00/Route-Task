import { formatDate, formatPrice } from '../../utilities/helpers'

export default function Transactions({ transactions }) {





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
                                <li>{formatPrice(transaction.amount)}</li>

                            </>)
                    }

                </ul>

            </td>
            <td>
                <ul>
                    {
                        transactions?.map(transaction =>
                            <>
                                <li>{formatDate(transaction.date)}</li>

                            </>)
                    }

                    {/* <li>total : {transactions.reduce((acc, item) => { return acc + item.amount }, 0)}</li> */}
                </ul>

            </td>


        </>





    )
}
