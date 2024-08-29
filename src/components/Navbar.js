import React from 'react';
import './Navbar.css';
import portoditImage from './assets/portodit.png'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <img src={portoditImage} alt="Portodit" />
      </div>
      <ul className="navbar-menu">
        <li><a href="#">Handson</a></li>
        <li><a href="https://portodit.cloud" target="_blank" rel="noopener noreferrer">Personal Site</a></li>
        <li><a href="https://instagram.com/yaaelahdit" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://linkedin.com/in/portodit" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
