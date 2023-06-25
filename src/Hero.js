import './App.css';
import React from 'react';
import Website_logo from './Website_logo.png';

function Hero() {
  return (
    <div className="Hero">
      <div className='decor-class'></div>
      <div className='hero-main'>
      <div className='hero-text'>
        Life's better with a backpack.
        <p className='hero-subtext'>Make your dreams come true.</p>
      </div>
      <div className='hero-image'>
        <img src={Website_logo} alt="Logo"/>
      </div>
      </div>
    </div>
  );
}

export default Hero;
