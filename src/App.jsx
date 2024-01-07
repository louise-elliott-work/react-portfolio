import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Must be top-level component and render all necessary child components.

function App() {
  return (

    <Router>

      <Header />

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
