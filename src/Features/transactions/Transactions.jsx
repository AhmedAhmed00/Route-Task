import { CiCalendarDate } from 'react-icons/ci'
import { formatDate, formatPrice } from '../../utilities/helpers'
import styled from 'styled-components'
import { TdHasIcon } from '../../ui/TdHasIcon'
import List from '../../ui/List'


export const Amount = styled.li`
color: var(--color-green);
`

export default function CustomerTransactions({ transactions }) {


    //  array of each prop to render each prop's items in a single td inside unordered list.

    const ids = transactions?.map(transaction => transaction.id)
    const dates = transactions?.map(transaction => transaction.date)
    const amounts = transactions?.map(transaction => transaction.amount)

    //  using the render props pattern because there are three rendering processes with the same ui but with different arrays.
    //   i learned this pattern from the ultimate react course in udemey (jonas)

    return (
        <>
            <List items={ids} render={(id) => <li key={id}>{id}</li>} />
            <List items={dates} render={(date, i) =>
                <TdHasIcon key={i}>
                    <CiCalendarDate />
                    {formatDate(date)}
                </TdHasIcon>} />
            <List items={amounts} render={(amount, i) => <Amount key={i} >{formatPrice(amount)}</Amount>} />
        </>


    )
}
