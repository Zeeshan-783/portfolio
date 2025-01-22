import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import About from './Links/about';
import Contact from './Links/contact';
import Projects from './Links/projects';
import Home from './Links/home';
import Footer from './Links/footer';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Check for saved theme in localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle dark and light mode and save in localStorage
  const toggleTheme =  ():void => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <Router>
      {/* Applying the dark or light theme globally to the root div */}
      <div className={darkMode ? 'bg-[#1B1833] text-white' : 'bg-[#FBF8EF] text-[#1B1833] '}
      style={{ paddingTop: '100px' }}
      >
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/home" element={<Home  darkMode={darkMode}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects darkMode={darkMode}  />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
