import React, { useRef, useEffect, useState } from "react";
import herovideo from "../media/hero.mp4";
import hero from "../media/other/hero.jpg";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => { });
  }, []);

  const [typedText, setTypedText] = useState('');
  const fullText = 'Web Development, AI Solutions & Software Services';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

        .video-hero {
          height: 100vh;
          width: 100%;
          max-width: 100vw;
          position: relative;
          overflow: hidden;
        }

        .video-hero video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }

        .hero-section {
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          padding: 100px 20px 60px;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-left {
          animation: slideInLeft 1s ease;
          position: relative;
        }

        .image-wrapper {
          position: relative;
          padding: 30px;
          width: 100%;
          max-width: 100%;
        }

        .main-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          border: 5px solid #fff;
          cursor: pointer;
          width: 100%;
          max-width: 100%;
        }

        .main-image {
          width: 100%;
          max-width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .image-zoom-container:hover .zoom-image {
          transform: scale(1.1);
        }

        .floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(0, 188, 212, 0.2);
          animation: float 3s ease-in-out infinite;
          z-index: 3;
        }

        .floating-card-1 {
          top: 50px;
          right: 0;
        }

        .floating-card-2 {
          top: 45%;
          left: 0;
          animation-delay: 1s;
        }

        .floating-card-3 {
          bottom: 60px;
          right: 20px;
          animation-delay: 2s;
        }

        .floating-icon {
          font-size: 1.3rem;
        }

        .floating-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1a1a1a;
          white-space: nowrap;
        }

        .hero-right {
          animation: slideInRight 1s ease;
          text-align: left;
        }

        .badge {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.05) 100%);
          border: 1px solid rgba(0, 188, 212, 0.3);
          border-radius: 50px;
          margin-bottom: 25px;
        }

        .badge-text {
          color: #0097A7;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 15px;
          letter-spacing: 3px;
          line-height: 1.1;
          margin-top: 0;
        }

        .cursor {
          color: #00BCD4;
          animation: blink 1s infinite;
          font-weight: 300;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #00BCD4;
          margin-bottom: 25px;
          font-weight: 500;
          min-height: 35px;
          border-left: 3px solid #00BCD4;
          padding-left: 15px;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          margin-bottom: 35px;
          max-width: 500px;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .btn-primary,
        .btn-secondary {
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          color: #ffffff;
          border: none;
          box-shadow: 0 8px 25px rgba(0, 188, 212, 0.35);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 188, 212, 0.45);
        }

        .btn-secondary {
          background: transparent;
          color: #1a1a1a;
          border: 2px solid #1a1a1a;
        }

        .btn-secondary:hover {
          background: #1a1a1a;
          color: #ffffff;
          transform: translateY(-3px);
        }

        .stats-container {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 25px 30px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          border: 1px solid rgba(0, 188, 212, 0.2);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          max-width: 100%;
          overflow: hidden;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: #00BCD4;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #888;
          margin-top: 5px;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(0, 188, 212, 0.3);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        /* Tablet */
        @media (max-width: 992px) {
          .hero-section {
            padding: 100px 15px 50px;
          }
          
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .hero-left {
            order: 2;
          }
          
          .hero-right {
            order: 1;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-title {
            font-size: 3rem;
            text-align: center;
          }
          
          .hero-subtitle {
            text-align: center;
            border-left: none;
            padding-left: 0;
            border-bottom: 3px solid #00BCD4;
            padding-bottom: 10px;
            display: inline-block;
          }
          
          .hero-description {
            max-width: 100%;
            text-align: center;
          }
          
          .cta-buttons {
            justify-content: center;
          }
          
          .main-image {
            height: 350px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .video-hero {
            height: 60vh;
          }

          .hero-section {
            padding: 90px 10px 40px;
            min-height: auto;
          }

          .hero-container {
            padding: 0 5px;
          }
          
          .hero-content {
            gap: 30px;
          }
          
          .image-wrapper {
            padding: 10px 5px;
          }
          
          .main-image {
            height: 280px;
          }
          
          .main-image-container {
            border-radius: 15px;
            border-width: 3px;
          }
          
          .badge {
            padding: 8px 16px;
          }
          
          .badge-text {
            font-size: 0.8rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
            margin-bottom: 10px;
            word-wrap: break-word;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            min-height: auto;
            margin-bottom: 20px;
            word-wrap: break-word;
          }
          
          .hero-description {
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 25px;
            padding: 0 5px;
            max-width: 100%;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 30px;
            width: 100%;
            padding: 0 10px;
          }
          
          .btn-primary,
          .btn-secondary {
            justify-content: center;
            padding: 14px 28px;
            font-size: 0.9rem;
            width: 100%;
            max-width: 100%;
          }
          
          .stats-container {
            padding: 20px 10px;
            gap: 15px;
            border-radius: 12px;
            width: 100%;
            max-width: 100%;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .stat-label {
            font-size: 0.75rem;
          }
          
          .stat-divider {
            height: 30px;
          }
          
          .floating-card {
            padding: 8px 12px;
          }
          
          .floating-icon {
            font-size: 1rem;
          }
          
          .floating-text {
            font-size: 0.7rem;
          }
          
          .floating-card-1 {
            top: 20px;
            right: 5px;
          }
          
          .floating-card-2 {
            left: 5px;
          }
          
          .floating-card-3 {
            bottom: 20px;
            right: 5px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .video-hero {
            height: 50vh;
          }

          .hero-section {
            padding: 80px 8px 30px;
          }

          .hero-container {
            padding: 0 3px;
          }
          
          .hero-content {
            gap: 25px;
          }
          
          .image-wrapper {
            padding: 5px 3px;
          }
          
          .main-image {
            height: 220px;
          }
          
          .hero-title {
            font-size: 2rem;
            letter-spacing: 1px;
          }
          
          .hero-subtitle {
            font-size: 0.85rem;
          }
          
          .hero-description {
            font-size: 0.85rem;
            padding: 0 3px;
          }
          
          .cta-buttons {
            padding: 0 5px;
          }
          
          .btn-primary,
          .btn-secondary {
            padding: 12px 24px;
            font-size: 0.85rem;
          }
          
          .stats-container {
            padding: 15px 8px;
            gap: 10px;
          }
          
          .stat-number {
            font-size: 1.3rem;
          }
          
          .stat-label {
            font-size: 0.7rem;
          }
          
          .stat-divider {
            height: 25px;
          }
          
          .floating-card {
            padding: 5px 8px;
          }
          
          .floating-icon {
            font-size: 0.85rem;
          }
          
          .floating-text {
            font-size: 0.6rem;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 375px) {
          .video-hero {
            height: 45vh;
          }

          .hero-section {
            padding: 70px 5px 25px;
          }

          .hero-container {
            padding: 0 2px;
          }

          .hero-title {
            font-size: 1.8rem;
          }

          .hero-subtitle {
            font-size: 0.8rem;
          }

          .hero-description {
            font-size: 0.8rem;
          }

          .main-image {
            height: 200px;
          }

          .btn-primary,
          .btn-secondary {
            padding: 10px 20px;
            font-size: 0.8rem;
          }

          .stats-container {
            padding: 12px 5px;
            gap: 8px;
          }

          .stat-number {
            font-size: 1.1rem;
          }

          .stat-label {
            font-size: 0.65rem;
          }
        }
      `}</style>

      <section
        id="home"
        className="video-hero"
      >
        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          poster={hero}
        >
          <source src={herovideo} type="video/mp4" />
        </video>
      </section>

      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="image-wrapper">
                <div className="main-image-container image-zoom-container">
                  <img
                    src={hero}
                    alt="AAVRC - Web Development & AI Solutions"
                    className="main-image zoom-image"
                  />
                  <div className="image-overlay"></div>
                </div>

                <div className="floating-card floating-card-1">
                  <span className="floating-icon">⚡</span>
                  <span className="floating-text">Fast Delivery</span>
                </div>
                <div className="floating-card floating-card-2">
                  <span className="floating-icon">🔒</span>
                  <span className="floating-text">Secure Code</span>
                </div>
                <div className="floating-card floating-card-3">
                  <span className="floating-icon">🎯</span>
                  <span className="floating-text">100% Quality</span>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="badge">
                <span className="badge-text">🚀 Innovation & Technology</span>
              </div>

              <h1 className="hero-title">
                AAVRC<span className="cursor">|</span>
              </h1>
              <div className="hero-subtitle">
                {typedText}
              </div>
              <p className="hero-description">
                We develop comprehensive web applications, websites, employee
                management systems, digital flipbooks, e-commerce platforms,
                AI-powered chatbots, machine learning models, intelligent
                automation systems, and many more innovative solutions to grow
                your business with cutting-edge technology.
              </p>

              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => handleNavClick('projects')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                  View Projects
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => handleNavClick('footer')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Get Quote
                </button>
              </div>

              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Exp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;