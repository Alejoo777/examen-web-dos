import Icono from "./Icono";

// children permite agregar un elemento extra a la derecha (ej. un botón)
function SectionHeader({ icono, titulo, children }) {
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

export default SectionHeader;
