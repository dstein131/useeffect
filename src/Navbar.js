// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/user-details">User Details</Link>
        </li>
        <li>
          <Link to="/data-components">Data Components</Link>
        </li>
        <li>
            <Link to="/form-control">Form Control</Link>
        </li>
        <li>
          <Link to="/user-profile">User Profile</Link>  
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
