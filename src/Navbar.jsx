import React, { useState } from "react";
import { Link } from "react-router-dom";
import pecz from "./assets/pecz.jpg";
import "./Navbar.css";
import { FaShoppingBag } from "react-icons/fa";
import { useSearch } from "./SearchContext"; // ✅ Correct path
import { IoMdArrowDropdown } from "react-icons/io";




const Navbar = () => {
  const [isPerfumeDropdownOpen, setIsPerfumeDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const togglePerfumeDropdown = (e) => {
    e.preventDefault();
    setIsPerfumeDropdownOpen(!isPerfumeDropdownOpen);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };
  const { setSearchTerm } = useSearch();

  return (
    <>
      <div className="navbar-container">
        {/* Top Row: Logo, Search Bar, and Categories Dropdown */}
        <div className="top-navbar">
          <div className="logo">
            <img src={pecz} alt="Logo" />
          </div>
          <div className="search-bar">
            <div className="categories-dropdown" onClick={toggleCategoryDropdown}>
              <span className="span" style={{
        backgroundColor: 'black',color:'white'}}>Categories  </span>
              {isCategoryDropdownOpen && (
                <ul className="categories-dropdown-content">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/perfumes">Perfumes</Link></li>
            <li><Link to="/diffusers">Diffusers</Link></li>
            <li><Link to="/oils">Perfume Oils</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              )}
            </div>
            <input type="text" placeholder="Search....." onChange={(e) =>{
             console.log(  "Search term:",e.target.value);
             setSearchTerm(e.target.value.toLowerCase())
            }}
            />
    <button className="blop" style={{
        backgroundColor: 'black', transition: 'background-color 0.3s ease', padding: '4px 10px',fontSize: '16px'}}
        >Search</button>
          </div>
          <FaShoppingBag className="shopping-bag-icon" />
        </div>

        {/* Bottom Row: Navigation Links */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <a href="#" onClick={togglePerfumeDropdown}>Perfumes <IoMdArrowDropdown /></a>
              {isPerfumeDropdownOpen && (
                <ul className="dropdown-content">
                  <li><Link to="/perfumes">Perfumes</Link></li>
                  
                  <li><Link to="/find-your-fragrance">Find Your Fragrance</Link></li>
                  <li><Link to="/men">Men</Link></li>
                  <li><Link to="/women">Women</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/diffusers">Diffusers</Link></li>
            <li><Link to="/oils">Perfume Oils</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      
    </>
  );
};

export default Navbar;