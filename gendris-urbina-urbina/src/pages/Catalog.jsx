import { useState } from "react";
import { booksData as libros } from "../data/booksData";
import HeroBanner from "../components/HeroBanner";
import BookCard from "../components/BookCard";
import Icono from "../components/Icono";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = Array.from(new Set(libros.map((l) => l.categoria))).sort();

  const termino = busqueda.toLowerCase().trim();

  const resultados = libros.filter((libro) => {
    const coincideTexto =
      libro.titulo.toLowerCase().includes(termino) ||
      libro.autor.toLowerCase().includes(termino) ||
      libro.resumen.toLowerCase().includes(termino) ||
      libro.editorial.toLowerCase().includes(termino);

    const coincideCategoria = categoria === "" || libro.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("");
  };

  return (
    <>
      <HeroBanner
        compacto
        titulo="Colección de Textos & Documentos"
        subtitulo="Explora el catálogo completo de publicaciones, ensayos y tratados de diseño."
      />

      <section className="filter-toolbar">
        <div className="search-group">
          <Icono nombre="search" className="search-icon-pos icon-sm" />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por título, autor o concepto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <select
          className="select-category"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <span className="badge badge-neutral">
          <Icono nombre="layers" className="icon-sm" />
          <span>{resultados.length} de {libros.length} registros</span>
        </span>
      </section>

      <section>
        <div className="cards-grid">
          {resultados.length === 0 ? (
            <div className="empty-state">
              <p>No se encontraron registros con los filtros actuales.</p>
              <button type="button" className="btn btn-secondary" onClick={limpiarFiltros}>
                Limpiar Filtros
              </button>
            </div>
          ) : (
            resultados.map((libro) => (
              <BookCard
                key={libro.id}
                titulo={libro.titulo}
                autor={libro.autor}
                categoria={libro.categoria}
                icono={libro.icono}
                anio={libro.anio}
                paginas={libro.paginas}
                calificacion={libro.calificacion}
                editorial={libro.editorial}
                isbn={libro.isbn}
                resumen={libro.resumen}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Catalogo;