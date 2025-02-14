import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import pecz from "./assets/pecz.jpg"; // Replace with your actual logo
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail(""); // Clears input field after submission
    // Here you can integrate Firebase, Mailchimp, or a backend API to store emails
  };

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
          <a href="https://instagram.com/peczys.c" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="instagram-icon" />
          </a>
        </div>
      </div>

      {/* Mailing List Section */}
      <div className="newsletter">
        <h3>Join Our Mailing List</h3>
       
       
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button className="subt" type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
