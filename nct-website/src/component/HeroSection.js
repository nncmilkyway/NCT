import React from 'react';
import './HeroSection.css';
import '../App.css';


  function HeroSection() {
    return (
      <div className='hero-container'>
         <h1>Welcome to Neo Culture Technology</h1>
        <video src="/video/NCT-Open.mp4" autoPlay loop />
      </div>
    );
  }
  

export default HeroSection;
