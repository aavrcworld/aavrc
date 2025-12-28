import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/SErvices";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "50px" }}>
        <Home />
        <About />
        <Services />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
