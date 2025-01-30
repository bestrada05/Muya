import { Link, useLocation } from "react-router-dom";

export function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`navbar ${isHome ? "navbar-transparent" : "navbar-solid"}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/fotos/LOGO.PNG" alt="Logo" className="logo-img" />
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/productos">Productos</Link>
        </div>

        <div className="nav-actions">
          <Link to="/cart" className="cart-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>
          <Link to="/login" className="login-link">
            Ingresa
          </Link>
        </div>
      </div>
    </nav>
  );
}
