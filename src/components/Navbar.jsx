import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-custom ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid container-fluid-custom">
          <a
            className="navbar-brand navbar-brand-custom"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            AAVRC
          </a>

          <button
            className="navbar-toggler navbar-toggler-custom"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isMenuOpen ? "show navbar-collapse-custom" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link nav-link-custom"
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-custom"
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("about");
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-custom"
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("services");
                  }}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-custom"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("projects");
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-custom"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
