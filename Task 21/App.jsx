import { BrowserRouter, Routes, Route } from "react-router-dom"

import Employee from "./Employee"
import Product from "./Product"
import Home from "./Home"

function App() {

  return(

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      
      </BrowserRouter>
    
  )
}

export default App