import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [warmMode, setWarmMode] = useState(false);
  const themeClass = darkMode ? 'theme-dark' : warmMode ? 'theme-warm' : 'theme-light';

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedWarmMode = localStorage.getItem('warmMode') === 'true';

    if (savedWarmMode) {
      setWarmMode(true);
    } else if (savedDarkMode) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'warm', 'theme-dark', 'theme-warm', 'theme-light');

    if (darkMode) {
      document.documentElement.classList.add('dark', 'theme-dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.setItem('darkMode', 'false');
    }

    if (warmMode) {
      document.documentElement.classList.add('warm', 'theme-warm');
      localStorage.setItem('warmMode', 'true');
    } else {
      localStorage.setItem('warmMode', 'false');
    }

    if (!darkMode && !warmMode) {
      document.documentElement.classList.add('theme-light');
    }
  }, [darkMode, warmMode]);

  const cycleTheme = () => {
    if (!darkMode && !warmMode) {
      // Light -> Dark
      setDarkMode(true);
      setWarmMode(false);
    } else if (darkMode && !warmMode) {
      // Dark -> Warm
      setDarkMode(false);
      setWarmMode(true);
    } else {
      // Warm -> Light
      setWarmMode(false);
      setDarkMode(false);
    }
  };

  return (
    <div className={`App relative ${themeClass}`}>
      <Navbar
        darkMode={darkMode}
        warmMode={warmMode}
        cycleTheme={cycleTheme}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;