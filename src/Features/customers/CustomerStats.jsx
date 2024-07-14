import { useParams } from 'react-router-dom'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { formatPrice, sumAmountsByDate } from '../../utilities/helpers'
import useDb from '../hooks/useDb'
import styled from 'styled-components'
import { StyledTableRow } from '../../ui/TableRow'
import { Th } from '../../ui/Th'
import Loader from '../../ui/Loader'
import { StyledTable } from './../../ui/Home';
import CustomerTransactions from '../transactions/Transactions'
import { RadioInput } from '../../ui/RadioInput'
import { RadioLabel } from '../../ui/RadioLabel'
import { useState } from 'react'

const H1 = styled.h1`
color: var(--color-blue);
text-align: center;


`

const RadioContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`

const Td = styled.td`
padding: 10px;
font-size: 18px;
`




export default function CustomerStats() {

    const { customerID } = useParams()
    const { tables: { customers, transactions }, isLoading } = useDb(customerID)
    const [chartType, setChartType] = useState("bar")


    function handleChartChange(e) {
        setChartType(e.target.value)
    }
    // console.log(chartType);
    if (isLoading) return <Loader />

    const transactionsAfterSummedAmounts = transactions && sumAmountsByDate(transactions)
    // console.log(transactionsAfterSummedAmounts);
    // console.log(customer);
    // console.log(transactions);

    return (

        <div>

            {customers?.length && <H1>{customers[0].name}</H1>}

            {chartType === 'bar' && <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    data={transactionsAfterSummedAmounts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={50} wrapperStyle={{ fontSize: 18 }} />
                    <Bar name='Transactions Amount' maxBarSize={100} dataKey="amount" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>}





            {chartType === "line" &&
                <ResponsiveContainer width="100%" height={500}>
                    <LineChart width={1000} height={550} data={transactionsAfterSummedAmounts}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={50} wrapperStyle={{ fontSize: 18 }} />
                        <Line name='Transactions Amount' type="monotone" dataKey="amount" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

            }


            <RadioContainer>
                <RadioInput
                    onChange={handleChartChange}
                    checked={chartType === 'bar'}
                    type='radio' value='bar' id='bar' name='chart' />
                <RadioLabel htmlFor="bar">Bar</RadioLabel>
                <RadioInput
                    onChange={handleChartChange}
                    checked={chartType === 'line'}
                    type='radio' value='line' id='line' name='chart' />
                <RadioLabel htmlFor="line">Line</RadioLabel>
            </RadioContainer>

            <StyledTable  >
                <thead>
                    <tr>
                        <Th>Transactions Id</Th>
                        <Th>Transactions Amout</Th>
                        <Th>Transactions Date</Th>
                    </tr>
                </thead>
                <tbody>
                    {transactions && <StyledTableRow>
                        <CustomerTransactions transactions={transactions} />
                    </StyledTableRow>}
                </tbody>
                <tfoot>
                    <tr>
                        <Td colSpan={3} style={{ color: "white" }}>
                            total Amount: {formatPrice(transactions?.reduce((acc, item) => { return acc + item.amount }, 0))}
                        </Td>
                    </tr>
                </tfoot>
            </StyledTable >

        </div >


    )
}
