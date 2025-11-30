import "./Home.css";

function Home() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center hero-content">
          {/* Left Section */}
          <div className="col-lg-6">
            <h1 className="hero-title">AAVRC</h1>
            <div className="hero-subtitle">
              Web Development, AI Solutions &amp; Software Services
            </div>
            <p className="hero-description">
              We develop comprehensive web applications, websites, employee
              management systems, digital flipbooks, e-commerce platforms,
              AI-powered chatbots, machine learning models, intelligent
              automation systems, and many more innovative solutions to grow
              your business with cutting-edge technology.
            </p>

            <div className="cta-buttons">
              <a href="#projects" className="btn btn-custom btn-primary-custom">
                <i className="fas fa-rocket"></i> View Projects
              </a>
              <a
                href="#contact"
                className="btn btn-custom btn-secondary-custom"
              >
                <i className="fas fa-envelope"></i> Get Quote
              </a>
            </div>
          </div>

          {/* Right Section - Code Window */}
          <div className="col-lg-6">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dot dot-red"></div>
                <div className="code-dot dot-yellow"></div>
                <div className="code-dot dot-green"></div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="comment">// MERN Stack Development</span>
                </div>
                <div className="code-line">
                  <span className="keyword">const</span> app ={" "}
                  <span className="keyword">express</span>();
                </div>
                <div className="code-line">
                  <span className="keyword">const</span> port ={" "}
                  <span className="string">process.env.PORT</span>;
                </div>

                <div className="code-line"></div>

                <div className="code-line">
                  <span className="comment">// AI & Machine Learning</span>
                </div>
                <div className="code-line">
                  <span className="keyword">import</span> tensorflow{" "}
                  <span className="keyword">as</span> tf;
                </div>
                <div className="code-line">
                  <span className="keyword">const</span> model = tf.
                  <span className="keyword">loadModel</span>(
                  <span className="string">'./ai-model'</span>);
                </div>

                <div className="code-line"></div>

                <div className="code-line">
                  <span className="comment">// MongoDB Connection</span>
                </div>
                <div className="code-line">
                  mongoose.<span className="keyword">connect</span>(
                  <span className="string">'mongodb://...'</span>);
                </div>

                <div className="code-line"></div>

                <div className="code-line">
                  <span className="comment">// OpenAI Integration</span>
                </div>
                <div className="code-line">
                  <span className="keyword">const</span> openai ={" "}
                  <span className="keyword">new</span> OpenAI();
                </div>

                <div className="code-line"></div>

                <div className="code-line">
                  <span className="comment">// AWS S3 + AI Services</span>
                </div>
                <div className="code-line">
                  <span className="keyword">const</span> s3 ={" "}
                  <span className="keyword">new</span> AWS.S3();
                </div>
                <div className="code-line">
                  <span className="keyword">const</span> rekognition ={" "}
                  <span className="keyword">new</span> AWS.Rekognition();
                </div>

                <div className="code-line"></div>

                <div className="code-line">
                  app.<span className="keyword">listen</span>(port, () =&gt;{" "}
                  {"{"}
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;console.<span className="keyword">log</span>(
                  <span className="string">'AI-Powered Server running!'</span>);
                </div>
                <div className="code-line">{"});"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
