import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="hero">
          <div className="hero-content">
            <h1>MUYA</h1>
            <p>Agricultura Urbana</p>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
