import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Movie from "./Movie"
import About from "./About"
import Contact from "./Contact"
import { movieContext } from "./movieContext"
import { useState, useEffect } from "react"


function App() {

  const [data, setData] = useState([])

  async function showData() {

    const res = await fetch('https://ghibliapi.vercel.app/films')
    const newData = await res.json()
    console.log(newData)
    setData(newData)
  }

  useEffect(
    () => {
      showData()
    }, []
  )

  return (

    <movieContext.Provider value={{ data }}>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </movieContext.Provider>

  )
}

export default App