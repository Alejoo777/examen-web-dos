import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Ruta principal: comparte Navbar y Footer y proyecta las páginas con <Outlet />
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
