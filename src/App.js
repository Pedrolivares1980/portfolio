import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav.js";
import About from "./pages/about/About.js"
import Skills from "./pages/skills/Skills.js"
import Projects from "./pages/projects/Projects.js"
import Contact from "./pages/contact/Contact.js"
import "./styles/app.css";
import Background from "./background/Background.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
