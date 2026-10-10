
function LibroCard({ libro }) {
  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">
            {libro.icono}
          </div>

          <span className="card-rating-badge">
            ⭐ {libro.calificacion.toFixed(1)}
          </span>
        </div>

        <span
          className="badge badge-industrial"
          style={{ marginBottom: '12px' }}
        >
          {libro.categoria}
        </span>

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
        <span className="card-meta">{libro.paginas} páginas</span>
        <span className="card-meta">Edición {libro.anio}</span>
      </div>
    </article>
  );
}

export default LibroCard;