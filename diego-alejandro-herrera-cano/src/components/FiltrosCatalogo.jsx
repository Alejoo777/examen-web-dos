import Icono from './Icono'

function FiltrosCatalogo({ busqueda, onCambiarBusqueda, categoria, onCambiarCategoria, categorias, cantidad, total }) {
  return (
    <section className="filter-toolbar">
      <div className="search-group">
        <Icono nombre="search" className="search-icon-pos icon-sm" />
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por título, autor o concepto..."
          value={busqueda}
          onChange={(e) => onCambiarBusqueda(e.target.value)}
        />
      </div>

      <select
        className="select-category"
        value={categoria}
        onChange={(e) => onCambiarCategoria(e.target.value)}
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
        <span>
          {cantidad} de {total} registros
        </span>
      </span>
    </section>
  )
}

export default FiltrosCatalogo
