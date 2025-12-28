import React from "react";
import projectImg1 from "../media/5.jpg";
import projectImg2 from "../media/5.jpg";
import projectImg3 from "../media/5.jpg";
import projectImg4 from "../media/5.jpg";
import projectImg5 from "../media/5.jpg";
import projectImg6 from "../media/5.jpg";

function Project() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "Complete HR solution with attendance tracking, salary management, and employee records.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: projectImg1,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with payment integration and inventory management.",
      technologies: ["React", "Node.js", "Stripe", "AWS S3"],
      image: projectImg2,
    },
    {
      title: "Digital Flipbook App",
      description:
        "Interactive flipbook application with realistic page-turning effects.",
      technologies: ["React", "CSS3", "JavaScript", "PDF.js"],
      image: projectImg3,
    },
    {
      title: "Business Web Application",
      description:
        "Custom web application tailored for specific business requirements.",
      technologies: ["MERN Stack", "JWT", "Bootstrap", "API"],
      image: projectImg4,
    },
    {
      title: "Professional Website",
      description:
        "Modern responsive website with SEO optimization and CMS integration.",
      technologies: ["React", "Bootstrap", "SEO", "CMS"],
      image: projectImg5,
    },
    {
      title: "Cloud-Based Software",
      description:
        "Scalable cloud solution deployed on AWS with robust infrastructure.",
      technologies: ["AWS", "EC2", "S3", "MongoDB"],
      image: projectImg6,
    },
  ];

  return (
    <section style={styles.projectsSection} id="projects">
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.headerSection}>
          <div style={styles.badge}>
            <span style={styles.badgeText}>Our Work</span>
          </div>
          <h2 style={styles.mainTitle}>OUR PROJECTS</h2>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>
            Showcasing Excellence in Web Development & AI Solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard} className="project-card">
              {/* Project Image Section */}
              <div style={styles.projectImageWrapper} className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={styles.projectImage}
                  className="project-zoom-image"
                />
                <div style={styles.imageOverlay}></div>
              </div>

              {/* Project Content */}
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>

                {/* Tech Stack */}
                <div style={styles.techStack}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} style={styles.techTag} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={styles.ctaSection}>
          <h3 style={styles.ctaTitle}>Have a Project in Mind?</h3>
          <p style={styles.ctaText}>
            Let's bring your vision to life with our expertise
          </p>
          <a href="#contact" style={styles.ctaButton} className="cta-button">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  projectsSection: {
    padding: "100px 20px",
    background: "#ffffff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "60px",
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
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#1a1a1a",
    letterSpacing: "1px",
    marginBottom: "15px",
  },
  divider: {
    width: "80px",
    height: "4px",
    background: "linear-gradient(90deg, #00BCD4, #0097A7)",
    margin: "0 auto 20px",
    borderRadius: "2px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#666",
    fontWeight: "400",
    maxWidth: "600px",
    margin: "0 auto",
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginBottom: "80px",
  },
  projectCard: {
    background: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
    transition: "all 0.4s ease",
    cursor: "pointer",
    border: "1px solid #f0f0f0",
  },
  projectImageWrapper: {
    height: "240px",
    overflow: "hidden",
    position: "relative",
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 100%)",
    pointerEvents: "none",
    transition: "all 0.3s ease",
  },
  projectContent: {
    padding: "30px",
  },
  projectTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "12px",
    transition: "color 0.3s ease",
  },
  projectDescription: {
    fontSize: "0.95rem",
    lineHeight: "1.7",
    color: "#666",
    marginBottom: "20px",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  techTag: {
    background: "linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%)",
    color: "#00BCD4",
    padding: "8px 16px",
    borderRadius: "25px",
    fontSize: "0.85rem",
    fontWeight: "600",
    border: "1px solid rgba(0, 188, 212, 0.2)",
    transition: "all 0.3s ease",
  },
  ctaSection: {
    textAlign: "center",
    padding: "60px 40px",
    background: "linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)",
    borderRadius: "25px",
    boxShadow: "0 20px 60px rgba(0, 188, 212, 0.3)",
  },
  ctaTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "15px",
  },
  ctaText: {
    fontSize: "1.1rem",
    color: "#ffffff",
    marginBottom: "30px",
    opacity: 0.95,
  },
  ctaButton: {
    display: "inline-block",
    padding: "16px 45px",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#00BCD4",
    background: "#ffffff",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textDecoration: "none",
  },
};

// Add hover effects and responsive styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  /* Image Zoom on Hover */
  .project-image-wrapper:hover .project-zoom-image {
    transform: scale(1.15);
  }
  
  /* Tech Tag Hover */
  .tech-tag:hover {
    background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%) !important;
    color: #ffffff !important;
    border-color: #00BCD4 !important;
  }
  
  /* CTA Button Hover */
  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3) !important;
  }
  
  @media (max-width: 992px) {
    [style*="projectsGrid"] {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 20px !important;
    }
  }
  
  @media (max-width: 768px) {
    [style*="projectsSection"] {
      padding: 60px 15px !important;
    }
    
    [style*="projectsGrid"] {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }
    
    [style*="mainTitle"] {
      font-size: 1.8rem !important;
    }
    
    [style*="subtitle"] {
      font-size: 0.95rem !important;
      padding: 0 10px !important;
    }
    
    [style*="badge"] {
      padding: 8px 16px !important;
    }
    
    [style*="badgeText"] {
      font-size: 0.8rem !important;
    }
    
    [style*="projectCard"] {
      border-radius: 15px !important;
    }
    
    [style*="projectImageWrapper"] {
      height: 180px !important;
    }
    
    [style*="projectContent"] {
      padding: 20px !important;
    }
    
    [style*="projectTitle"] {
      font-size: 1.2rem !important;
      margin-bottom: 8px !important;
    }
    
    [style*="projectDescription"] {
      font-size: 0.9rem !important;
      margin-bottom: 15px !important;
    }
    
    [style*="techStack"] {
      gap: 8px !important;
    }
    
    [style*="techTag"] {
      padding: 6px 12px !important;
      font-size: 0.75rem !important;
    }
    
    [style*="ctaSection"] {
      padding: 40px 20px !important;
      border-radius: 20px !important;
      margin: 0 5px !important;
    }
    
    [style*="ctaTitle"] {
      font-size: 1.4rem !important;
    }
    
    [style*="ctaText"] {
      font-size: 0.95rem !important;
      margin-bottom: 20px !important;
    }
    
    [style*="ctaButton"] {
      padding: 14px 35px !important;
      font-size: 0.9rem !important;
    }
    
    [style*="headerSection"] {
      margin-bottom: 40px !important;
    }
  }
  
  @media (max-width: 480px) {
    [style*="projectsSection"] {
      padding: 50px 10px !important;
    }
    
    [style*="mainTitle"] {
      font-size: 1.5rem !important;
    }
    
    [style*="projectImageWrapper"] {
      height: 160px !important;
    }
    
    [style*="projectContent"] {
      padding: 15px !important;
    }
    
    [style*="projectTitle"] {
      font-size: 1.1rem !important;
    }
    
    [style*="projectDescription"] {
      font-size: 0.85rem !important;
      line-height: 1.6 !important;
    }
    
    [style*="techTag"] {
      padding: 5px 10px !important;
      font-size: 0.7rem !important;
    }
    
    [style*="ctaSection"] {
      padding: 30px 15px !important;
    }
    
    [style*="ctaTitle"] {
      font-size: 1.2rem !important;
    }
    
    [style*="ctaText"] {
      font-size: 0.85rem !important;
    }
    
    [style*="ctaButton"] {
      padding: 12px 30px !important;
      font-size: 0.85rem !important;
    }
  }
`;

if (!document.getElementById("projects-styles")) {
  styleSheet.id = "projects-styles";
  document.head.appendChild(styleSheet);
}

export default Project;
