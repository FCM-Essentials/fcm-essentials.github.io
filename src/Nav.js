import React, { useState } from "react";
import "./Nav.css";
import logo from "./assets/logo.png"; // adjust path if needed

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <a href="#" className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Community</a>
            <a href="#">Hypixel</a>
          </div>
        </div>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Community</a>
        <a href="#">Hypixel</a>
      </div>
    </>
  );
}

export default Nav;
