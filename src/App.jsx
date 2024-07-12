import { useEffect, useState } from "react"
import { getCustomers } from "./services/customersApi"
import { getTransactions } from "./services/transactionsApi"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Transactions from "./Features/transactions/Transactions"
import Table from "./Features/customers/Table"
import GlobalStyles from "./styles/styles"




function App() {




  return (



    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Table />} />
        <Route path="/transactions/:transactionId" element={<Transactions />} />
      </Routes>
    </BrowserRouter>


  )






}

export default App
