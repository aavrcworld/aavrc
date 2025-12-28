import React from "react";
import webAppImg from "../media/5.jpg";
import websiteImg from "../media/5.jpg";
import softwareImg from "../media/5.jpg";
import employeeImg from "../media/5.jpg";
import flipbookImg from "../media/5.jpg";
import ecommerceImg from "../media/5.jpg";
import customAppImg from "../media/5.jpg";
import solutionsImg from "../media/5.jpg";
import awsImg from "../media/5.jpg";
import hostingImg from "../media/5.jpg";

function Services() {
  const services = [
    {
      image: webAppImg,
      title: "Web Applications",
      description:
        "Custom web applications tailored to your business needs with modern technologies and user-friendly interfaces.",
      features: [
        "Custom business applications",
        "Real-time data processing",
        "User authentication systems",
        "Mobile-responsive design",
      ],
    },
    {
      image: websiteImg,
      title: "Professional Websites",
      description:
        "Modern, responsive websites that represent your brand professionally and engage your audience effectively.",
      features: [
        "Custom website design",
        "SEO optimization",
        "Content management systems",
        "Performance optimization",
      ],
    },
    {
      image: softwareImg,
      title: "Web Software Solutions",
      description:
        "Comprehensive web-based software solutions designed to streamline your business operations and increase efficiency.",
      features: [
        "Custom software development",
        "Database management",
        "API integrations",
        "Cloud-based solutions",
      ],
    },
    {
      image: employeeImg,
      title: "Employee Management System",
      description:
        "Complete employee management solutions with attendance tracking, salary management, and HR functionalities.",
      features: [
        "Attendance tracking system",
        "Salary calculation & payroll",
        "Employee profiles & records",
        "Leave management system",
      ],
    },
    {
      image: flipbookImg,
      title: "Digital Flipbook Applications",
      description:
        "Interactive flipbook applications that simulate real book page-turning experience with stunning visual effects.",
      features: [
        "Realistic page-turning effects",
        "Image & PDF support",
        "Mobile-friendly interface",
        "Customizable designs",
      ],
    },
    {
      image: ecommerceImg,
      title: "E-Commerce Platforms",
      description:
        "Full-featured e-commerce websites with payment integration, inventory management, and customer management systems.",
      features: [
        "Online store development",
        "Payment gateway integration",
        "Inventory management",
        "Order tracking system",
      ],
    },
    {
      image: customAppImg,
      title: "Custom Web Applications",
      description:
        "Build any type of web application with fully customized features tailored to your specific business requirements.",
      features: [
        "100% customized solutions",
        "Industry-specific applications",
        "Scalable architecture",
        "Integration capabilities",
      ],
    },
    {
      image: solutionsImg,
      title: "Complete Software Solutions",
      description:
        "End-to-end software solutions from consultation to deployment, including maintenance and ongoing support.",
      features: [
        "Consultation & planning",
        "Custom development",
        "Testing & deployment",
        "Maintenance & support",
      ],
    },
    {
      image: awsImg,
      title: "AWS & Cloud Services",
      description:
        "Professional cloud deployment and management using Amazon Web Services with scalable infrastructure.",
      features: [
        "AWS EC2 server setup",
        "Amazon S3 storage solutions",
        "Cloud migration services",
        "Load balancing & scaling",
      ],
    },
    {
      image: hostingImg,
      title: "Web Hosting & Management",
      description:
        "Reliable web hosting services with complete server management, monitoring, and maintenance.",
      features: [
        "Shared & dedicated hosting",
        "Server configuration & setup",
        "24/7 monitoring & support",
        "Backup & security management",
      ],
    },
  ];

  return (
    <section style={styles.servicesSection} id="services">
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.headerSection}>
          <div style={styles.badge}>
            <span style={styles.badgeText}>What We Offer</span>
          </div>
          <h2 style={styles.mainTitle}>OUR SERVICES</h2>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>Comprehensive Solutions for Your Digital Transformation</p>
        </div>

        {/* Services Grid */}
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceCard} className="service-card">
              {/* Image Section */}
              <div style={styles.imageContainer} className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title}
                  style={styles.serviceImage}
                  className="service-zoom-image"
                />
                <div style={styles.imageOverlay}></div>
              </div>
              
              {/* Content Section */}
              <div style={styles.cardContent}>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
                <ul style={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <div style={styles.checkIcon}>✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={styles.ctaSection}>
          <h3 style={styles.ctaTitle}>Ready to Transform Your Business?</h3>
          <p style={styles.ctaText}>
            Let's discuss how our services can help you achieve your goals
          </p>
          <a href="#contact" style={styles.ctaButton}>Get Started Today</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  servicesSection: {
    padding: '100px 20px',
    background: '#ffffff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '60px',
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
  },
  divider: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #00BCD4, #0097A7)',
    margin: '0 auto 20px',
    borderRadius: '2px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
    fontWeight: '400',
    maxWidth: '600px',
    margin: '0 auto',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '80px',
  },
  serviceCard: {
    background: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    border: '1px solid #f0f0f0',
  },
  imageContainer: {
    position: 'relative',
    height: '220px',
    overflow: 'hidden',
  },
  serviceImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 100%)',
    pointerEvents: 'none',
  },
  cardContent: {
    padding: '30px',
  },
  serviceTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
  },
  serviceDescription: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: '#666',
    marginBottom: '20px',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 20px 0',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 0',
    fontSize: '0.9rem',
    color: '#555',
    borderBottom: '1px solid #f5f5f5',
  },
  checkIcon: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: '0.7rem',
    fontWeight: '700',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '60px 40px',
    background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    borderRadius: '25px',
    boxShadow: '0 20px 60px rgba(0,188,212,0.3)',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '15px',
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#ffffff',
    marginBottom: '30px',
    opacity: 0.95,
  },
  ctaButton: {
    display: 'inline-block',
    padding: '16px 40px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#00BCD4',
    background: '#ffffff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    textDecoration: 'none',
  },
};

// Add hover effects
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .service-image-container:hover .service-zoom-image {
    transform: scale(1.1);
  }
  
  @media (hover: hover) {
    [style*="ctaButton"]:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.3) !important;
    }
  }
  
  @media (max-width: 768px) {
    [style*="servicesGrid"] {
      grid-template-columns: 1fr !important;
    }
    
    [style*="mainTitle"] {
      font-size: 2rem !important;
    }
    
    [style*="ctaSection"] {
      padding: 40px 20px !important;
    }
    
    [style*="ctaTitle"] {
      font-size: 1.5rem !important;
    }
  }
`;

if (!document.getElementById('services-styles')) {
  styleSheet.id = 'services-styles';
  document.head.appendChild(styleSheet);
}

export default Services;

