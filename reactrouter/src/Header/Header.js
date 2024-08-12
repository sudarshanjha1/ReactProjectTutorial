import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
      <nav style={{ marginLeft: 'auto' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center' }}>
          <li style={{ marginRight: '10px' }}>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li style={{ marginRight: '10px' }}>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    
    </header>
  );
}

export default Header;
