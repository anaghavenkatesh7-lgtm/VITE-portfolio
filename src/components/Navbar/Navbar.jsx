import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">

      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          A
        </div>


        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>

        </ul>


        {/* Dark / Light Mode Button */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>


        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

    </header>
  );
}

export default Navbar;