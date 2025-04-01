import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import './css/Navigation.css';

function Navigation() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav id="header-nav">
      <button onClick={toggleMenu}>...</button>
      <ul className={menuOpen?"":"hide-small"}id="nav-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/florence">Florence</Link></li>
        <li><Link to="/italy">Around Italy</Link></li>
        <li><Link to="/euro">Around Europe & Africa</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
