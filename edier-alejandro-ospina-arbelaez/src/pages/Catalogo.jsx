
import { useState } from 'react';
import datos from '../data/libros';
import LibroCard from '../components/LibroCard';

function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');

  const categorias = [...new Set(
    datos.map((libro) => libro.categoria)
  )].sort();

  const librosFiltrados = datos.filter((libro) => {
    const termino = busqueda.toLowerCase().trim();

    const coincideTexto =
      libro.titulo.toLowerCase().includes(termino) ||
      libro.autor.toLowerCase().includes(termino) ||
      libro.resumen.toLowerCase().includes(termino) ||
      libro.editorial.toLowerCase().includes(termino);

    const coincideCategoria =
      categoria === '' || libro.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('');
  };

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

        <div className="filter-toolbar">
          <div className="search-group">
            <input
              className="search-input"
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por título, autor o editorial..."
              aria-label="Buscar libros"
            />
          </div>

          <select
            className="select-category"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            aria-label="Filtrar por categoría"
          >
            <option value="">Todas las categorías</option>
            {categorias.map((nombreCategoria) => (
              <option key={nombreCategoria} value={nombreCategoria}>
                {nombreCategoria}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={limpiarFiltros}
          >
            Limpiar filtros
          </button>
        </div>

        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          {librosFiltrados.length} de {datos.length} registros
        </p>

        <div className="cards-grid">
          {librosFiltrados.length > 0 ? (
            librosFiltrados.map((libro) => (
              <LibroCard key={libro.id} libro={libro} />
            ))
          ) : (
            <div style={{ padding: '24px', background: 'white', borderRadius: '12px' }}>
              <p>No se encontraron libros con esos filtros.</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={limpiarFiltros}
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Catalogo;