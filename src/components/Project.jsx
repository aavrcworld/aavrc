import React from "react";
import projectImg1 from "../media/projects/emp.jpg";
import projectImg2 from "../media/projects/ecommerce.jpg";
import projectImg3 from "../media/projects/flip.jpg";
import projectImg4 from "../media/projects/app.jpg";
import projectImg5 from "../media/projects/website.jpg";
import projectImg6 from "../media/projects/cloud.jpg";

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
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .projects-section {
          padding: 100px 20px;
          background: #ffffff;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 60px;
        }

        .badge {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%);
          border: 1px solid rgba(0, 188, 212, 0.3);
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .badge-text {
          color: #0097A7;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: 1px;
          margin-bottom: 15px;
          margin-top: 0;
        }

        .divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #00BCD4, #0097A7);
          margin: 0 auto 20px;
          border-radius: 2px;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #666;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .project-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          cursor: pointer;
          border: 1px solid #f0f0f0;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .project-image-wrapper {
          height: 240px;
          overflow: hidden;
          position: relative;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.15);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.1) 100%);
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .project-content {
          padding: 30px;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          margin-top: 0;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: #00BCD4;
        }

        .project-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 20px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-tag {
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%);
          color: #00BCD4;
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(0, 188, 212, 0.2);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          color: #ffffff;
          border-color: #00BCD4;
          transform: translateY(-2px);
        }

        .cta-section {
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          border-radius: 25px;
          box-shadow: 0 20px 60px rgba(0, 188, 212, 0.3);
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
          padding: 16px 45px;
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
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .projects-section {
            padding: 60px 15px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 50px;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .subtitle {
            font-size: 0.95rem;
            padding: 0 10px;
          }

          .badge {
            padding: 8px 16px;
          }

          .badge-text {
            font-size: 0.8rem;
          }

          .project-card {
            border-radius: 15px;
          }

          .project-image-wrapper {
            height: 200px;
          }

          .project-content {
            padding: 20px;
          }

          .project-title {
            font-size: 1.2rem;
            margin-bottom: 8px;
          }

          .project-description {
            font-size: 0.9rem;
            margin-bottom: 15px;
          }

          .tech-stack {
            gap: 8px;
          }

          .tech-tag {
            padding: 6px 12px;
            font-size: 0.75rem;
          }

          .cta-section {
            padding: 40px 20px;
            border-radius: 20px;
          }

          .cta-title {
            font-size: 1.5rem;
          }

          .cta-text {
            font-size: 0.95rem;
            margin-bottom: 20px;
          }

          .cta-button {
            padding: 14px 35px;
            font-size: 0.9rem;
          }

          .header-section {
            margin-bottom: 40px;
          }
        }

        /* Small Mobile Responsive */
        @media (max-width: 480px) {
          .projects-section {
            padding: 50px 10px;
          }

          .main-title {
            font-size: 1.5rem;
          }

          .subtitle {
            font-size: 0.9rem;
          }

          .project-image-wrapper {
            height: 180px;
          }

          .project-content {
            padding: 15px;
          }

          .project-title {
            font-size: 1.1rem;
          }

          .project-description {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .tech-tag {
            padding: 5px 10px;
            font-size: 0.7rem;
          }

          .cta-section {
            padding: 30px 15px;
            border-radius: 15px;
          }

          .cta-title {
            font-size: 1.2rem;
          }

          .cta-text {
            font-size: 0.85rem;
          }

          .cta-button {
            padding: 12px 30px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <section className="projects-section" id="projects">
        <div className="projects-container">
          {/* Header */}
          <div className="header-section">
            <div className="badge">
              <span className="badge-text">Our Work</span>
            </div>
            <h2 className="main-title">OUR PROJECTS</h2>
            <div className="divider"></div>
            <p className="subtitle">
              Showcasing Excellence in Web Development & AI Solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {/* Project Image Section */}
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="image-overlay"></div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="cta-section">
            <h3 className="cta-title">Have a Project in Mind?</h3>
            <p className="cta-text">
              Let's bring your vision to life with our expertise
            </p>
            <a href="#footer" className="cta-button">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;