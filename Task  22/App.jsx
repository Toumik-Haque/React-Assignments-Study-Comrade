import { BrowserRouter, Routes, Route } from "react-router-dom"

import Array from "./Array"
import Object from "./Object"
import Home from "./Home"

function App() {

  return(

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/array" element={<Array />} />
          <Route path="/object" element={<Object />} />
        </Routes>
      
      </BrowserRouter>
    
  )
}

export default App