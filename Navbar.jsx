import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/teamsection">TeamSection</Link></li>
      </ul>
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;
