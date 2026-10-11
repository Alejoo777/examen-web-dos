import Icono from "./Icono.jsx";

// Barra de búsqueda y filtro por categoría.
// Los valores y las funciones que los cambian llegan por props (el estado vive en la página).
export default function FiltrosCatalogo({
  busqueda,
  onBusqueda,
  categoria,
  onCategoria,
  categorias,
  textoConteo,
}) {
  return (
    <section className="filter-toolbar">
      <div className="search-group">
        <Icono nombre="search" className="search-icon-pos icon-sm" />
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por título, autor o concepto..."
          value={busqueda}
          onChange={(evento) => onBusqueda(evento.target.value)}
        />
      </div>

      <select
        className="select-category"
        value={categoria}
        onChange={(evento) => onCategoria(evento.target.value)}
      >
        <option value="">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <span className="badge badge-neutral">
        <Icono nombre="layers" className="icon-sm" />
        <span>{textoConteo}</span>
      </span>
    </section>
  );
}
