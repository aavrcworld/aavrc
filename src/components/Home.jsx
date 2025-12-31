import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Project from "./Project";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Home;
