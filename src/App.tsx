import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import HomePage from "./Pages/Home";
import ProjectsPage from "./Pages/Projects";
import ResumePage from "./Pages/Resume";
import "./App.css";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
