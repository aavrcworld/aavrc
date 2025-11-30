import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-info-box">
          <h3>Get In Touch</h3>
          <p>
            Ready to start your next project? Contact us today for a free
            consultation and quote.
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <div>
              <h5>Rajender Chauhan</h5>
              <p>Company Owner & Lead Developer</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h5>Email</h5>
              <p>aavrcworld@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
