import React from 'react';
import logo from '../JPlogo3.png';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <div className="container justify-content-space-between">
        <a href="#about">
          <img src={logo} alt="JP" />
        </a>
        <div className="container justify-content-end mt-1">
          <a href="#about" onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">About</h3>
          </a>
          <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">Portfolio</h3>
          </a>
          <a href="#contact" onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">Contact</h3>
          </a>
          <a href="#resume" onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mb-0 px-1">Resume</h3>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
