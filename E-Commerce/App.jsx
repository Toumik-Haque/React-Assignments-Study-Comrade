import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Register from "./Register"
import Products from "./Products"
import ProductDes from "./ProductDes"
import Cart from "./Cart"
import { productsContext } from "./productsContext"
import { useState, useEffect } from "react"

function App() {

    const [products, setProducts] = useState([])
    async function fetchProducts() {

        const res = await fetch('https://fakestoreapi.com/products/')
        const data = await res.json()

        setProducts(data) // products = data = array
    }
    useEffect(
        () => {
            fetchProducts()
        },

        [] // this dependency helps to call the function one time only
    )

  return(

    <productsContext.Provider value={{products}}>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-description/:id" element={<ProductDes />}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
      </BrowserRouter>

    </productsContext.Provider>
    
  )
}

export default App