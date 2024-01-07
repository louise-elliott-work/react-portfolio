import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './pages/Home.jsx';
import ProjectGallery from './pages/ProjectGallery.jsx';
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
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>

{/* onclick event listener for when user clicks buttons in navbar - this action updates the state of the components  */}
    </div>
  );
}

export default App;
