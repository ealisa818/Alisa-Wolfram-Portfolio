import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
// import Skills from './components/Skills'
// import Projects from './components/Projects';
// import Footer from './components/Footer';
// import './assets/styles.css';

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      {/* <Skills />
      <Projects />
      <Footer /> */}
    </div>
  );
}