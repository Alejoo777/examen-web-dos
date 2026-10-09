import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-bar">
          <NavLink to="/" className="brand">
            <div className="brand-badge">📚</div>
            <span>Librería Archivo</span>
          </NavLink>

          <nav>
            <ul className="nav-links">
              <li><NavLink to="/" end>Inicio</NavLink></li>
              <li><NavLink to="/catalogo">Catálogo</NavLink></li>
              <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <span>
            <strong>Librería Archivo</strong> · Catálogo bibliográfico de diseño
          </span>
          <span>Colección abierta para consulta</span>
        </div>
      </footer>
    </>
  );
}

export default Layout;
