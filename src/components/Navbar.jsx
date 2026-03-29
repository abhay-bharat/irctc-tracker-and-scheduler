import React from 'react';
import { Link } from 'react-router-dom';
import { Train, Clock, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar glass-panel">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <Train size={24} />
          </div>
          <span className="logo-text">RailTrack</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-item">
            <Search size={18} />
            <span>Search</span>
          </Link>
          <a href="#" className="nav-item">
            <Clock size={18} />
            <span>Live Map</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
