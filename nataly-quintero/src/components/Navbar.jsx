import { Link } from "react-router-dom";
import Icono from "./Icono";
import NavItem from "./NavItem";

const enlaces = [
  { ruta: "/", icono: "home", texto: "Inicio" },
  { ruta: "/catalogo", icono: "grid", texto: "Catálogo" },
  { ruta: "/contacto", icono: "mail", texto: "Contacto" }
];

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
            {enlaces.map((enlace) => (
              <NavItem
                key={enlace.ruta}
                ruta={enlace.ruta}
                icono={enlace.icono}
                texto={enlace.texto}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
