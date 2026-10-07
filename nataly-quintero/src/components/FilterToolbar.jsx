import Icono from "./Icono";

function FilterToolbar({ busqueda, onBusquedaChange, categoria, onCategoriaChange, categorias, cantidadVisible, cantidadTotal }) {
  return (
    <section className="filter-toolbar">
      <div className="search-group">
        <Icono nombre="search" className="search-icon-pos icon-sm" />
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por título, autor o concepto..."
          value={busqueda}
          onChange={onBusquedaChange}
        />
      </div>

      <select className="select-category" value={categoria} onChange={onCategoriaChange}>
        <option value="">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <span className="badge badge-neutral">
        <Icono nombre="layers" className="icon-sm" />
        <span>{cantidadVisible} de {cantidadTotal} registros</span>
      </span>
    </section>
  );
}

export default FilterToolbar;
