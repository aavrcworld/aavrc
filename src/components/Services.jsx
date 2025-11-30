import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "fas fa-laptop-code",
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
      icon: "fas fa-globe",
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
      icon: "fas fa-cogs",
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
      icon: "fas fa-users-cog",
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
      icon: "fas fa-book-open",
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
      icon: "fas fa-shopping-cart",
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
      icon: "fas fa-puzzle-piece",
      title: "Custom Web Applications",
      description:
        "Build any type of web application with fully customized features tailored to your specific business requirements and workflows.",
      features: [
        "100% customized solutions",
        "Industry-specific applications",
        "Scalable architecture",
        "Integration capabilities",
      ],
    },
    {
      icon: "fas fa-tools",
      title: "Complete Software Solutions",
      description:
        "End-to-end software solutions from consultation to deployment, including maintenance and ongoing support for all your digital needs.",
      features: [
        "Consultation & planning",
        "Custom development",
        "Testing & deployment",
        "Maintenance & support",
      ],
    },
    {
      icon: "fab fa-aws",
      title: "AWS & Cloud Services",
      description:
        "Professional cloud deployment and management using Amazon Web Services with scalable infrastructure and secure hosting solutions.",
      features: [
        "AWS EC2 server setup",
        "Amazon S3 storage solutions",
        "Cloud migration services",
        "Load balancing & scaling",
      ],
    },
    {
      icon: "fas fa-server",
      title: "Web Hosting & Management",
      description:
        "Reliable web hosting services with complete server management, monitoring, and maintenance for optimal website performance.",
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
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="service-card">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
