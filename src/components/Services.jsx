import React from "react";
import webAppImg from "../media/services/webapp.jpg";
import websiteImg from "../media/services/web.jpg";
import softwareImg from "../media/services/soft.jpg";
import employeeImg from "../media/services/employee.jpg";
import flipbookImg from "../media/services/flipbook.jpg";
import ecommerceImg from "../media/services/ecom.jpg";
import customAppImg from "../media/services/customapp.jpg";
import solutionsImg from "../media/services/solution.jpg";
import awsImg from "../media/services/aws.jpg";
import hostingImg from "../media/services/hosting.jpg";

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
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }

        .service-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .service-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .service-zoom-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-zoom-image {
          transform: scale(1.1);
        }

        .cta-button-link {
          display: inline-block;
          padding: 16px 40px;
          font-size: 1rem;
          font-weight: 600;
          color: #00BCD4;
          background: #ffffff;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-decoration: none;
        }

        .cta-button-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        /* Tablet */
        @media (max-width: 992px) {
          .services-section-main {
            padding: 80px 15px !important;
          }

          .main-title-services {
            font-size: 2.2rem !important;
          }

          .services-grid-main {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 25px !important;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .services-section-main {
            padding: 70px 10px !important;
          }

          .main-title-services {
            font-size: 2rem !important;
          }

          .subtitle-services {
            font-size: 1rem !important;
            padding: 0 10px;
          }

          .services-grid-main {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
            margin-bottom: 60px !important;
          }

          .card-content-services {
            padding: 25px !important;
          }

          .service-title-main {
            font-size: 1.3rem !important;
          }

          .service-description-main {
            font-size: 0.9rem !important;
          }

          .cta-section-main {
            padding: 50px 25px !important;
            border-radius: 20px !important;
          }

          .cta-title-main {
            font-size: 1.6rem !important;
          }

          .cta-text-main {
            font-size: 1rem !important;
          }

          .service-image-container {
            height: 200px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .services-section-main {
            padding: 50px 5px !important;
          }

          .main-title-services {
            font-size: 1.6rem !important;
          }

          .subtitle-services {
            font-size: 0.9rem !important;
            padding: 0 5px;
          }

          .services-grid-main {
            gap: 18px !important;
            margin-bottom: 40px !important;
          }

          .service-image-container {
            height: 180px;
          }

          .card-content-services {
            padding: 18px !important;
          }

          .service-title-main {
            font-size: 1.1rem !important;
            margin-bottom: 10px !important;
          }

          .service-description-main {
            font-size: 0.85rem !important;
            margin-bottom: 15px !important;
          }

          .feature-item-services {
            font-size: 0.82rem !important;
            padding: 6px 0 !important;
          }

          .check-icon-services {
            width: 18px !important;
            height: 18px !important;
            font-size: 0.65rem !important;
          }

          .cta-section-main {
            padding: 35px 15px !important;
            border-radius: 15px !important;
          }

          .cta-title-main {
            font-size: 1.3rem !important;
            margin-bottom: 12px !important;
          }

          .cta-text-main {
            font-size: 0.9rem !important;
            margin-bottom: 20px !important;
          }

          .cta-button-link {
            padding: 13px 30px;
            font-size: 0.9rem;
            width: 100%;
            max-width: 280px;
          }
        }

        /* Extra Small */
        @media (max-width: 375px) {
          .services-section-main {
            padding: 45px 3px !important;
          }

          .main-title-services {
            font-size: 1.5rem !important;
          }

          .subtitle-services {
            font-size: 0.85rem !important;
          }

          .service-image-container {
            height: 160px;
          }

          .card-content-services {
            padding: 15px !important;
          }

          .service-title-main {
            font-size: 1rem !important;
          }

          .service-description-main {
            font-size: 0.8rem !important;
          }

          .cta-title-main {
            font-size: 1.2rem !important;
          }

          .cta-text-main {
            font-size: 0.85rem !important;
          }

          .cta-button-link {
            padding: 12px 25px;
            font-size: 0.85rem;
            max-width: 260px;
          }
        }
      `}</style>

      <section style={styles.servicesSection} id="services" className="services-section-main">
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.headerSection}>
            <div style={styles.badge}>
              <span style={styles.badgeText}>What We Offer</span>
            </div>
            <h2 style={styles.mainTitle} className="main-title-services">OUR SERVICES</h2>
            <div style={styles.divider}></div>
            <p style={styles.subtitle} className="subtitle-services">Comprehensive Solutions for Your Digital Transformation</p>
          </div>

          {/* Services Grid */}
          <div style={styles.servicesGrid} className="services-grid-main">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                {/* Image Section */}
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-zoom-image"
                  />
                  <div style={styles.imageOverlay}></div>
                </div>
                
                {/* Content Section */}
                <div style={styles.cardContent} className="card-content-services">
                  <h3 style={styles.serviceTitle} className="service-title-main">{service.title}</h3>
                  <p style={styles.serviceDescription} className="service-description-main">{service.description}</p>
                  <ul style={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={styles.featureItem} className="feature-item-services">
                        <div style={styles.checkIcon} className="check-icon-services">✓</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div style={styles.ctaSection} className="cta-section-main">
            <h3 style={styles.ctaTitle} className="cta-title-main">Ready to Transform Your Business?</h3>
            <p style={styles.ctaText} className="cta-text-main">
              Let's discuss how our services can help you achieve your goals
            </p>
            <a href="#footer" className="cta-button-link">Get Started Today</a>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  servicesSection: {
    padding: '100px 20px',
    background: '#ffffff',
    width: '100%',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
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
    lineHeight: '1.6',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    marginBottom: '80px',
    width: '100%',
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
    wordWrap: 'break-word',
  },
  serviceDescription: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: '#666',
    marginBottom: '20px',
    wordWrap: 'break-word',
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
    width: '100%',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '15px',
    wordWrap: 'break-word',
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#ffffff',
    marginBottom: '30px',
    opacity: 0.95,
    wordWrap: 'break-word',
  },
};

export default Services;