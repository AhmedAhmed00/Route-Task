

import { BrowserRouter, Route, Routes } from "react-router-dom"

import GlobalStyles from "./styles/styles"
import CustomerStats from "./Features/customers/CustomerStats"
import AppLayout from "./ui/AppLayout"
import Home from "./ui/Home"
import { Suspense } from "react"
import Loader from "./ui/Loader"

function App() {


  return (



    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={<Loader />} >
        <Routes>
          <Route element=<AppLayout /> >
            <Route index element={<Home />} />
            <Route path="/customerStats/:customerID" element={<CustomerStats />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >


  )






}

export default App
