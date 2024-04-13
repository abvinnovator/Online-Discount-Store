import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import './styles/Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const state = useSelector((state)=>state.handleCart)
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
      <Link to="/" className="navbar-brand">
          <img src="https://res.cloudinary.com/dtonbpwvj/image/upload/v1709893402/d3ykk0iwbw6rsu1dnsbt.png" alt="Your Logo" className="logo" style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
        </Link>
        <button className="navbar-toggler" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={toggleNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={toggleNavbar}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" onClick={toggleNavbar}>Products</Link>
            </li>
            <li className="nav-item">
  <Link to="/cart" className="nav-link" onClick={toggleNavbar}>
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <FaShoppingCart />
      <span style={{
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        
        color: '#fff',
        borderRadius: '50%',
        padding: '3px 0px',
        fontSize: '12px',
      }}>{state.length}</span>
    </span>
  </Link>
</li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
