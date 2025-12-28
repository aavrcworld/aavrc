import React, { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <style>{`
        @keyframes colorRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .nav-link {
          position: relative;
          text-decoration: none;
          padding: 0.5rem 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .nav-link-text {
          color: #1a1a1a;
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover .nav-link-text {
          color: #00BCD4;
        }
        
        .nav-link-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          border-radius: 2px;
          transition: width 0.3s ease-in-out;
          width: 0;
        }
        
        .nav-link:hover .nav-link-underline,
        .nav-link.active .nav-link-underline {
          width: 100%;
        }
        
        .toggle-button:hover {
          background: rgba(0, 188, 212, 0.2) !important;
          border-color: rgba(0, 188, 212, 0.5) !important;
          box-shadow: 0 0 15px rgba(0, 188, 212, 0.4);
        }
        
        .brand-text {
          display: inline-block;
          background: linear-gradient(90deg, red, green, blue, red);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: colorRotate 8s ease-in-out infinite;
          font-family: Arial, sans-serif;
        }
        
        .brand:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .toggle-button {
            display: block !important;
          }
          
          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(15px);
            flex-direction: column;
            padding: 2rem;
            gap: 0 !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border-radius: 0 0 20px 20px;
            border: 1px solid rgba(0, 188, 212, 0.2);
            border-top: none;
          }
          
          .nav-menu.closed {
            display: none !important;
          }
          
          .nav-menu.open {
            display: flex !important;
          }
          
          .nav-link {
            width: 100%;
            padding: 1.2rem 0 !important;
            border-bottom: 1px solid rgba(0, 188, 212, 0.2);
            text-align: center;
          }
          
          .nav-link:last-child {
            border-bottom: none;
          }
          
          .nav-link-text {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
      
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backdropFilter: 'blur(15px)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: '1rem 0',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.98)' 
          : 'rgba(255, 255, 255, 0.95)',
        boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 188, 212, 0.2)',
      }}>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Brand Logo with rainbow gradient */}
          <a
            href="#home"
            className="brand"
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              textDecoration: 'none',
              position: 'relative',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            <span className="brand-text">AAVRC</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="toggle-button"
            style={{
              display: 'none',
              background: 'rgba(0, 188, 212, 0.1)',
              border: '1px solid rgba(0, 188, 212, 0.3)',
              borderRadius: '8px',
              cursor: 'pointer',
              padding: '0.5rem',
              transition: 'all 0.3s ease',
            }}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2.5">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          {/* Navigation Menu */}
          <div 
            className={`nav-menu ${isMenuOpen ? 'open' : 'closed'}`}
            style={{
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${hoveredLink === item.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredLink(item.id)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <span className="nav-link-text">{item.label}</span>
                <span className="nav-link-underline"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
