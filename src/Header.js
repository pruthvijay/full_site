import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from './logo.svg';
import './Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <h1>My Company</h1>
        </div>
        <nav>
          <div className="menu-icon" onClick={handleMenuClick}>
            {showMenu ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={showMenu ? 'menu-links show-menu' : 'menu-links'}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/form1">Form 1</Link>
            </li>
            <li>
              <Link to="/form2">Form 2</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
