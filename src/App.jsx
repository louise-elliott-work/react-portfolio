import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

// Must be top-level component and render all necessary child components.

function App() {
  return (

    <Router>

      <NavBar />

      <Routes>

        // Set the different paths to be rendered with Home as the default.
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />

      </Routes>

    </Router>

  );

}

export default App;
