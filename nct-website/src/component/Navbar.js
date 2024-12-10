import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='navbar-logoname'>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          NCT 
        </Link>
        <i className="NCT-logo">
            <img src="/image/NCT-logo.png" alt="NCT Logo" className="logo-image" />
          </i>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nct127" className="nav-links" onClick={closeMobileMenu}>
              NCT127
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nctdream" className="nav-links" onClick={closeMobileMenu}>
              NCT Dream
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nctwish" className="nav-links" onClick={closeMobileMenu}>
              NCT Wish
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
