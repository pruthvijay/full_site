import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <ul className="Menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/googleform">Google Form</Link></li>
    </ul>
  );
}

export default Menu;