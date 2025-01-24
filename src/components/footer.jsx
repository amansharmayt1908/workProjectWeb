import React from 'react';
import './footer.css';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import logo from '../images/logo.png'; // Adjust the path based on your logo location

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="3OTOL" />
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="footer-nav-row">
            <a href="/shop">Shop</a>
            <a href="/contact">Contact us</a>
            <a href="/about">About</a>
            <a href="/journal">Journal</a>
            <a href="/custom">Custom</a>
          </div>
          
          <div className="footer-nav-row">
            <a href="/faq">FAQ's</a>
            <a href="/returns">Returns</a>
            <a href="/ordering">Ordering</a>
            <a href="/shipping">Shipping</a>
            <a href="/personalization">Personalization Policies</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 3OTOL. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
