import './App.css';
import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Explore from './Explore';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import CreateAccount from './CreateAccount';
import {BrowserRouter as Router, Route, Link, Switch, Routes} from 'react-router-dom';

function App() {

const [data, setData] = useState(null); 
const [container, setContainer] = useState([]); 

const url = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '555acf62c3msh096a2ed23f1d9c0p1be546jsn91fa6057e9b1',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};


useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
      setContainer(result);
    } catch (error) {
      console.error(error);
    }
   
  }

  fetchData();
}, []);



  return (
    <div className="App">
      
      <NavBar />
      <Hero />
      <Explore />
      <Footer />
      

     <Router>

      <Routes>
      <Route path="/create" element={<CreateAccount />}></Route>
      </Routes>
     </Router>
      

      <div>{console.log(data)}</div>
    </div>
  );
}

export default App;
