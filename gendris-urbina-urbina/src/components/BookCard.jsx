import Icono from "./Icono";

export default function BookCard({
  titulo,
  autor,
  categoria,
  icono,
  anio,
  paginas,
  calificacion,
  editorial,
  isbn,
  resumen,
}) {
  const categoriaClass = categoria?.toLowerCase().replace(/\s+/g, "-") || "neutral";

  return (
    <article className="book-card">
      <div className="card-top">
        <div className="card-icon-container">
          <Icono nombre={icono || "book-open"} className="icon-sm" />
        </div>
        <span className={`badge badge-${categoriaClass}`}>
          {categoria}
        </span>
      </div>

      <div>
        <h3 className="card-title">{titulo}</h3>
        <p className="card-author">{autor}</p>
        <p className="card-summary">{resumen}</p>
      </div>

      <div className="card-details-box">
        <span>{anio}</span>
        <span>{paginas} pp</span>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          <Icono nombre="star" className="icon-sm" />
          {calificacion}
        </span>
        <span className="card-meta-muted">{editorial}</span>
      </div>

      <div className="card-footer" style={{ marginTop: '12px', borderTop: 'none', paddingTop: 0 }}>
        <span className="card-meta-muted">ISBN</span>
        <span className="card-meta-muted">{isbn}</span>
      </div>
    </article>
  );
}