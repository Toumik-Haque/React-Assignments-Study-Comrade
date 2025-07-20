import { Offcanvas } from 'bootstrap'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(
    () => {
      const token = localStorage.getItem("token")
      if (token != null) {
        setLogin(true)
      }
    }
  )

  function handleLogout() {
    localStorage.removeItem("token")
    setLogin(false)
    navigate('/')
  }

  return (

    <nav className="navbar navbar-light bg-primary sticky-top">
      <div className="container-fluid">

        {/* Brand Name */}
        <Link to='/' className="navbar-brand ms-3 text-white fw-bold d-md-none">eCommerce</Link>

        {/* Toggle Button for offcanvas*/}
        <button
          className="navbar-toggler border-0 shadow-none d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FaBars size={22} color='white'/>
        </button>


        {/* Inline navbar menu (visible on md+ screens) */}
        <div className="d-none d-md-flex container">

          {/* Brand Name */}
          <Link to='/' className="navbar-brand text-white fw-bold d-none d-md-block">eCommerce</Link>
          
          <ul className="navbar-nav d-flex flex-row gap-4 ms-5">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-white">Cart</Link>
            </li>
          </ul>

          <div className=' ms-auto'>
            {
              login && (
                <button type="button" className='btn bg-white text-danger' onClick={handleLogout}>Logout</button>
              )
            }
          </div>

        </div>

        {/* Offcanvas menu (only visible on mobile/tablet) */}
        <div
          className="offcanvas offcanvas-end d-md-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header mx-2 mt-1">
            {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas" // it close the offcanvas
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body ms-3">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/" className="nav-link active" onClick={() => Offcanvas.hide()} aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link" onClick={() => Offcanvas.hide()}>Cart</Link>
              </li>
              <li className="nav-item">
                {
                  login && (
                    <Link className="nav-link text-danger" onClick={() => { handleLogout(); Offcanvas.hide() }}>Logout</Link>
                  )
                }
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
