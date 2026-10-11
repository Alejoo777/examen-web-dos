import Icono from "./Icono.jsx";

// Título de sección con ícono. "children" permite agregar un botón a la derecha.
export default function EncabezadoSeccion({ icono, titulo, children }) {
  return (
    <div className="section-header">
      <h2 className="section-title">
        <Icono nombre={icono} />
        <span>{titulo}</span>
      </h2>
      {children}
    </div>
  );
}
