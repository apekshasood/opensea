import React from 'react'
import logo from '../Images/logo.png'
function Navbar() {
  return (
    <nav className="navbar pb-5">
      <div className="container-fluid container">
        <a className="navbar-brand text-white font-weight-bold">
          <span className="companyLogo">
            <img src={logo} alt="" />
          </span>
          <span className="companyName"> OpenSea</span>
        </a>
        <form className="d-flex search" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  )
}

export default Navbar
