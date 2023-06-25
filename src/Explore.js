import './App.css';
import React, { useState } from 'react';
import Website_logo from './Website_logo.png';
import './NavBar.js'; 
import Axios from 'axios';
import App from './App';
import india from './india.png';
import switzerland from './switzerland.png';
import south_korea from './south_korea.png';
import japan from './japan.png';
import france from './france.png';
import philippines from './philippines.png';

function Explore() {

  // const [endpoint,setEndpoint] = useState('');

  

  // const onChangeHandler = (e) =>{
  //   setEndpoint(e.target.value);
  // }
  


  return (
    <div className="explore">
      
      <div className='search-bar'>
        <input type='text' /*value={endpoint} onChange={onChangeHandler} */placeholder='Search your trip away...'/>

        <button className='search-bar'>🔍</button>
      </div>
      <div className='rows'>
      <div className='row-1'>
      <figure>
      <img src={switzerland} alt="Switzerland"/>
      <figcaption>Switzerland</figcaption>
      </figure>
      <figure>
      <img src={japan} alt="Japan"/>
      <figcaption>Japan</figcaption>
      </figure>
      <figure>
      <img src={philippines} alt="Philippines"/>
      <figcaption>Philippines</figcaption>
      </figure>
      </div>
      <div className='row-2'>
      <figure>
      <img src={india} alt="India"/>
      <figcaption>India</figcaption>
      </figure>
      <figure>
      <img src={south_korea} alt="South Korea"/>
      <figcaption>South Korea</figcaption>
      </figure>
      <figure>
      <img src={france} alt="France"/>
      <figcaption>France</figcaption>
      </figure>
      </div>
      </div>
    </div>
  );
}

export default Explore;