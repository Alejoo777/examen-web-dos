import datos from '../data/libros';

function Inicio() {
  const totalLibros = datos.length;

  const categoriasUnicas = new Set(
    datos.map((libro) => libro.categoria)
  ).size;

  const promedioRating = (
    datos.reduce((total, libro) => total + libro.calificacion, 0) /
    totalLibros
  ).toFixed(1);

  const totalPaginas = datos.reduce(
    (total, libro) => total + libro.paginas,
    0
  );

  const estadisticas = [
    { label: 'Libros Indexados', valor: totalLibros, icono: '📚' },
    { label: 'Categorías Temáticas', valor: categoriasUnicas, icono: '🏷️' },
    { label: 'Calificación Promedio', valor: promedioRating, icono: '⭐' },
    {
      label: 'Páginas Totales',
      valor: totalPaginas.toLocaleString('es-CO'),
      icono: '📄',
    },
  ];

  const destacados = datos.filter((libro) => libro.destacado);

  return (
    <div className="container">
      <section className="hero-banner">
        <h1 className="hero-title">
          Biblioteca de Diseño &amp; Teoría Visual
        </h1>

        <p className="hero-subtitle">
          Colección y catálogo especializado en teoría visual, arquitectura,
          tipografía y diseño editorial.
        </p>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">Resumen del Repositorio</h2>
        </div>

        <div className="stats-grid">
          {estadisticas.map((estadistica) => (
            <article className="stat-card" key={estadistica.label}>
              <div className="stat-icon-wrapper">
                {estadistica.icono}
              </div>

              <div className="stat-content">
                <span className="stat-number">{estadistica.valor}</span>
                <span className="stat-label">{estadistica.label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '44px' }}>
        <div className="section-header">
          <h2 className="section-title">Obras Destacadas</h2>
        </div>

        <div className="cards-grid">
          {destacados.map((libro) => (
            <article className="book-card" key={libro.id}>
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
          ))}
        </div>
      </section>
    </div>
  );
}

export default Inicio;