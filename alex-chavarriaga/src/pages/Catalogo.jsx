import { useState } from "react";
import { datos } from "../data/datos.js";
import HeroBanner from "../components/HeroBanner.jsx";
import FiltrosCatalogo from "../components/FiltrosCatalogo.jsx";
import GridLibros from "../components/GridLibros.jsx";

export default function Catalogo() {
  // Estado de los filtros: un useState por cada filtro.
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  // Categorías únicas y ordenadas para las opciones del select.
  const categorias = Array.from(new Set(datos.map((d) => d.categoria))).sort();

  // Cada vez que cambia un estado, React vuelve a ejecutar este filtrado.
  const termino = busqueda.toLowerCase().trim();
  const resultados = datos.filter((libro) => {
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

      <FiltrosCatalogo
        busqueda={busqueda}
        onBusqueda={setBusqueda}
        categoria={categoria}
        onCategoria={setCategoria}
        categorias={categorias}
        textoConteo={`${resultados.length} de ${datos.length} registros`}
      />

      <section>
        <GridLibros libros={resultados} onLimpiar={limpiarFiltros} />
      </section>
    </>
  );
}
