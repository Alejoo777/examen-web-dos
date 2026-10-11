import { Link, NavLink } from "react-router-dom";
import Icono from "./Icono.jsx";

// Barra de navegación. Recibe la marca y la lista de enlaces por props.
export default function Navbar({ marca, enlaces }) {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link to="/" className="brand">
          <div className="brand-badge">
            <Icono nombre="book-open" />
          </div>
          <span>{marca}</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {enlaces.map((enlace) => (
              // NavLink agrega solo la clase "active" a la ruta actual.
              <li key={enlace.ruta}>
                <NavLink to={enlace.ruta} end={enlace.ruta === "/"}>
                  <Icono nombre={enlace.icono} className="icon-sm" />
                  <span>{enlace.texto}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
