import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img className="App-logo" src="/logo.png" alt="Logo" />
          </div>
          <div className="menu-icon" onClick={handleMenuClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav>
            <ul className={showMenu ? "show" : ""}>
              <li>
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>About</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
