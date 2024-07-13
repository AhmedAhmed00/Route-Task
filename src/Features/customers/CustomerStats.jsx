import { useParams } from 'react-router-dom'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { formatPrice, sumAmountsByDate } from '../../utilities/helpers'
import useDb from '../hooks/useDb'
import Transactions from '../transactions/Transactions'
import styled from 'styled-components'
import { StyledTable, Th } from './Table'
import { StyledTableRow } from '../../ui/TableRow'






const Chart = styled.div`
display: grid;
place-items:center;
`
const H2 = styled.h2`
text-align: center;

`

const Td = styled.td`
padding: 10px;
font-size: 18px;



`


export default function CustomerStats() {

    const { customerID } = useParams()
    const { tables: { customers, transactions }, isLoading } = useDb(customerID)

    if (isLoading) return <div>Loooodin</div>

    const transactionsAfterSummedAmounts = transactions && sumAmountsByDate(transactions)
    // console.log(transactionsAfterSummedAmounts);
    // console.log(customer);
    // console.log(transactions);

    return (

        <>


            {customers?.length && <H2> {customers[0].name}</H2>}
            <Chart>
                <BarChart width={1000} height={450} data={transactionsAfterSummedAmounts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Bar dataKey="amount" fill="#82ca9d" />
                </BarChart>
            </Chart>



            {/* <Chart>
                <LineChart width={1000} height={450} data={transactionsAfterSummedAmounts}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                </LineChart>
            </Chart> */}

            <StyledTable>
                <thead>
                    <tr>
                        <Th>Transactions Id</Th>
                        <Th>Transactions Amout</Th>
                        <Th>Transactions Date</Th>
                    </tr>
                </thead>
                <tbody>
                    <StyledTableRow>
                        <Transactions transactions={transactions} />
                    </StyledTableRow>
                </tbody>
                <tfoot>
                    <tr>
                        <Td colSpan={3}>
                            total Amount : {formatPrice(transactions?.reduce((acc, item) => { return acc + item.amount }, 0))}
                        </Td>
                    </tr>
                </tfoot>
            </StyledTable>

        </>


    )
}
