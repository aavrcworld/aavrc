import React from "react";
import "./Project.css";

function Project() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "Complete HR solution with attendance tracking, salary management, and employee records.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      icon: "fas fa-users-cog",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with payment integration and inventory management.",
      technologies: ["React", "Node.js", "Stripe", "AWS S3"],
      icon: "fas fa-shopping-cart",
    },
    {
      title: "Digital Flipbook App",
      description:
        "Interactive flipbook application with realistic page-turning effects.",
      technologies: ["React", "CSS3", "JavaScript", "PDF.js"],
      icon: "fas fa-book-open",
    },
    {
      title: "Business Web Application",
      description:
        "Custom web application tailored for specific business requirements.",
      technologies: ["MERN Stack", "JWT", "Bootstrap", "API"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "Professional Website",
      description:
        "Modern responsive website with SEO optimization and CMS integration.",
      technologies: ["React", "Bootstrap", "SEO", "CMS"],
      icon: "fas fa-globe",
    },
    {
      title: "Cloud-Based Software",
      description:
        "Scalable cloud solution deployed on AWS with robust infrastructure.",
      technologies: ["AWS", "EC2", "S3", "MongoDB"],
      icon: "fas fa-cloud",
    },
  ];
  return (
    <>
      <section className="projects-section" id="projects">
        <div className="container">
          <h2 className="section-title">Our Projects</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="project-card">
                  <div className="project-image">
                    <i className={project.icon}></i>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
