import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Tutorial from './components/Tutorial';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Dimuthu Sasanka Deshapriya | Full-Stack Developer";
  }, []);

  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Tutorial />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;