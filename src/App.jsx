import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Top-level component, rendering all child components, with About set as default home page.
function App() {
  return (
    <div>
      <Router>
         {/* Header visible across all pages */}
        <Header />
        <Routes>
          {/* Different paths set to be rendered, with Home set as the default */}
          <Route path="/" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;