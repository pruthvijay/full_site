import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="home-container">
      <div className="menu-icon" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={showMenu ? 'show' : ''}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
        <h1>Company Name</h1>
      </div>
    </div>
  );
}

export default Home;
