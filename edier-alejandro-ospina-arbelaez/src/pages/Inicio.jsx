
import datos from '../data/libros';
import LibroCard from '../components/LibroCard';

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
            <LibroCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Inicio;