// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pecz from "./assets/pecz.jpg"; // Adjust path as needed
import "./Navbar.css";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSearch } from "./SearchContext"; // Adjust path as needed

const Navbar = () => {
  const [isPerfumeDropdownOpen, setIsPerfumeDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const { setSearchTerm } = useSearch();

  const togglePerfumeDropdown = (e) => {
    e.preventDefault();
    setIsPerfumeDropdownOpen(prev => !prev);
  };

  const toggleCategoryDropdown = (e) => {
    e.preventDefault();
    setIsCategoryDropdownOpen(prev => !prev);
  };

  // Prevent dropdown toggle when clicking links
  const handleLinkClick = (e) => {
    e.stopPropagation(); // Stop event from bubbling to parent <a>
  };

  return (
    <div className="navbar-container">
      {/* Top Row: Logo, Search Bar, and Categories Dropdown */}
      <div className="top-navbar">
        <div className="logo">
          <img src={pecz} alt="Logo" />
        </div>
        <div className="search-bar">
          <div className={`categories-dropdown ${isCategoryDropdownOpen ? 'open' : ''}`}>
            <span
              className="span"
              onClick={toggleCategoryDropdown}
              style={{ backgroundColor: "black", color: "white" }}
            >
              Categories
            </span>
            <ul className="categories-dropdown-content">
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/perfumes" onClick={handleLinkClick}>Perfumes</Link></li>
              <li><Link to="/diffusers" onClick={handleLinkClick}>Diffusers</Link></li>
              <li><Link to="/oils" onClick={handleLinkClick}>Perfume Oils</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
            </ul>
          </div>
          <input
            type="text"
            placeholder="Search....."
            onChange={(e) => {
              console.log("Search term:", e.target.value);
              setSearchTerm(e.target.value.toLowerCase());
            }}
          />
          <button
            className="blop"
            style={{
              backgroundColor: "black",
              transition: "background-color 0.3s ease",
              padding: "8px 10px",
              fontSize: "16px",
            }}
          >
           <FaSearch />
          </button>
        </div>
        
      </div>

      {/* Bottom Row: Navigation Links */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li className={`dropdown ${isPerfumeDropdownOpen ? 'open' : ''}`}>
            <a href="#" className="dropdown-toggle" onClick={togglePerfumeDropdown}>
              Perfumes <IoMdArrowDropdown />
            </a>
            <ul className="dropdown-content">
              <li><Link to="/perfumes" onClick={handleLinkClick}>Perfumes</Link></li>
              <li><Link to="/find-your-fragrance" onClick={handleLinkClick}>Find Your Fragrance</Link></li>
              <li><Link to="/men" onClick={handleLinkClick}>Men</Link></li>
              <li><Link to="/women" onClick={handleLinkClick}>Women</Link></li>
            </ul>
          </li>
          <li><Link to="/diffusers">Diffusers</Link></li>
          <li><Link to="/oils">Perfume Oils</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;