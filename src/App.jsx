import React from 'react';
import Navbar from './Componants/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Hero from './Componants/hero/hero';
import About from './Componants/About/About';
import Experience from './Componants/Experience/Experience';
import Qualification from './Componants/Qualification/Qualification';
import Contact from './Componants/Contact/Contact';
import Footer from './Componants/Footer/Footer';
import Portfolio from './Componants/Projects/Portfolio';

const App = () => {
  return (
    <div>
      <Navbar />

      {/* 👇 Add IDs here for smooth scrolling */}
      <div id="Home">
        <Hero />
      </div>

      <div id="About">
        <About />
      </div>

      <div id="Experience">
        <Experience />
        <Qualification />
      </div>

      <div id="Portfolio">
        <Portfolio />
      </div>

      <div id="Contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
