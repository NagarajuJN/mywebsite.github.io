import React from 'react';
import Navbar  from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro'

import './App.css'
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer  from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
  