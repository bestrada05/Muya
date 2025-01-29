import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Features } from "./Features";
import { About } from "./About";
import { Team } from "./Team";
import { Projects } from "./Projects";
import { ProjectDetail } from "./ProjectDetail";
import { Services } from "./Services";
import { Products } from "./Products";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { ProductDetail } from "./ProductDetail";

function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>MUYA</h1>
          <p>Agricultura Urbana</p>
        </div>
      </div>
      <Features />
      <About />
      <Projects />
      <Services />
      <Products />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/equipo" element={<Team />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
