

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Table from "./Features/customers/Table"
import GlobalStyles from "./styles/styles"
import CustomerStats from "./Features/customers/CustomerStats"
import AppLayout from "./ui/AppLayout"




function App() {




  return (



    <BrowserRouter>
      <GlobalStyles />
      <Routes>

        <Route element=<AppLayout /> >
          <Route index element={<Table />} />
          <Route path="/customerStats/:customerID" element={<CustomerStats />} />
        </Route>


      </Routes>
    </BrowserRouter>


  )






}

export default App
