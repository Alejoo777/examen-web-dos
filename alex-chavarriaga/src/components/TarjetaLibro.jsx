import Icono from "./Icono.jsx";
import EtiquetaCategoria from "./EtiquetaCategoria.jsx";

// Tarjeta de un libro. Recibe el objeto completo por la prop "libro".
export default function TarjetaLibro({ libro }) {
  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">
            <Icono nombre={libro.icono} />
          </div>
          <span className="card-rating-badge">
            <Icono nombre="star" className="icon-sm" />
            <span>{libro.calificacion.toFixed(1)}</span>
          </span>
        </div>

        <EtiquetaCategoria categoria={libro.categoria} />
        <h3 className="card-title">{libro.titulo}</h3>
        <p className="card-author">
          Por {libro.autor} ({libro.anio})
        </p>
        <p className="card-summary">{libro.resumen}</p>

        <div className="card-details-box">
          <span>
            Editorial: <strong>{libro.editorial}</strong>
          </span>
          <span>
            ISBN: <code>{libro.isbn}</code>
          </span>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          <Icono nombre="book-marked" className="icon-sm" />
          <span>{libro.paginas} páginas</span>
        </span>
        <span className="card-meta" style={{ color: "var(--text-muted)" }}>
          <Icono nombre="calendar" className="icon-sm" />
          <span>Edición {libro.anio}</span>
        </span>
      </div>
    </article>
  );
}
