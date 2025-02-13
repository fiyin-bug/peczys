import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; 
import Perfumes from "./Perfumes";
import PerfumeOil from "./PerfumeOil";
import Footer from "./Footer";
import { SearchProvider } from "./SearchContext"; // Import the context
import "./Perfume.css";
import "./Footer.css";
import "./App.css"; // or "./App.css" depending on your setup

function App() {
  return (
    <SearchProvider> {/* ✅ Wrap the whole app */}
      <Router>
        <div className="main-content">
          <Footer />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/perfumes" element={<Perfumes />} />
            <Route path="/oils" element={<PerfumeOil />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
