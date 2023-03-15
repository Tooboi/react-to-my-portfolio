import React from 'react';
import logo from '../JPlogo3.png';
import { Link } from 'react-router-dom';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <div className="container justify-content-space-between">
        <Link to="/">
          <img src={logo} alt="JP" />
        </Link>
        <div className="container justify-content-end mt-1">
          <Link to="/" onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">About</h3>
          </Link>
          <Link to="/portfolio" onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">Portfolio</h3>
          </Link>
          <Link to="/contact" onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">Contact</h3>
          </Link>
          <Link to="/resume" onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">Resume</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
