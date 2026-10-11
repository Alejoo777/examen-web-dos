import Icono from "./Icono";

function obtenerClaseCategoria(categoria) {
  switch (categoria) {
    case "Arquitectura": return "badge-arquitectura";
    case "Diseño Industrial": return "badge-industrial";
    case "Diseño Gráfico": return "badge-grafico";
    case "Estética": return "badge-estetica";
    case "Tipografía": return "badge-tipografia";
    default: return "badge-industrial";
  }
}

function BookCard({
  titulo, autor, categoria, icono, anio,
  paginas, calificacion, editorial, isbn, resumen,
}) {
  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">
            <Icono nombre={icono} />
          </div>
          <span className="card-rating-badge">
            <Icono nombre="star" className="icon-sm" />
            <span>{calificacion.toFixed(1)}</span>
          </span>
        </div>

        <span className={`badge ${obtenerClaseCategoria(categoria)} badge-spaced`}>
          {categoria}
        </span>
        <h3 className="card-title">{titulo}</h3>
        <p className="card-author">Por {autor} ({anio})</p>
        <p className="card-summary">{resumen}</p>

        <div className="card-details-box">
          <span>Editorial: <strong>{editorial}</strong></span>
          <span>ISBN: <code>{isbn}</code></span>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          <Icono nombre="book-marked" className="icon-sm" />
          <span>{paginas} páginas</span>
        </span>
        <span className="card-meta card-meta-muted">
          <Icono nombre="calendar" className="icon-sm" />
          <span>Edición {anio}</span>
        </span>
      </div>
    </article>
  );
}

export default BookCard;