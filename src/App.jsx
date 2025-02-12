import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; // Assuming Landing.jsx or Landing.js is directly in src
import Perfumes from "./Perfumes";
import "./Perfume.css";
import PerfumeOil from "./PerfumeOil";
import Footer from './Footer';
import './Footer.css';

function App() {
  return (
    <Router>
      <div className="main-content">
        <Footer/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/perfumes" element={<Perfumes />} />
          <Route path="/oils" element={<PerfumeOil />} />

          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;