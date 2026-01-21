import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LIBRO.</div>
      <div style={{display: 'flex', gap: '2rem'}}>
        <span style={{cursor: 'pointer'}}>Library</span>
        <span style={{cursor: 'pointer'}}>Authors</span>
        <span style={{cursor: 'pointer'}}>Pricing</span>
      </div>
    </nav>
  );
};

export default Navbar;