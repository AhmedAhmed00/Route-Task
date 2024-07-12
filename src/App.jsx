import { useEffect, useState } from "react"
import { getCustomers } from "./services/customersApi"
import { getTransactions } from "./services/transactionsApi"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Transactions from "./Features/transactions/Transactions"
import Table from "./Features/customers/Table"
import GlobalStyles from "./styles/styles"




function App() {

  const [costumers, setCustomers] = useState([])
  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [allData, setAllData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      const customersData = await getCustomers()
      const transacitonsData = await getTransactions()
      setTransactions(transacitonsData)
      setAllData({ transacionts: transacitonsData, customers: customersData })
      setIsLoading(false)
    }
    fetchData()


  }, [])

  if (isLoading) return <div>loaaaaaaaaading</div>




  return (



    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Table allData={allData} />} />
        <Route path="/transactions/:transactionId" element={<Transactions />} />
      </Routes>
    </BrowserRouter>


  )






}

export default App
