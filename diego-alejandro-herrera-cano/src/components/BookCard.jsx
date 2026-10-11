import Icono from './Icono'

const clasesCategoria = {
  Arquitectura: 'badge-arquitectura',
  'Diseño Industrial': 'badge-industrial',
  'Diseño Gráfico': 'badge-grafico',
  Estética: 'badge-estetica',
  Tipografía: 'badge-tipografia',
}

function BookCard({ titulo, autor, categoria, icono, anio, paginas, calificacion, editorial, isbn, resumen }) {
  const claseBadge = clasesCategoria[categoria] || 'badge-industrial'

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

        <span className={`badge ${claseBadge}`} style={{ marginBottom: '12px' }}>
          {categoria}
        </span>
        <h3 className="card-title">{titulo}</h3>
        <p className="card-author">
          Por {autor} ({anio})
        </p>
        <p className="card-summary">{resumen}</p>

        <div className="card-details-box">
          <span>
            Editorial: <strong>{editorial}</strong>
          </span>
          <span>
            ISBN: <code>{isbn}</code>
          </span>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          <Icono nombre="book-marked" className="icon-sm" />
          <span>{paginas} páginas</span>
        </span>
        <span className="card-meta" style={{ color: 'var(--text-muted)' }}>
          <Icono nombre="calendar" className="icon-sm" />
          <span>Edición {anio}</span>
        </span>
      </div>
    </article>
  )
}

export default BookCard
