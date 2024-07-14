import { Th } from './Th'





export default function TableHead() {
    return (
        <thead>
            <tr>
                <Th>Customer id</Th>
                <Th>Customer Name</Th>
                <Th>Transactions id</Th>
                <Th>Transactions Amout</Th>
                <Th>Transactions Date</Th>
                <Th>More Details</Th>
            </tr>
        </thead>
    )
}
