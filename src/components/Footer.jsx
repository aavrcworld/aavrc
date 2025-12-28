import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaArrowUp,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBrain,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer style={styles.footer}>
        {/* Scroll To Top */}
        {showScroll && (
          <button
            style={styles.scrollToTop}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="scroll-top-btn"
          >
            <FaArrowUp />
          </button>
        )}

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/919412004537"
          target="_blank"
          rel="noreferrer"
          style={styles.whatsappFloat}
          aria-label="WhatsApp"
          className="whatsapp-float"
        >
          <FaWhatsapp />
        </a>

        {/* Main Footer Content */}
        <div style={styles.container}>
          {/* Vision Statement */}
          <div style={styles.visionSection}>
            <h2 style={styles.visionTitle}>YOUR VISION. OUR TECHNOLOGY</h2>
            <div style={styles.divider}></div>
            <h3 style={styles.visionSubtitle}>We Engineer Solutions That Are:</h3>
          </div>

          {/* Feature Cards */}
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard} className="feature-card">
              <div style={styles.featureIconWrapper} className="feature-icon-wrapper">
                <FaBrain style={styles.featureIcon} />
              </div>
              <h4 style={styles.featureTitle}>SMART</h4>
              <p style={styles.featureDesc}>
                Powered by cutting-edge AI, built for growth and future demands
              </p>
            </div>

            <div style={styles.featureCard} className="feature-card">
              <div style={styles.featureIconWrapper} className="feature-icon-wrapper">
                <FaBolt style={styles.featureIcon} />
              </div>
              <h4 style={styles.featureTitle}>SCALABLE & FAST</h4>
              <p style={styles.featureDesc}>
                Optimized for lightning-quick performance and long-term scalability
              </p>
            </div>

            <div style={styles.featureCard} className="feature-card">
              <div style={styles.featureIconWrapper} className="feature-icon-wrapper">
                <FaShieldAlt style={styles.featureIcon} />
              </div>
              <h4 style={styles.featureTitle}>SECURE & ROBUST</h4>
              <p style={styles.featureDesc}>
                Enterprise-grade security, reliable and resilient systems
              </p>
            </div>
          </div>

          {/* Core Services Section */}
          <div style={styles.servicesSection}>
            <h3 style={styles.servicesSectionTitle}>CORE SERVICES</h3>
            <div style={styles.servicesGrid}>
              <div style={styles.serviceColumn}>
                <h4 style={styles.serviceColumnTitle}>AI</h4>
                <ul style={styles.serviceList}>
                  <li style={styles.serviceItem} className="service-item">Custom Models</li>
                  <li style={styles.serviceItem} className="service-item">Machine Learning</li>
                  <li style={styles.serviceItem} className="service-item">Predictive & Intelligent Systems</li>
                </ul>
              </div>

              <div style={{...styles.serviceColumn, ...styles.serviceColumnMiddle}}>
                <h4 style={styles.serviceColumnTitle}>WEB APPS</h4>
                <ul style={styles.serviceList}>
                  <li style={styles.serviceItem} className="service-item">High-Performance Web Applications</li>
                  <li style={styles.serviceItem} className="service-item">Scalable SASS Platforms</li>
                  <li style={styles.serviceItem} className="service-item">Cloud-Ready Architecture</li>
                </ul>
              </div>

              <div style={styles.serviceColumn}>
                <h4 style={styles.serviceColumnTitle}>SOFTWARE</h4>
                <ul style={styles.serviceList}>
                  <li style={styles.serviceItem} className="service-item">Easy to-Use Backend Systems</li>
                  <li style={styles.serviceItem} className="service-item">Secure Integrations</li>
                  <li style={styles.serviceItem} className="service-item">Custom Business Software</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Info & Contact Grid */}
          <div style={styles.infoGrid}>
            {/* Company Info */}
            <div style={styles.infoSection}>
              <h3 style={styles.logo}>AAVRC</h3>
              <p style={styles.tagline}>We Build It.</p>
              <p style={styles.description}>
                Leading provider of AI-powered web development solutions,
                intelligent automation systems, and cutting-edge software
                services for businesses worldwide.
              </p>

              <div style={styles.socialContainer}>
                <h4 style={styles.sectionTitle}>Follow Us</h4>
                <div style={styles.socialIcons}>
                  <a
                    href="https://www.youtube.com/@Aavrcalex"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.socialLink}
                    className="social-link social-youtube"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61581382928986"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.socialLink}
                    className="social-link social-facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/aavrcaavrc/?igsh=MWdtN3ZvZHlrZHRiNA%3D%3D#"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.socialLink}
                    className="social-link social-instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="mailto:aavrcworld@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.socialLink}
                    className="social-link social-email"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div style={styles.infoSection}>
              <h4 style={styles.sectionTitle}>Contact Us</h4>
              <div style={styles.contactList}>
                <a href="mailto:aavrcworld@gmail.com" style={styles.contactLink} className="contact-link">
                  <div style={styles.contactIconWrapper} className="contact-icon-wrapper">
                    <FaEnvelope style={styles.contactIcon} />
                  </div>
                  <span>aavrcworld@gmail.com</span>
                </a>
                <a href="tel:+919412004537" style={styles.contactLink} className="contact-link">
                  <div style={styles.contactIconWrapper} className="contact-icon-wrapper">
                    <FaPhone style={styles.contactIcon} />
                  </div>
                  <span>+91 94120 04537</span>
                </a>
                <div style={styles.contactLink} className="contact-link">
                  <div style={styles.contactIconWrapper} className="contact-icon-wrapper">
                    <FaMapMarkerAlt style={styles.contactIcon} />
                  </div>
                  <span>Agra, Uttar Pradesh, India</span>
                </div>
              </div>

              <div style={styles.supportBox} className="support-box">
                <h5 style={styles.supportTitle}>24/7 IT Support</h5>
                <p style={styles.supportText}>
                  Our technical team is available around the clock for assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={styles.footerBottom}>
            <p style={styles.copyright}>
              © 2025 AAVRC.COM - We Build It. | All rights reserved.
            </p>
            <div style={styles.footerLinks}>
              <button 
                style={styles.linkButton} 
                onClick={() => setShowPrivacy(true)}
                className="footer-link-btn"
              >
                Privacy Policy
              </button>
              <span style={styles.separator}>|</span>
              <button 
                style={styles.linkButton} 
                onClick={() => setShowTerms(true)}
                className="footer-link-btn"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Popup */}
      {showPrivacy && (
        <div style={styles.popupOverlay} onClick={() => setShowPrivacy(false)}>
          <div style={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setShowPrivacy(false)} className="popup-close-btn">
              ✖
            </button>
            <h2 style={styles.popupTitle}>Privacy Policy</h2>
            <div style={styles.popupBody}>
              <p style={styles.popupText}>
                At AAVRC, we value your privacy. We collect minimal data to
                provide and improve our AI-powered web services. Your personal
                information is never sold or shared with third parties except as
                required for essential operations or legal compliance.
              </p>
              <p style={styles.popupText}>
                We use encrypted communication, secure databases, and role-based
                access to ensure your data remains protected at all times.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Popup */}
      {showTerms && (
        <div style={styles.popupOverlay} onClick={() => setShowTerms(false)}>
          <div style={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setShowTerms(false)} className="popup-close-btn">
              ✖
            </button>
            <h2 style={styles.popupTitle}>Terms of Service</h2>
            <div style={styles.popupBody}>
              <p style={styles.popupText}>
                By using AAVRC's services, you agree to our standard usage
                policies, including proper use of AI tools, respect for copyright,
                and adherence to applicable laws.
              </p>
              <p style={styles.popupText}>
                We reserve the right to update, modify, or terminate services with
                prior notice. Continued use of our services constitutes acceptance
                of any changes made to these terms.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  footer: {
    background: '#ffffff',
    padding: '80px 20px 30px',
    fontFamily: '"Segoe UI", Arial, sans-serif',
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  visionSection: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  visionTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1a1a1a',
    letterSpacing: '1px',
    marginBottom: '20px',
  },
  divider: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #00BCD4, #0097A7)',
    margin: '0 auto 25px',
    borderRadius: '2px',
  },
  visionSubtitle: {
    fontSize: '1.5rem',
    fontWeight: '400',
    color: '#555',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '70px',
  },
  featureCard: {
    textAlign: 'center',
    padding: '40px 30px',
    background: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
    border: '1px solid #f0f0f0',
    transition: 'all 0.3s ease',
  },
  featureIconWrapper: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 25px',
    transition: 'all 0.3s ease',
  },
  featureIcon: {
    fontSize: '45px',
    color: '#00BCD4',
    transition: 'all 0.3s ease',
  },
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  featureDesc: {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: '1.7',
  },
  servicesSection: {
    marginBottom: '70px',
    padding: '50px 0',
    borderTop: '1px solid #f0f0f0',
    borderBottom: '1px solid #f0f0f0',
  },
  servicesSectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '50px',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '0',
  },
  serviceColumn: {
    padding: '25px 35px',
    textAlign: 'center',
  },
  serviceColumnMiddle: {
    borderLeft: '1px solid rgba(0, 188, 212, 0.3)',
    borderRight: '1px solid rgba(0, 188, 212, 0.3)',
  },
  serviceColumnTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#00BCD4',
    marginBottom: '25px',
  },
  serviceList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  serviceItem: {
    fontSize: '0.95rem',
    color: '#666',
    marginBottom: '15px',
    lineHeight: '1.5',
    padding: '8px 15px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    cursor: 'default',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '50px',
    marginBottom: '50px',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  tagline: {
    fontSize: '1rem',
    color: '#00BCD4',
    fontWeight: '600',
    marginBottom: '20px',
    paddingBottom: '12px',
    borderBottom: '2px solid #1a1a1a',
    display: 'inline-block',
  },
  description: {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: '1.8',
    marginBottom: '30px',
  },
  socialContainer: {
    marginTop: 'auto',
  },
  sectionTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '20px',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  socialLink: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#666',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    color: '#555',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    padding: '12px 15px',
    borderRadius: '12px',
    background: '#f8f9fa',
    border: '1px solid transparent',
  },
  contactIconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.3s ease',
  },
  contactIcon: {
    fontSize: '16px',
    color: '#ffffff',
  },
  supportBox: {
    background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%)',
    padding: '25px',
    borderRadius: '15px',
    border: '1px solid rgba(0, 188, 212, 0.2)',
    transition: 'all 0.3s ease',
  },
  supportTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '10px',
  },
  supportText: {
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: '1.7',
    margin: 0,
  },
  footerBottom: {
    borderTop: '1px solid #e0e0e0',
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#888',
    margin: 0,
    fontWeight: '500',
  },
  footerLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#666',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '5px 10px',
    fontWeight: '500',
    borderRadius: '5px',
  },
  separator: {
    color: '#ddd',
  },
  scrollToTop: {
    position: 'fixed',
    bottom: '100px',
    right: '25px',
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    color: '#fff',
    border: 'none',
    padding: '0',
    borderRadius: '50%',
    fontSize: '20px',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(0, 188, 212, 0.4)',
    zIndex: 999,
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '55px',
    height: '55px',
  },
  whatsappFloat: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    zIndex: 998,
    fontSize: '60px',
    color: '#25D366',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 5px 15px rgba(37, 211, 102, 0.4))',
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    backdropFilter: 'blur(5px)',
  },
  popupContent: {
    background: '#ffffff',
    width: '90%',
    maxWidth: '600px',
    padding: '50px',
    borderRadius: '25px',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '25px',
    right: '25px',
    background: '#f5f5f5',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#666',
    transition: 'all 0.3s ease',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  popupTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '25px',
  },
  popupBody: {
    fontSize: '1rem',
    lineHeight: '1.8',
  },
  popupText: {
    color: '#666',
    marginBottom: '20px',
  },
};

// Add hover effects via CSS
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  /* Feature Card Hover */
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 188, 212, 0.15) !important;
    border-color: rgba(0, 188, 212, 0.3) !important;
  }
  
  .feature-card:hover .feature-icon-wrapper {
    background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%) !important;
    transform: scale(1.1) rotate(5deg);
  }
  
  .feature-card:hover .feature-icon-wrapper svg {
    color: #ffffff !important;
  }

  /* Social Links Hover */
  .social-link:hover {
    transform: translateY(-5px) scale(1.15);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  .social-youtube:hover {
    background: #FF0000 !important;
    color: #ffffff !important;
    border-color: #FF0000 !important;
  }
  
  .social-facebook:hover {
    background: #1877F2 !important;
    color: #ffffff !important;
    border-color: #1877F2 !important;
  }
  
  .social-instagram:hover {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888) !important;
    color: #ffffff !important;
    border-color: #dc2743 !important;
  }
  
  .social-email:hover {
    background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%) !important;
    color: #ffffff !important;
    border-color: #00BCD4 !important;
  }

  /* Contact Link Hover */
  .contact-link:hover {
    background: #ffffff !important;
    border-color: rgba(0, 188, 212, 0.3) !important;
    box-shadow: 0 10px 30px rgba(0, 188, 212, 0.15);
    transform: translateX(10px);
  }
  
  .contact-link:hover .contact-icon-wrapper {
    transform: scale(1.1) rotate(10deg);
    box-shadow: 0 5px 15px rgba(0, 188, 212, 0.4);
  }
  
  .contact-link:hover span {
    color: #00BCD4;
  }

  /* Service Item Hover */
  .service-item:hover {
    background: rgba(0, 188, 212, 0.08);
    color: #00BCD4 !important;
    transform: scale(1.02);
  }

  /* Support Box Hover */
  .support-box:hover {
    background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.08) 100%) !important;
    border-color: rgba(0, 188, 212, 0.4) !important;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 188, 212, 0.15);
  }

  /* Footer Link Button Hover */
  .footer-link-btn:hover {
    color: #00BCD4 !important;
    background: rgba(0, 188, 212, 0.1);
  }

  /* Scroll To Top Button Hover */
  .scroll-top-btn:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 12px 35px rgba(0, 188, 212, 0.5) !important;
  }

  /* WhatsApp Float Hover */
  .whatsapp-float:hover {
    transform: scale(1.15) rotate(10deg);
    filter: drop-shadow(0 8px 20px rgba(37, 211, 102, 0.5)) !important;
  }

  /* Popup Close Button Hover */
  .popup-close-btn:hover {
    background: #00BCD4 !important;
    color: #ffffff !important;
    transform: rotate(90deg);
  }

  /* Responsive */
  @media (max-width: 768px) {
    [style*="visionTitle"] {
      font-size: 1.8rem !important;
    }
    
    [style*="visionSubtitle"] {
      font-size: 1.2rem !important;
    }
    
    [style*="serviceColumnMiddle"] {
      border-left: none !important;
      border-right: none !important;
      border-top: 1px solid rgba(0, 188, 212, 0.3) !important;
      border-bottom: 1px solid rgba(0, 188, 212, 0.3) !important;
    }
    
    [style*="footerBottom"] {
      flex-direction: column !important;
      text-align: center !important;
    }
  }
`;

if (!document.getElementById('footer-styles')) {
  styleSheet.id = 'footer-styles';
  document.head.appendChild(styleSheet);
}

export default Footer;
