import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import pecz from "./assets/pecz.jpg"; // Replace with your actual logo
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Side: Logo */}
        <div className="footer-logo">
          <img src={pecz} alt="Business Logo" />
        </div>

        {/* Right Side: Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/perfumes">Perfumes</Link>
          <Link to="/perfumeoil">Perfume Oils</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="instagram-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
