import React from "react";
import aboutImg1 from "../media/3.jpg";
import aboutImg2 from "../media/4.jpg"; 
import aboutImg3 from "../media/6.jpg"; 

function About() {
  return (
    <section style={styles.aboutSection} id="about">
      <div style={styles.container}>
        {/* Main About Section - Content Left, Images Right */}
        <div style={styles.aboutGrid}>
          {/* Left - Content */}
          <div style={styles.contentSection}>
            <div style={styles.badge}>
              <span style={styles.badgeText}>About Us</span>
            </div>
            
            <h2 style={styles.mainTitle}>YOUR VISION. OUR TECHNOLOGY</h2>
            <div style={styles.divider}></div>
            <p style={styles.subtitle}>We Engineer Solutions That Transform Businesses</p>
            
            <p style={styles.description}>
              AAVRC specializes in comprehensive web development solutions
              including custom web applications, professional websites,
              employee management systems with attendance and salary handling,
              digital flipbook applications, e-commerce platforms, AI-powered 
              chatbots, machine learning models, computer vision systems, 
              natural language processing solutions, predictive analytics, 
              and intelligent automation systems.
            </p>

            <p style={styles.description}>
              We are committed to delivering high-quality, scalable, and 
              innovative solutions that help businesses grow and succeed 
              in the digital world. Our team combines creativity with 
              technical expertise to build products that make a difference.
            </p>

            <div style={styles.featuresGrid}>
              <div style={styles.featureItem}>
                <div style={styles.checkIcon}>✓</div>
                <span>Complete web application development</span>
              </div>
              <div style={styles.featureItem}>
                <div style={styles.checkIcon}>✓</div>
                <span>AI-powered chatbots and virtual assistants</span>
              </div>
              <div style={styles.featureItem}>
                <div style={styles.checkIcon}>✓</div>
                <span>Employee management systems</span>
              </div>
              <div style={styles.featureItem}>
                <div style={styles.checkIcon}>✓</div>
                <span>Machine learning models</span>
              </div>
              <div style={styles.featureItem}>
                <div style={styles.checkIcon}>✓</div>
                <span>E-commerce platforms</span>
              </div>
              <div style={styles.featureItem}>
                <div style={styles.checkIcon}>✓</div>
                <span>24/7 Support & Maintenance</span>
              </div>
            </div>

            <div style={styles.ctaButtons}>
              <a href="#contact" style={styles.btnPrimary}>
                Get Started
              </a>
              <a href="#projects" style={styles.btnSecondary}>
                View Projects
              </a>
            </div>
          </div>

          {/* Right - Multiple Images */}
          <div style={styles.imageSection}>
            <div style={styles.imagesWrapper}>
              {/* Main Large Image */}
              <div style={styles.mainImageContainer} className="about-image-container">
                <img 
                  src={aboutImg1} 
                  alt="About AAVRC"
                  style={styles.mainImage}
                  className="about-zoom-image"
                />
              </div>
              
              {/* Secondary Image - Top Right */}
              <div style={styles.secondaryImageContainer} className="about-image-container">
                <img 
                  src={aboutImg2} 
                  alt="Our Team"
                  style={styles.secondaryImage}
                  className="about-zoom-image"
                />
              </div>
              
              {/* Third Image - Bottom Left */}
              <div style={styles.thirdImageContainer} className="about-image-container">
                <img 
                  src={aboutImg3} 
                  alt="Our Work"
                  style={styles.thirdImage}
                  className="about-zoom-image"
                />
              </div>
              
              {/* Experience Badge */}
              <div style={styles.experienceBadge}>
                <span style={styles.expNumber}>5+</span>
                <span style={styles.expText}>Years Experience</span>
              </div>
              
              {/* Floating Card */}
              <div style={styles.floatingCard}>
                <span style={styles.floatingIcon}>🚀</span>
                <span style={styles.floatingText}>50+ Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div style={styles.profileSection}>
          <div style={styles.profileCard}>
            <div style={styles.profileImg}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div style={styles.profileInfo}>
              <h3 style={styles.profileName}>Rajender Chauhan</h3>
              <p style={styles.designation}>Company Owner & Lead Developer</p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div style={styles.skillsSection}>
          <h3 style={styles.sectionTitle}>Technical Skills & Expertise</h3>
          <div style={styles.skillsGrid}>
            {/* Frontend */}
            <div style={styles.skillCard}>
              <div style={styles.skillHeader}>
                <svg style={styles.skillIcon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <h4 style={styles.skillTitle}>Frontend Development</h4>
              </div>
              <ul style={styles.skillList}>
                <li style={styles.skillItem}>React.js & Redux</li>
                <li style={styles.skillItem}>HTML5 & CSS3</li>
                <li style={styles.skillItem}>JavaScript (ES6+)</li>
                <li style={styles.skillItem}>Bootstrap 5</li>
              </ul>
            </div>

            {/* Backend */}
            <div style={styles.skillCard}>
              <div style={styles.skillHeader}>
                <svg style={styles.skillIcon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" />
                  <line x1="6" y1="6" x2="6" y2="6" />
                  <line x1="6" y1="18" x2="6" y2="18" />
                </svg>
                <h4 style={styles.skillTitle}>Backend Development</h4>
              </div>
              <ul style={styles.skillList}>
                <li style={styles.skillItem}>Node.js & Express.js</li>
                <li style={styles.skillItem}>MongoDB & Mongoose</li>
                <li style={styles.skillItem}>RESTful APIs</li>
                <li style={styles.skillItem}>QR Code Generation</li>
              </ul>
            </div>

            {/* AI & ML */}
            <div style={styles.skillCard}>
              <div style={styles.skillHeader}>
                <svg style={styles.skillIcon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M12 22a3 3 0 0 0 3-3v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z" />
                  <path d="M2 12a3 3 0 0 1 3-3h4a3 3 0 0 1 0 6H5a3 3 0 0 1-3-3z" />
                  <path d="M22 12a3 3 0 0 0-3-3h-4a3 3 0 0 0 0 6h4a3 3 0 0 0 3-3z" />
                </svg>
                <h4 style={styles.skillTitle}>AI & Machine Learning</h4>
              </div>
              <ul style={styles.skillList}>
                <li style={styles.skillItem}>OpenAI GPT Integration</li>
                <li style={styles.skillItem}>AI Chatbots</li>
                <li style={styles.skillItem}>Computer Vision</li>
                <li style={styles.skillItem}>NLP Solutions</li>
              </ul>
            </div>

            {/* Cloud & AI Services */}
            <div style={styles.skillCard}>
              <div style={styles.skillHeader}>
                <svg style={styles.skillIcon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
                <h4 style={styles.skillTitle}>Cloud & AI Services</h4>
              </div>
              <ul style={styles.skillList}>
                <li style={styles.skillItem}>AWS AI/ML Services</li>
                <li style={styles.skillItem}>TensorFlow & PyTorch</li>
                <li style={styles.skillItem}>Git & GitHub</li>
                <li style={styles.skillItem}>Predictive Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Services Section */}
        <div style={styles.servicesSection}>
          <h3 style={styles.sectionTitle}>AI-Powered Solutions We Offer</h3>
          <p style={styles.servicesSubtitle}>Transform your business with cutting-edge artificial intelligence</p>
          
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIconCircle}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h4 style={styles.serviceTitle}>Intelligent Chatbots</h4>
              <p style={styles.serviceDesc}>Custom AI chatbots for customer support and lead generation using OpenAI GPT.</p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconCircle}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h4 style={styles.serviceTitle}>Computer Vision</h4>
              <p style={styles.serviceDesc}>Image recognition, object detection, and automated visual inspection systems.</p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconCircle}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h4 style={styles.serviceTitle}>Predictive Analytics</h4>
              <p style={styles.serviceDesc}>Machine learning models for sales forecasting and business intelligence.</p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconCircle}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h4 style={styles.serviceTitle}>NLP Solutions</h4>
              <p style={styles.serviceDesc}>Text analysis, sentiment analysis, and language translation systems.</p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconCircle}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3" />
                </svg>
              </div>
              <h4 style={styles.serviceTitle}>Process Automation</h4>
              <p style={styles.serviceDesc}>Intelligent workflow automation and repetitive task optimization using AI.</p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIconCircle}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M12 22a3 3 0 0 0 3-3v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z" />
                </svg>
              </div>
              <h4 style={styles.serviceTitle}>Custom AI Models</h4>
              <p style={styles.serviceDesc}>Tailored machine learning models trained on your data for optimal performance.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={styles.statsSection}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>50+</div>
              <p style={styles.statLabel}>Projects Completed</p>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>30+</div>
              <p style={styles.statLabel}>Happy Clients</p>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>5+</div>
              <p style={styles.statLabel}>Years Experience</p>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>24/7</div>
              <p style={styles.statLabel}>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  aboutSection: {
    padding: '100px 20px',
    background: '#ffffff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    marginBottom: '80px',
  },
  contentSection: {
    padding: '20px 0',
    textAlign: 'left',
  },
  imageSection: {
    position: 'relative',
  },
  imagesWrapper: {
    position: 'relative',
    height: '550px',
  },
  mainImageContainer: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '75%',
    height: '350px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    border: '4px solid #fff',
    cursor: 'pointer',
    zIndex: 1,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  secondaryImageContainer: {
    position: 'absolute',
    top: '40px',
    left: '0',
    width: '45%',
    height: '200px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    border: '4px solid #fff',
    cursor: 'pointer',
    zIndex: 2,
  },
  secondaryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  thirdImageContainer: {
    position: 'absolute',
    bottom: '0',
    left: '10%',
    width: '55%',
    height: '220px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    border: '4px solid #fff',
    cursor: 'pointer',
    zIndex: 3,
  },
  thirdImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  experienceBadge: {
    position: 'absolute',
    bottom: '80px',
    right: '0',
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    padding: '20px 25px',
    borderRadius: '15px',
    boxShadow: '0 15px 40px rgba(0, 188, 212, 0.4)',
    textAlign: 'center',
    zIndex: 4,
  },
  expNumber: {
    display: 'block',
    fontSize: '2.2rem',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1',
  },
  expText: {
    display: 'block',
    fontSize: '0.85rem',
    color: '#ffffff',
    marginTop: '5px',
  },
  floatingCard: {
    position: 'absolute',
    top: '280px',
    right: '60%',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 18px',
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
    border: '1px solid rgba(0, 188, 212, 0.2)',
    zIndex: 5,
    animation: 'float 3s ease-in-out infinite',
  },
  floatingIcon: {
    fontSize: '1.3rem',
  },
  floatingText: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  badge: {
    display: 'inline-block',
    padding: '10px 20px',
    background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%)',
    border: '1px solid rgba(0, 188, 212, 0.3)',
    borderRadius: '50px',
    marginBottom: '20px',
  },
  badgeText: {
    color: '#0097A7',
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '1px',
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1a1a1a',
    letterSpacing: '1px',
    marginBottom: '15px',
    lineHeight: '1.2',
  },
  divider: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #00BCD4, #0097A7)',
    marginBottom: '15px',
    borderRadius: '2px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#00BCD4',
    fontWeight: '500',
    marginBottom: '25px',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#666',
    marginBottom: '30px',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    marginBottom: '30px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '0.95rem',
    color: '#555',
  },
  checkIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontWeight: '700',
    fontSize: '0.8rem',
  },
  ctaButtons: {
    display: 'flex',
    gap: '15px',
  },
  btnPrimary: {
    padding: '14px 30px',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 8px 25px rgba(0, 188, 212, 0.35)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  btnSecondary: {
    padding: '14px 30px',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    background: 'transparent',
    color: '#1a1a1a',
    border: '2px solid #1a1a1a',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  profileSection: {
    marginBottom: '80px',
  },
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    borderRadius: '20px',
    padding: '30px 40px',
    boxShadow: '0 15px 40px rgba(0, 188, 212, 0.3)',
  },
  profileImg: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '5px',
  },
  designation: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
  },
  skillsSection: {
    marginBottom: '80px',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '40px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
  },
  skillCard: {
    background: '#ffffff',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 5px 30px rgba(0,0,0,0.08)',
    borderLeft: '4px solid #00BCD4',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  skillHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  skillIcon: {
    flexShrink: 0,
  },
  skillTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: 0,
  },
  skillList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  skillItem: {
    padding: '10px 0',
    borderBottom: '1px solid #f0f0f0',
    fontSize: '0.95rem',
    color: '#666',
  },
  servicesSection: {
    marginBottom: '80px',
  },
  servicesSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    textAlign: 'center',
    marginBottom: '40px',
    marginTop: '-25px',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  serviceCard: {
    background: '#ffffff',
    borderRadius: '15px',
    padding: '35px',
    textAlign: 'center',
    boxShadow: '0 5px 30px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #f0f0f0',
  },
  serviceIconCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
  serviceTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '15px',
  },
  serviceDesc: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: '#666',
    margin: 0,
  },
  statsSection: {
    padding: '40px 0',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
  },
  statCard: {
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    borderRadius: '15px',
    padding: '40px 20px',
    textAlign: 'center',
    boxShadow: '0 15px 40px rgba(0,188,212,0.3)',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '10px',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#ffffff',
    margin: 0,
    fontWeight: '500',
  },
};

// Add CSS for hover effects
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .about-image-container:hover .about-zoom-image {
    transform: scale(1.1);
  }
  
  @media (hover: hover) {
    [style*="btnPrimary"]:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(0, 188, 212, 0.45) !important;
    }
    
    [style*="btnSecondary"]:hover {
      background: #1a1a1a !important;
      color: #ffffff !important;
      transform: translateY(-3px);
    }
    
    [style*="skillCard"]:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.12) !important;
    }
    
    [style*="serviceCard"]:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.12) !important;
    }
  }
  
  @media (max-width: 992px) {
    [style*="aboutGrid"] {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    
    [style*="imagesWrapper"] {
      height: 450px !important;
    }
    
    [style*="mainTitle"] {
      font-size: 2rem !important;
    }
    
    [style*="featuresGrid"] {
      grid-template-columns: 1fr !important;
    }
    
    [style*="mainImageContainer"] {
      width: 70% !important;
      height: 280px !important;
    }
    
    [style*="secondaryImageContainer"] {
      width: 50% !important;
      height: 160px !important;
    }
    
    [style*="thirdImageContainer"] {
      width: 60% !important;
      height: 180px !important;
    }
  }
  
  @media (max-width: 768px) {
    [style*="imagesWrapper"] {
      height: 400px !important;
    }
    
    [style*="mainImageContainer"] {
      width: 75% !important;
      height: 250px !important;
      right: 0 !important;
    }
    
    [style*="secondaryImageContainer"] {
      width: 45% !important;
      height: 140px !important;
      top: 30px !important;
    }
    
    [style*="thirdImageContainer"] {
      width: 55% !important;
      height: 150px !important;
      left: 5% !important;
    }
    
    [style*="experienceBadge"] {
      padding: 15px 20px !important;
      bottom: 60px !important;
    }
    
    [style*="expNumber"] {
      font-size: 1.8rem !important;
    }
    
    [style*="floatingCard"] {
      display: none !important;
    }
    
    [style*="profileCard"] {
      flex-direction: column !important;
      text-align: center !important;
      padding: 30px 20px !important;
    }
    
    [style*="ctaButtons"] {
      flex-direction: column !important;
    }
    
    [style*="btnPrimary"], [style*="btnSecondary"] {
      text-align: center !important;
      justify-content: center !important;
    }
  }
`;

if (!document.getElementById('about-styles')) {
  styleSheet.id = 'about-styles';
  document.head.appendChild(styleSheet);
}

export default About;
