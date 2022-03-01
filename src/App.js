import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import './index.css';


// import Skills from './components/Skills'
// import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      {/* <Skills />

      <Footer /> */}
    </div>
  );
}