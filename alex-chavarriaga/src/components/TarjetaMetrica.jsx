import Icono from "./Icono.jsx";

// Tarjeta de una métrica del resumen (cantidad de libros, categorías, etc.).
export default function TarjetaMetrica({ etiqueta, valor, icono, fondo, color }) {
  return (
    <article className="stat-card">
      <div
        className="stat-icon-wrapper"
        style={{ backgroundColor: fondo, color: color }}
      >
        <Icono nombre={icono} />
      </div>
      <div className="stat-content">
        <span className="stat-number">{valor}</span>
        <span className="stat-label">{etiqueta}</span>
      </div>
    </article>
  );
}
