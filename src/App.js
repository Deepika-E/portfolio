import React from 'react';
import './App.scss';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.css';

//hi
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Deepika's Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}



export default App;
