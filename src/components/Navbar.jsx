import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "footer", label: "Contact" },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .brand-text {
          font-weight: 800;
          font-size: 1.75rem;
          background: linear-gradient(90deg, red, green, blue, red);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: colorRotate 8s infinite;
        }

        @keyframes colorRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .nav-link {
          cursor: pointer;
          position: relative;
          font-size: 1.05rem;
          font-weight: 500;
          color: ${isScrolled ? "#1a1a1a" : "#ffffff"};
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          height: 3px;
          width: 0;
          background: linear-gradient(135deg, #00BCD4, #0097A7);
          transition: width 0.3s ease;
          border-radius: 4px;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          cursor: pointer;
          color: ${isScrolled ? "#1a1a1a" : "#ffffff"};
          transition: color 0.3s ease;
        }

        .desktop-menu {
          display: flex;
          gap: 2.5rem;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .brand-text {
            font-size: 1.5rem;
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: 0;
            width: 70%;
            max-width: 300px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
            padding: 5rem 2rem 2rem;
            gap: 2rem;
            transform: translateX(${isMobileMenuOpen ? "0" : "100%"});
            transition: transform 0.3s ease;
            z-index: 999;
          }

          .mobile-nav-link {
            cursor: pointer;
            font-size: 1.25rem;
            font-weight: 600;
            color: #1a1a1a;
            padding: 0.75rem 0;
            border-bottom: 2px solid #f0f0f0;
            transition: all 0.3s ease;
          }

          .mobile-nav-link:hover {
            color: #00BCD4;
            padding-left: 1rem;
          }

          .mobile-overlay {
            display: ${isMobileMenuOpen ? "block" : "none"};
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            z-index: 998;
          }
        }
      `}</style>

      {/* Mobile Overlay */}
      <div 
        className="mobile-overlay" 
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          padding: isScrolled ? "0.8rem 0" : "1.3rem 0",
          background: isScrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.12)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            className="brand-text"
            onClick={() => handleScrollTo("home")}
            style={{ cursor: "pointer" }}
          >
            AAVRC
          </span>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {navItems.map((item) => (
              <span
                key={item.id}
                className="nav-link"
                onClick={() => handleScrollTo(item.id)}
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="mobile-nav-link"
            onClick={() => handleScrollTo(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;