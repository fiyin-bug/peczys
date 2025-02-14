import React, { useState, useEffect } from "react";
import "./Womens.css"; // Import your CSS file
import femme from './assets/femme.jpg';
import { useNavigate } from "react-router-dom";
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
      const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".section-container");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Trigger animation when the section is 80% visible
      if (sectionTop < windowHeight * 0.1) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`section-container ${isVisible ? "visible" : ""}`}>
      {/* Left Section (Image) */}
      <div className="left-section">
        <img src={femme} alt="Women's Cologne" />
      </div>

      {/* Right Section (Text) */}
      <div className="right-section">
      <button onClick={() => navigate("/perfumes")}>Femme For Women</button>
        <h3>Peczys Cologne</h3>
        <h2>WOMEN'S COLLECTION</h2>
        <p>
          Embrace the essence of femininity with our exclusive Women's Collection.
          Our fragrances are crafted to embody grace, elegance, and timeless beauty.
          From the delicate charm of "Blossom Allure" to the captivating intensity of "Femme Fatale".
        </p>
      </div>
    </div>
  );
};

export default App;