import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../src/assets/imgs/logo1.svg'


 function Header() {
  return (
    <>
        <nav className='navbar navbar-light bg-light navbar-expand-md justify-content-evenly d-flex'  >
          <img src={logo} alt="" className='navbar-brand px-5 mx-5' height={50}/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  justify-content-around" id="navbarNav">
            <div className="navbar-nav">
            <NavLink to="/" className='nav-item nav-link fs-4 '>Home</NavLink>
            <NavLink to="/Buy" className='nav-item nav-link fs-4'>Buy</NavLink>
            <NavLink to="/Sell" className='nav-item nav-link fs-4'>Sell</NavLink>
            <NavLink to="/AboutUs" className='nav-item nav-link fs-4'>About Us</NavLink>
            </div>
         </div>
        </nav>
    </>
  )
}

export default Header;
