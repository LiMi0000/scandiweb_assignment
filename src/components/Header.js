import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Header() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="header">
        <nav className="header_nav">
          <Link to="/Women.js">
            <a
              href="#"
              className={
                toggleState === 1 ? 'header_links active' : 'header_links'
              }
              onClick={() => {
                toggleTab(1);
              }}
            >
              Women
            </a>
          </Link>
          <Link to="/Men.js">
            <a
              href="#"
              className={
                toggleState === 2 ? 'header_links active' : 'header_links'
              }
              onClick={() => {
                toggleTab(2);
              }}
            >
              Men
            </a>
          </Link>
          <Link to="/Kids.js">
            <a
              href="#"
              className={
                toggleState === 3 ? 'header_links active' : 'header_links'
              }
              onClick={() => {
                toggleTab(3);
              }}
            >
              Kids
            </a>
          </Link>
        </nav>
        <Link to="/">
          <img
            src="https://img.icons8.com/color/48/26e07f/shopping-bag--v2.png"
            alt=""
            className="logo"
            onClick={() => {
              toggleTab(1);
            }}
          />
        </Link>
        <Link to="/Cart.js">
          <img
            alt=""
            className="icons_cart"
            src="https://img.icons8.com/windows/32/000000/shopping-cart.png"
          />
        </Link>
      </div>
    </>
  );
}

export default Header;
