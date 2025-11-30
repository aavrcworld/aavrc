import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">About AAVRC</h2>
          <p className="section-subtitle">Innovative Web Development & AI Solutions</p>
        </div>

        {/* Profile and Company Info */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="profile-card text-center">
              <div className="profile-img">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Rajender Chauhan</h3>
              <p className="designation">Company Owner & Lead Developer</p>
            </div>
          </div>

          <div className="col-lg-8 col-md-6">
            <div className="company-info">
              <h3 className="mb-3">Professional Expertise</h3>
              <p className="mb-4">
                AAVRC specializes in comprehensive web development solutions
                including custom web applications, professional websites,
                employee management systems with attendance and salary handling,
                digital flipbook applications, e-commerce platforms, AI-powered 
                chatbots, machine learning models, computer vision systems, 
                natural language processing solutions, predictive analytics, 
                and intelligent automation systems. Our owner, Rajender Chauhan, 
                leads a team dedicated to delivering innovative digital solutions 
                powered by cutting-edge AI technology for businesses of all sizes.
              </p>

              <h4 className="mb-3">What Sets Us Apart:</h4>
              <div className="row">
                <div className="col-md-6">
                  <ul className="highlight-list">
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Complete web application development from concept to deployment</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Advanced employee management systems with attendance tracking</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>AI-powered chatbots and virtual assistants</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="highlight-list">
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Interactive flipbook applications with realistic page-turning effects</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Machine learning models for business intelligence</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Computer vision and image recognition systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-section">
          <div className="text-center mb-4">
            <h3 className="skills-title">Technical Skills & Expertise</h3>
          </div>
          
          <div className="skills-grid">
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="skill-category">
                  <div className="skill-header">
                    <i className="fas fa-laptop-code"></i>
                    <h4>Frontend Development</h4>
                  </div>
                  <ul className="skill-list">
                    <li>
                      <i className="fab fa-react"></i>
                      <span>React.js & Redux</span>
                    </li>
                    <li>
                      <i className="fab fa-html5"></i>
                      <span>HTML5 & CSS3</span>
                    </li>
                    <li>
                      <i className="fab fa-js-square"></i>
                      <span>JavaScript (ES6+)</span>
                    </li>
                    <li>
                      <i className="fab fa-bootstrap"></i>
                      <span>Bootstrap 5</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="skill-category">
                  <div className="skill-header">
                    <i className="fas fa-server"></i>
                    <h4>Backend Development</h4>
                  </div>
                  <ul className="skill-list">
                    <li>
                      <i className="fab fa-node-js"></i>
                      <span>Node.js & Express.js</span>
                    </li>
                    <li>
                      <i className="fas fa-database"></i>
                      <span>MongoDB & Mongoose</span>
                    </li>
                    <li>
                      <i className="fas fa-api"></i>
                      <span>RESTful APIs</span>
                    </li>
                    <li>
                      <i className="fas fa-qrcode"></i>
                      <span>QR Code Generation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="skill-category">
                  <div className="skill-header">
                    <i className="fas fa-brain"></i>
                    <h4>AI & Machine Learning</h4>
                  </div>
                  <ul className="skill-list">
                    <li>
                      <i className="fas fa-robot"></i>
                      <span>OpenAI GPT Integration</span>
                    </li>
                    <li>
                      <i className="fas fa-comments"></i>
                      <span>AI Chatbots & Virtual Assistants</span>
                    </li>
                    <li>
                      <i className="fas fa-eye"></i>
                      <span>Computer Vision & Image Recognition</span>
                    </li>
                    <li>
                      <i className="fas fa-language"></i>
                      <span>Natural Language Processing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="skill-category">
                  <div className="skill-header">
                    <i className="fas fa-cloud"></i>
                    <h4>Cloud & AI Services</h4>
                  </div>
                  <ul className="skill-list">
                    <li>
                      <i className="fab fa-aws"></i>
                      <span>AWS AI/ML Services</span>
                    </li>
                    <li>
                      <i className="fas fa-brain"></i>
                      <span>TensorFlow & PyTorch</span>
                    </li>
                    <li>
                      <i className="fab fa-git-alt"></i>
                      <span>Git & GitHub</span>
                    </li>
                    <li>
                      <i className="fas fa-chart-line"></i>
                      <span>Predictive Analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Services Section */}
        <div className="ai-services-section mt-5">
          <div className="text-center mb-4">
            <h3 className="section-title">AI-Powered Solutions We Offer</h3>
            <p className="section-subtitle">Transform your business with cutting-edge artificial intelligence</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="ai-service-card">
                <div className="service-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h4>Intelligent Chatbots</h4>
                <p>Custom AI chatbots for customer support, lead generation, and automated assistance using OpenAI GPT and natural language processing.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="ai-service-card">
                <div className="service-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h4>Computer Vision</h4>
                <p>Image recognition, object detection, facial recognition, and automated visual inspection systems for various industries.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="ai-service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Predictive Analytics</h4>
                <p>Machine learning models for sales forecasting, demand prediction, risk assessment, and business intelligence insights.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="ai-service-card">
                <div className="service-icon">
                  <i className="fas fa-language"></i>
                </div>
                <h4>NLP Solutions</h4>
                <p>Text analysis, sentiment analysis, document processing, language translation, and content generation systems.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="ai-service-card">
                <div className="service-icon">
                  <i className="fas fa-cog"></i>
                </div>
                <h4>Process Automation</h4>
                <p>Intelligent workflow automation, document processing, data extraction, and repetitive task optimization using AI.</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="ai-service-card">
                <div className="service-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h4>Custom AI Models</h4>
                <p>Tailored machine learning models for specific business needs, trained on your data for optimal performance and accuracy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section mt-5">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="stat-item">
                <i className="fas fa-project-diagram"></i>
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="stat-item">
                <i className="fas fa-users"></i>
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="stat-item">
                <i className="fas fa-code"></i>
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="stat-item">
                <i className="fas fa-clock"></i>
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;