import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Work from './components/MyWork/Work';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';
import './App.css'

function App() {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background: darkMode? 'black':'',
      color : darkMode? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Work/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
