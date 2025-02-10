import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>MUYA</h1>
        <p>Agricultura Urbana</p>
        <Link to="/" className="button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
