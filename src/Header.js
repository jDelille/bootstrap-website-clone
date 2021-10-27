import React from 'react'
import NavbarLogo from './images/navbar-logo.svg'
import './Header.css'


window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    document.querySelector('header').classList.add('scrolled')
    document.querySelector('.logo').classList.remove('top-logo')
    document.querySelector('.nav-links').classList.remove('top-links')
  } else {
    document.querySelector('header').classList.remove('scrolled')
    document.querySelector('.logo').classList.add('top-logo')
    document.querySelector('.nav-links').classList.add('top-links')

  }
}


export default function Header() {
    return (
            <header>
            <nav>
                <div className="brand">
                    <img src={NavbarLogo} className="logo" alt="" /> 
                </div>
                <ul className="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
