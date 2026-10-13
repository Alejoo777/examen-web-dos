import { NavLink } from "react-router-dom";
import Icono from "./Icono";

// NavLink agrega automáticamente la clase "active" cuando la ruta coincide
function NavItem({ ruta, icono, texto }) {
  return (
    <li>
      <NavLink to={ruta} end>
        <Icono nombre={icono} className="icon-sm" />
        <span>{texto}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
