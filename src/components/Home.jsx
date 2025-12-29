import { useState, useEffect } from 'react';
import hero from "../media/other/hero.jpg";

function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Web Development, AI Solutions & Software Services';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section style={styles.heroSection} id="home">
      {/* Elegant Background Pattern */}
      <div style={styles.backgroundPattern}></div>
      
      {/* Decorative Circles */}
      <div style={{...styles.decorativeCircle, ...styles.circle1}}></div>
      <div style={{...styles.decorativeCircle, ...styles.circle2}}></div>
      <div style={{...styles.decorativeCircle, ...styles.circle3}}></div>
      
      <div style={styles.container}>
        <div style={styles.heroContent}>
          {/* Left Section - Hero Image */}
          <div style={styles.leftSection}>
            <div style={styles.imageWrapper}>
              {/* Main Image Container */}
              <div style={styles.mainImageContainer} className="image-zoom-container">
                <img 
                  src={hero} 
                  alt="AAVRC - Web Development & AI Solutions"
                  style={styles.mainImage}
                  className="zoom-image"
                />
                <div style={styles.imageOverlay}></div>
              </div>
              
              {/* Floating Cards */}
              <div style={{...styles.floatingCard, ...styles.floatingCard1}}>
                <span style={styles.floatingIcon}>⚡</span>
                <span style={styles.floatingText}>Fast Delivery</span>
              </div>
              <div style={{...styles.floatingCard, ...styles.floatingCard2}}>
                <span style={styles.floatingIcon}>🔒</span>
                <span style={styles.floatingText}>Secure Code</span>
              </div>
              <div style={{...styles.floatingCard, ...styles.floatingCard3}}>
                <span style={styles.floatingIcon}>🎯</span>
                <span style={styles.floatingText}>100% Quality</span>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div style={styles.rightSection}>
            {/* Badge */}
            <div style={styles.badge}>
              <span style={styles.badgeText}>🚀 Innovation & Technology</span>
            </div>
            
            <h1 style={styles.heroTitle}>
              AAVRC<span style={styles.cursor}>|</span>
            </h1>
            <div style={styles.heroSubtitle}>
              {typedText}
            </div>
            <p style={styles.heroDescription}>
              We develop comprehensive web applications, websites, employee
              management systems, digital flipbooks, e-commerce platforms,
              AI-powered chatbots, machine learning models, intelligent
              automation systems, and many more innovative solutions to grow
              your business with cutting-edge technology.
            </p>

            <div style={styles.ctaButtons}>
              <a href="#projects" style={styles.btnPrimary} onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" />
                </svg>
                View Projects
              </a>
              <a href="#contact" style={styles.btnSecondary} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get Quote
              </a>
            </div>
            
            {/* Stats Section */}
            <div style={styles.statsContainer}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>Projects</span>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>30+</span>
                <span style={styles.statLabel}>Happy Clients</span>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>5+</span>
                <span style={styles.statLabel}>Years Exp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

const styles = {
  heroSection: {
    background: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '100px 20px 60px',
  },
  backgroundPattern: {
    display: 'none',
  },
  decorativeCircle: {
    display: 'none',
  },
  circle1: {},
  circle2: {},
  circle3: {},
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    position: 'relative',
    zIndex: 2,
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  leftSection: {
    animation: 'slideInLeft 1s ease',
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
    padding: '30px',
  },
  mainImageContainer: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
    border: '5px solid #fff',
    cursor: 'pointer',
  },
  mainImage: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  floatingCard: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 18px',
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
    border: '1px solid rgba(0, 188, 212, 0.2)',
    animation: 'float 3s ease-in-out infinite',
    zIndex: 3,
  },
  floatingCard1: {
    top: '50px',
    right: '0',
  },
  floatingCard2: {
    top: '45%',
    left: '0',
    animationDelay: '1s',
  },
  floatingCard3: {
    bottom: '60px',
    right: '20px',
    animationDelay: '2s',
  },
  floatingIcon: {
    fontSize: '1.3rem',
  },
  floatingText: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  rightSection: {
    animation: 'slideInRight 1s ease',
    textAlign: 'left',
  },
  badge: {
    display: 'inline-block',
    padding: '10px 20px',
    background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%)',
    border: '1px solid rgba(0, 188, 212, 0.3)',
    borderRadius: '50px',
    marginBottom: '25px',
  },
  badgeText: {
    color: '#0097A7',
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '1px',
  },
  heroTitle: {
    fontSize: '4.5rem',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '15px',
    letterSpacing: '3px',
    lineHeight: '1.1',
  },
  cursor: {
    color: '#00BCD4',
    animation: 'blink 1s infinite',
    fontWeight: '300',
  },
  heroSubtitle: {
    fontSize: '1.4rem',
    color: '#00BCD4',
    marginBottom: '25px',
    fontWeight: '500',
    minHeight: '35px',
    borderLeft: '3px solid #00BCD4',
    paddingLeft: '15px',
  },
  heroDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#666',
    marginBottom: '35px',
    maxWidth: '500px',
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  btnPrimary: {
    padding: '16px 32px',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 8px 25px rgba(0, 188, 212, 0.35)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  btnSecondary: {
    padding: '16px 32px',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    background: 'transparent',
    color: '#1a1a1a',
    border: '2px solid #1a1a1a',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  statsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    padding: '25px 30px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    border: '1px solid rgba(0, 188, 212, 0.2)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#00BCD4',
    lineHeight: '1',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#888',
    marginTop: '5px',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    background: 'rgba(0, 188, 212, 0.3)',
  },
  decorativeDots: {
    display: 'none',
  },
  decorativeRing: {
    display: 'none',
  },
};

// Add keyframe animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes pulseSlow {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }

  @media (hover: hover) {
    .image-zoom-container:hover .zoom-image {
      transform: scale(1.1);
    }
    
    [style*="btnPrimary"]:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(0, 188, 212, 0.45) !important;
    }
    
    [style*="btnSecondary"]:hover {
      background: #1a1a1a !important;
      color: #ffffff !important;
      transform: translateY(-3px);
    }
  }

  @media (max-width: 992px) {
    [style*="heroSection"] {
      padding: 100px 15px 50px !important;
    }
    
    [style*="heroContent"] {
      display: flex !important;
      flex-direction: column !important;
      gap: 40px !important;
    }
    
    [style*="leftSection"] {
      order: 1 !important;
      width: 100% !important;
    }
    
    [style*="rightSection"] {
      order: 2 !important;
      width: 100% !important;
      text-align: center !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
    }
    
    [style*="heroTitle"] {
      font-size: 3rem !important;
      text-align: center !important;
    }
    
    [style*="heroSubtitle"] {
      text-align: center !important;
      border-left: none !important;
      padding-left: 0 !important;
      border-bottom: 3px solid #00BCD4 !important;
      padding-bottom: 10px !important;
      display: inline-block !important;
    }
    
    [style*="heroDescription"] {
      max-width: 100% !important;
      text-align: center !important;
    }
    
    [style*="ctaButtons"] {
      justify-content: center !important;
    }
    
    [style*="statsContainer"] {
      justify-content: center !important;
    }
    
    [style*="mainImage"] {
      height: 350px !important;
    }
  }

  @media (max-width: 768px) {
    [style*="heroSection"] {
      padding: 90px 15px 40px !important;
      min-height: auto !important;
    }
    
    [style*="heroContent"] {
      gap: 30px !important;
    }
    
    [style*="imageWrapper"] {
      padding: 10px !important;
    }
    
    [style*="mainImage"] {
      height: 280px !important;
    }
    
    [style*="mainImageContainer"] {
      border-radius: 15px !important;
      border-width: 3px !important;
    }
    
    [style*="badge"] {
      padding: 8px 16px !important;
    }
    
    [style*="badgeText"] {
      font-size: 0.8rem !important;
    }
    
    [style*="heroTitle"] {
      font-size: 2.5rem !important;
      letter-spacing: 2px !important;
      margin-bottom: 10px !important;
    }
    
    [style*="heroSubtitle"] {
      font-size: 1rem !important;
      min-height: auto !important;
      margin-bottom: 20px !important;
    }
    
    [style*="heroDescription"] {
      font-size: 0.95rem !important;
      line-height: 1.7 !important;
      margin-bottom: 25px !important;
      padding: 0 10px !important;
    }
    
    [style*="ctaButtons"] {
      flex-direction: column !important;
      gap: 12px !important;
      margin-bottom: 30px !important;
      width: 100% !important;
      padding: 0 20px !important;
    }
    
    [style*="btnPrimary"], [style*="btnSecondary"] {
      justify-content: center !important;
      padding: 14px 28px !important;
      font-size: 0.9rem !important;
      width: 100% !important;
    }
    
    [style*="statsContainer"] {
      padding: 20px 15px !important;
      gap: 15px !important;
      border-radius: 12px !important;
      width: 100% !important;
      max-width: 350px !important;
    }
    
    [style*="statNumber"] {
      font-size: 1.5rem !important;
    }
    
    [style*="statLabel"] {
      font-size: 0.75rem !important;
    }
    
    [style*="statDivider"] {
      height: 30px !important;
    }
    
    [style*="floatingCard"] {
      padding: 8px 12px !important;
    }
    
    [style*="floatingIcon"] {
      font-size: 1rem !important;
    }
    
    [style*="floatingText"] {
      font-size: 0.7rem !important;
    }
    
    [style*="floatingCard1"] {
      top: 20px !important;
      right: 0 !important;
    }
    
    [style*="floatingCard2"] {
      left: 0 !important;
    }
    
    [style*="floatingCard3"] {
      bottom: 20px !important;
      right: 0 !important;
    }
  }

  @media (max-width: 480px) {
    [style*="heroSection"] {
      padding: 80px 10px 30px !important;
    }
    
    [style*="heroContent"] {
      gap: 25px !important;
    }
    
    [style*="imageWrapper"] {
      padding: 5px !important;
    }
    
    [style*="mainImage"] {
      height: 220px !important;
    }
    
    [style*="heroTitle"] {
      font-size: 2rem !important;
      letter-spacing: 1px !important;
    }
    
    [style*="heroSubtitle"] {
      font-size: 0.85rem !important;
    }
    
    [style*="heroDescription"] {
      font-size: 0.85rem !important;
      padding: 0 5px !important;
    }
    
    [style*="ctaButtons"] {
      padding: 0 10px !important;
    }
    
    [style*="btnPrimary"], [style*="btnSecondary"] {
      padding: 12px 24px !important;
      font-size: 0.85rem !important;
    }
    
    [style*="statsContainer"] {
      padding: 15px 10px !important;
      gap: 10px !important;
      max-width: 300px !important;
    }
    
    [style*="statNumber"] {
      font-size: 1.3rem !important;
    }
    
    [style*="statLabel"] {
      font-size: 0.7rem !important;
    }
    
    [style*="statDivider"] {
      height: 25px !important;
    }
    
    [style*="floatingCard"] {
      padding: 5px 8px !important;
    }
    
    [style*="floatingIcon"] {
      font-size: 0.85rem !important;
    }
    
    [style*="floatingText"] {
      font-size: 0.6rem !important;
    }
  }
`;

if (!document.getElementById('hero-styles')) {
  styleSheet.id = 'hero-styles';
  document.head.appendChild(styleSheet);
}

export default Home;
