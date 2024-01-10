import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

{/* App is top-level component, render all necessary child components */}
function App() {
  return (
    <div>
      <Router>
         {/* Header visible across all pages */}
        <Header />
        <Routes>
          {/* Different paths set to be rendered, with Home set as the default */}
          <Route path="/" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;