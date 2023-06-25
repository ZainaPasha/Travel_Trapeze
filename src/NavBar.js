import './App.css';
import React from 'react';
import { Link } from 'react-scroll';
import Explore from './Explore';
import Footer from './Footer';
import Hero from './Hero';


function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav-bar-class">
      <Link  to="Hero" spy={true} smooth={true} offset={20} duration={500} onClick={Hero}>
       Travel Trapeze
      </Link>  
      <div className="NavBarButtons">
      <Link  to="explore" spy={true} smooth={true} offset={-40} duration={500} onClick={Explore}>
          Explore
      </Link>
      <Link  to="Footer" spy={true} smooth={true} offset={50} duration={500} onClick={Footer}>
          About Us
      </Link>
      <Link  to="Footer" spy={true} smooth={true} offset={50} duration={500} onClick={Footer}>
          Donate
      </Link>
      <Link to='/create'>Sign Up</Link>
      <Link to='/create'>Login</Link>
      </div>   
      </nav>
      
    </div>
  );
}

export default NavBar;