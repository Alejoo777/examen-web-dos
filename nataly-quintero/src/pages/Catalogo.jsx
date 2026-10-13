import { useState } from "react";
import { datos } from "../data/libros";
import HeroBanner from "../components/HeroBanner";
import FilterToolbar from "../components/FilterToolbar";
import BookGrid from "../components/BookGrid";
import EmptyState from "../components/EmptyState";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  // Lista de categorías únicas y ordenadas para el select
  const categorias = Array.from(new Set(datos.map((d) => d.categoria))).sort();

  // Filtrado en tiempo real: se recalcula en cada render
  const termino = busqueda.toLowerCase().trim();
  const resultados = datos.filter((item) => {
    const coincideTexto =
      item.titulo.toLowerCase().includes(termino) ||
      item.autor.toLowerCase().includes(termino) ||
      item.resumen.toLowerCase().includes(termino) ||
      item.editorial.toLowerCase().includes(termino);

    const coincideCategoria = categoria === "" || item.categoria === categoria;

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

      <FilterToolbar
        busqueda={busqueda}
        onBusquedaChange={(e) => setBusqueda(e.target.value)}
        categoria={categoria}
        onCategoriaChange={(e) => setCategoria(e.target.value)}
        categorias={categorias}
        cantidadVisible={resultados.length}
        cantidadTotal={datos.length}
      />

      <section>
        {resultados.length > 0 ? (
          <BookGrid libros={resultados} />
        ) : (
          <EmptyState
            mensaje="No se encontraron registros con los filtros actuales."
            textoBoton="Limpiar Filtros"
            onLimpiar={limpiarFiltros}
          />
        )}
      </section>
    </>
  );
}

export default Catalogo;
