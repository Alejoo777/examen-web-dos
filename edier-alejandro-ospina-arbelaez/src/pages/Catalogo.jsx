import datos from '../data/libros';

function Catalogo() {
  return (
    <div className="container">
      <section className="hero-banner">
        <h1 className="hero-title">Catálogo Bibliográfico</h1>
        <p className="hero-subtitle">
          Explora nuestra colección de arquitectura, diseño y teoría visual.
        </p>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">Todas las obras</h2>
        </div>

        <div className="cards-grid">
          {datos.map((libro) => (
            <article className="book-card" key={libro.id}>
              <div>
                <div className="card-top">
                  <div className="card-icon-container">{libro.icono}</div>
                  <span className="card-rating-badge">
                    ⭐ {libro.calificacion.toFixed(1)}
                  </span>
                </div>

                <span className="badge badge-industrial">
                  {libro.categoria}
                </span>

                <h3 className="card-title">{libro.titulo}</h3>
                <p className="card-author">
                  Por {libro.autor} ({libro.anio})
                </p>
                <p className="card-summary">{libro.resumen}</p>

                <div className="card-details-box">
                  <span>Editorial: <strong>{libro.editorial}</strong></span>
                  <span>ISBN: <code>{libro.isbn}</code></span>
                </div>
              </div>

              <div className="card-footer">
                <span className="card-meta">{libro.paginas} páginas</span>
                <span className="card-meta">Edición {libro.anio}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Catalogo;