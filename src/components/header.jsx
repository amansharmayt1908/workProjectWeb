import React from 'react'
import './header.css'
import headerLogo from '../assets/headerlogo.png'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={headerLogo} alt="BOTOL" />
      </div>
      <nav className="nav-links">
        <a href="#shop">Shop</a>
        <a href="#contact">Contact us</a>
        <a href="#about">About</a>
        <a href="#journal">Journal</a>
        <a href="#custom">Custom</a>
      </nav>
      <button className="inquiry-btn">Inquiry Now</button>
    </header>
  )
}

export default Header
