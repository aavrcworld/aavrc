import { useState, useEffect } from "react";
import "./Footer.css";
import {
  FaWhatsapp,
  FaArrowUp,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import JDLogo from "../logo/JDLogo";

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
    <footer className="site-footer">
      {/* Scroll To Top */}
      {showScroll && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919412004537"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-floating"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Footer Main */}
      <div className="footer-content container">
        <div className="footer-row">
          {/* Left Section */}
          <div className="footer-section">
            <h4>AAVRC</h4>
            <p className="company-description">
              Leading provider of AI-powered web development solutions,
              intelligent automation systems, and cutting-edge software services
              for businesses worldwide.
            </p>

            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://www.youtube.com/@Aavrcalex"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube style={{ color: "#FF0000" }} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61581382928986"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook style={{ color: "#1877F2" }} />
              </a>

              <a
                href="https://www.instagram.com/aavrcaavrc/?igsh=MWdtN3ZvZHlrZHRiNA%3D%3D#"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram style={{ color: "#E4405F" }} />
              </a>

              <a
                href="https://www.justdial.com/search?query=9412004537"
                target="_blank"
                rel="noreferrer"
                className="jd-logo-container"
              >
                <JDLogo />
              </a>

              <a href="mailto:aavrcworld@gmail.com" target="_blank" rel="noreferrer">
                <FaEnvelope style={{ color: "#D44638" }} />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="services-list">
              <li>AI-Powered Web Development</li>
              <li>Machine Learning Solutions</li>
              <li>Intelligent Chatbots</li>
              <li>Computer Vision Systems</li>
              <li>Employee Management Systems</li>
              <li>E-commerce Platforms</li>
              <li>Digital Flipbook Applications</li>
              <li>Process Automation</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="footer-section contact-section">
            <h4>Contact Information</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <a href="mailto:support@aavrc.com" className="contact-link">
                  <FaEnvelope className="contact-icon" />
                  <span className="contact-text">support@aavrc.com</span>
                </a>
              </li>
            </ul>

            <div className="support-info">
              <h5>24/7 IT Support</h5>
              <p className="support-text">
                Our technical team is available around the clock for assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; 2025 AAVRC. All rights reserved. AI Web Development & Machine
            Learning Solutions.
          </p>
          <div className="footer-links">
            <button className="link-btn" onClick={() => setShowPrivacy(true)}>
              Privacy Policy
            </button>
            <span>|</span>
            <button className="link-btn" onClick={() => setShowTerms(true)}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Popup: Privacy Policy */}
      {showPrivacy && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowPrivacy(false)}>
              ✖
            </button>
            <h2>Privacy Policy</h2>
            <p>
              At AAVRC, we value your privacy. We collect minimal data to
              provide and improve our AI-powered web services. Your personal
              information is never sold or shared with third parties except as
              required for essential operations or legal compliance.
            </p>
            <p>
              We use encrypted communication, secure databases, and role-based
              access to ensure your data remains protected at all times.
            </p>
          </div>
        </div>
      )}

      {/* Popup: Terms of Service */}
      {showTerms && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowTerms(false)}>
              ✖
            </button>
            <h2>Terms of Service</h2>
            <p>
              By using AAVRC’s services, you agree to our standard usage
              policies, including proper use of AI tools, respect for copyright,
              and adherence to applicable laws.
            </p>
            <p>
              We reserve the right to update, modify, or terminate services with
              prior notice. Continued use of our services constitutes acceptance
              of any changes made to these terms.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
