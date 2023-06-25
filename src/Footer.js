import './App.css';
import React from 'react';

function Footer() {
  return (
    <div className="Footer">

      <div className='decor-class'></div>

      <div className='footer-main'>
        <div className='footer-info'>
        <p className='about-us'><a>About Us</a> 
        <div className='text-box'>Travel Trapeze is a trusted, user-friendly
        platform to help tourists have their best times exclusively in Switzerland.</div>
        </p>
        <p className='contact-us'>
        <a>Contact</a>
        <div className='text-box'>
        Email: traveltrapeze@example.com            
        <p>Phone no: 89573 89912</p></div>
        </p>
        <p className='feedback'><a>Feedback</a>
        <div className='text-box'>
          <input className='feedback-input' type='text' placeholder='Please give in your feedback!'/>
          <p>  </p>
          <input className="feedback-submit" type='submit' placeholder='Submit'/>
        </div>
        </p>
        <p className='donate'><a>Donate</a>
        <div className='text-box'>
        <input className="donate-input" type="number" min="1" placeholder="Donate a dollar!" />
        <p> </p>
        <button className="donate-submit">Donate</button>
        </div>
        </p>
        </div>
        <div className='footer-copyright'>
        <footer className='footer-official'>
             @Copyright Travel Trapeze
        </footer>
      </div>
      </div>
    </div>
  );
}

export default Footer;