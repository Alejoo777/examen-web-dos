import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav-bar" aria-label="Navegación principal">
          <NavLink to="/" className="brand" end>
            <span className="brand-badge">
              <svg viewBox="0 0 24 24" className="lucide" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              </svg>
            </span>
            <span>Librería Archivo</span>
          </NavLink>

          <ul className="nav-links">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink></li>
            <li><NavLink to="/catalogo" className={({ isActive }) => isActive ? 'active' : ''}>Catálogo</NavLink></li>
            <li><NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

