import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import "./styles/app.css";
import Background from "./background/Background";
import PlayerStats from "./playerStats/PlayerStats";

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
      <PlayerStats />
    </Router>
  );
}

export default App;
