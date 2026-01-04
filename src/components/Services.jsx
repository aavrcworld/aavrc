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
        }

        html, body {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
        }

        .services-section {
          padding: 100px 20px;
          background: #ffffff;
          width: 100%;
          overflow-x: hidden;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .services-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .services-badge {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%);
          border: 1px solid rgba(0, 188, 212, 0.3);
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .services-badge-text {
          color: #0097A7;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .services-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: 1px;
          margin-bottom: 15px;
          margin-top: 0;
        }

        .services-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #00BCD4, #0097A7);
          margin: 0 auto 20px;
          border-radius: 2px;
        }

        .services-subtitle {
          font-size: 1.1rem;
          color: #666;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
          width: 100%;
        }

        .service-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
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

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.1);
        }

        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.1) 100%);
          pointer-events: none;
        }

        .service-content {
          padding: 30px;
        }

        .service-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          margin-top: 0;
          word-wrap: break-word;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-title {
          color: #00BCD4;
        }

        .service-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 20px;
          word-wrap: break-word;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          font-size: 0.9rem;
          color: #555;
          border-bottom: 1px solid #f5f5f5;
        }

        .feature-item:last-child {
          border-bottom: none;
        }

        .check-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .services-cta {
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          border-radius: 25px;
          box-shadow: 0 20px 60px rgba(0,188,212,0.3);
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 15px;
          margin-top: 0;
        }

        .cta-text {
          font-size: 1.1rem;
          color: #ffffff;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .cta-button {
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

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        /* Tablet Responsive */
        @media (max-width: 992px) {
          .services-section {
            padding: 80px 15px;
          }

          .services-main-title {
            font-size: 2.2rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .services-section {
            padding: 70px 15px;
          }

          .services-main-title {
            font-size: 2rem;
          }

          .services-subtitle {
            font-size: 1rem;
            padding: 0 10px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 60px;
          }

          .service-image-container {
            height: 200px;
          }

          .service-content {
            padding: 25px;
          }

          .service-title {
            font-size: 1.3rem;
          }

          .service-description {
            font-size: 0.9rem;
          }

          .services-cta {
            padding: 50px 25px;
            border-radius: 20px;
          }

          .cta-title {
            font-size: 1.6rem;
          }

          .cta-text {
            font-size: 1rem;
          }
        }

        /* Small Mobile Responsive */
        @media (max-width: 480px) {
          .services-section {
            padding: 50px 10px;
          }

          .services-main-title {
            font-size: 1.6rem;
          }

          .services-subtitle {
            font-size: 0.9rem;
            padding: 0 5px;
          }

          .services-badge {
            padding: 8px 16px;
          }

          .services-badge-text {
            font-size: 0.8rem;
          }

          .services-grid {
            gap: 20px;
            margin-bottom: 40px;
          }

          .service-image-container {
            height: 180px;
          }

          .service-content {
            padding: 20px;
          }

          .service-title {
            font-size: 1.15rem;
            margin-bottom: 10px;
          }

          .service-description {
            font-size: 0.85rem;
            margin-bottom: 15px;
          }

          .feature-item {
            font-size: 0.82rem;
            padding: 6px 0;
          }

          .check-icon {
            width: 18px;
            height: 18px;
            font-size: 0.65rem;
          }

          .services-cta {
            padding: 35px 15px;
            border-radius: 15px;
          }

          .cta-title {
            font-size: 1.3rem;
            margin-bottom: 12px;
          }

          .cta-text {
            font-size: 0.9rem;
            margin-bottom: 20px;
          }

          .cta-button {
            padding: 13px 30px;
            font-size: 0.9rem;
            width: 100%;
            max-width: 280px;
          }

          .services-header {
            margin-bottom: 40px;
          }
        }

        /* Extra Small Devices */
        @media (max-width: 375px) {
          .services-section {
            padding: 45px 8px;
          }

          .services-main-title {
            font-size: 1.5rem;
          }

          .services-subtitle {
            font-size: 0.85rem;
          }

          .service-image-container {
            height: 160px;
          }

          .service-content {
            padding: 15px;
          }

          .service-title {
            font-size: 1rem;
          }

          .service-description {
            font-size: 0.8rem;
          }

          .feature-item {
            font-size: 0.78rem;
          }

          .cta-title {
            font-size: 1.2rem;
          }

          .cta-text {
            font-size: 0.85rem;
          }

          .cta-button {
            padding: 12px 25px;
            font-size: 0.85rem;
            max-width: 260px;
          }
        }
      `}</style>

      <section className="services-section" id="services">
        <div className="services-container">
          {/* Header */}
          <div className="services-header">
            <div className="services-badge">
              <span className="services-badge-text">What We Offer</span>
            </div>
            <h2 className="services-main-title">OUR SERVICES</h2>
            <div className="services-divider"></div>
            <p className="services-subtitle">
              Comprehensive Solutions for Your Digital Transformation
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                {/* Image Section */}
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-overlay"></div>
                </div>
                
                {/* Content Section */}
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <div className="check-icon">✓</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="services-cta">
            <h3 className="cta-title">Ready to Transform Your Business?</h3>
            <p className="cta-text">
              Let's discuss how our services can help you achieve your goals
            </p>
            <a href="#footer" className="cta-button">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;