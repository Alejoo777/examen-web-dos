import { Link, NavLink } from "react-router-dom";
import Icono from "./Icono";

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link to="/" className="brand">
          <div className="brand-badge">
            <Icono nombre="book-open" />
          </div>
          <span>Librería Archivo</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                <Icono nombre="home" className="icon-sm" />
                <span>Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalogo">
                <Icono nombre="grid" className="icon-sm" />
                <span>Catálogo</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto">
                <Icono nombre="mail" className="icon-sm" />
                <span>Contacto</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;