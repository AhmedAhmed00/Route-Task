import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCustomers } from '../../services/customersApi'
import { getTransactions } from '../../services/transactionsApi'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { sumAmountsByDate } from '../../utilities/helpers'





export default function CustomerStats() {

    const { customerID } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [customer, setCustomer] = useState([])
    const [customerTransactions, setCustomerTransactions] = useState([])


    useEffect(() => {
        const fetchCustomer = async () => {
            setIsLoading(true)
            const customerRes = await getCustomers(customerID)
            const transactionsRes = await getTransactions(customerID)
            setCustomerTransactions(transactionsRes)
            setCustomer(customerRes)
            setIsLoading(false)
        }
        fetchCustomer()
    }, [customerID])



    if (isLoading) return <div>Loaaaaaaaaaaaading</div>







    const transactionsAfterSummedAmounts = sumAmountsByDate(customerTransactions);
    console.log(transactionsAfterSummedAmounts);
    console.log(customer);




    return (

        <>

            {customer.length && <h2>{customer[0].name}</h2>}

            <BarChart width={1000} height={250} data={transactionsAfterSummedAmounts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar dataKey="amount" fill="#82ca9d" />
            </BarChart>


            <div>


                {customerTransactions.map(transaction => <div>
                    {transaction.date}
                    <br />
                    {transaction.amount}

                </div>)}
            </div>

        </>


    )
}
