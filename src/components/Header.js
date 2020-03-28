import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import productContext from "../contexts/productContext";
import Logo from "../img/Logo.png";

const Header = () => {
  const { store } = useContext(productContext);

  return (
    <Fragment>
      <nav
        className='navbar navbar-expand-lg  py-3 '
        style={{ backgroundColor: "#ff8a00" }}>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={Logo} alt='Shoppy' style={{ width: "160px" }} />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='nav-link text-white' to={"/about-us"}>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to={"/contact-us"}>
                  Contact Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to={"/cart"}>
                  Cart ({store.cart.length})
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/create-product'>
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
