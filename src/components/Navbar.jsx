import { NavLink, Link } from 'react-router-dom'
import { BookOpen, Home, Grid, Mail } from 'lucide-react'

export default function Navbar() {
    return (
        <header className="site-header">
            <div className="container nav-bar">
                <Link to="/" className="brand">
                    <div className="brand-badge">
                        <BookOpen size={20} />
                    </div>
                    <span>Librería Archivo</span>
                </Link>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/" end>
                                <Home size={14} />
                                <span>Inicio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalogo">
                                <Grid size={14} />
                                <span>Catálogo</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto">
                                <Mail size={14} />
                                <span>Contacto</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}