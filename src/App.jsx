

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Table from "./Features/customers/Table"
import GlobalStyles from "./styles/styles"
import CustomerStats from "./Features/customers/CustomerStats"




function App() {




  return (



    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Table />} />
        <Route path="/customerStats/:customerID" element={<CustomerStats />} />
      </Routes>
    </BrowserRouter>


  )






}

export default App
