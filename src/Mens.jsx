import React, { useState, useEffect } from "react";
import "./Mens.css"; // Import your CSS file
import masc from './assets/masc.jpg';
import { useNavigate } from "react-router-dom";


 

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".section-container");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Trigger animation when the section is 50% visible
      if (sectionTop < windowHeight * 0.5) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`section-container ${isVisible ? "visible" : ""}`}>
      {/* Left Section */}
      <div className="left-section">
      <button onClick={() => navigate("/perfumes")}>MASC FOR MEN</button>
        <h3>Peczys Cologne</h3>
        <h2>MENS COLLECTION</h2>
        <p>
          Discover the essence of masculinity with our exclusive Men's Collection.
          Our fragrances are crafted to embody strength, sophistication, and timeless elegance.
          From the enigmatic allure of "Masculine Mystery" to the bold and robust notes of "Rich Tobacco,"
          each scent is a masterpiece designed to leave a lasting impression. Elevate your presence with
          Peczys Cologne, where every bottle tells a story of power and refinement.
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img src={masc} alt="Men's Cologne" />
      </div>
    </div>
  );
};

export default App;