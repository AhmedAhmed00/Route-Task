import { useEffect, useState } from 'react'
import { getCustomers } from '../../services/customersApi'
import { getTransactions } from '../../services/transactionsApi'

export default function useDb(customerId = "") {




    const [isLoading, setIsLoading] = useState(false)
    const [tables, setTables] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const customersData = await getCustomers(customerId)
            const transacitonsData = await getTransactions(customerId)
            setTables({ transactions: transacitonsData, customers: customersData })
            setIsLoading(false)
        }
        fetchData()
    }, [customerId])

    return { isLoading, tables }
}
