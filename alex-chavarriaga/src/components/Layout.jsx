import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const enlaces = [
  { ruta: "/", texto: "Inicio", icono: "home" },
  { ruta: "/catalogo", texto: "Catálogo", icono: "grid" },
  { ruta: "/contacto", texto: "Contacto", icono: "mail" },
];

// Ruta principal: comparte Navbar y Footer; <Outlet /> muestra la página hija.
export default function Layout() {
  return (
    <>
      <Navbar marca="Librería Archivo" enlaces={enlaces} />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer
        marca="Librería Archivo"
        descripcion="Catálogo bibliográfico de diseño"
        lema="Colección abierta para consulta"
      />
    </>
  );
}
