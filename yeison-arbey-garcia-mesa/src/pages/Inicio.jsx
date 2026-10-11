import { Link } from "react-router-dom";
import { libros } from "../data/libros";
import HeroBanner from "../components/HeroBanner";
import StatCard from "../components/StatCard";
import BookCard from "../components/BookCard";
import Icono from "../components/Icono";

function Inicio() {
  const totalLibros = libros.length;
  const categoriasUnicas = new Set(libros.map((l) => l.categoria)).size;
  const promedioRating = (
    libros.reduce((acc, l) => acc + l.calificacion, 0) / totalLibros
  ).toFixed(1);
  const totalPaginas = libros.reduce((acc, l) => acc + l.paginas, 0);

  const estadisticas = [
    { label: "Libros Indexados", valor: totalLibros, icono: "book", bg: "#eef2ff", color: "#4f46e5" },
    { label: "Categorías Temáticas", valor: categoriasUnicas, icono: "tag", bg: "#e0f2fe", color: "#0284c7" },
    { label: "Calificación Promedio", valor: promedioRating, icono: "star", bg: "#fef3c7", color: "#d97706" },
    { label: "Páginas Totales", valor: totalPaginas.toLocaleString(), icono: "file-text", bg: "#ecfdf5", color: "#059669" },
  ];

  const destacados = libros.filter((l) => l.destacado);

  return (
    <>
      <HeroBanner
        titulo="Biblioteca de Diseño & Teoría Visual"
        subtitulo="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      />

      <section>
        <div className="section-header">
          <h2 className="section-title">
            <Icono nombre="bar-chart-3" />
            <span>Resumen del Repositorio</span>
          </h2>
        </div>
        <div className="stats-grid">
          {estadisticas.map((st) => (
            <StatCard
              key={st.label}
              label={st.label}
              valor={st.valor}
              icono={st.icono}
              bg={st.bg}
              color={st.color}
            />
          ))}
        </div>
      </section>

      <section className="section-spaced">
        <div className="section-header">
          <h2 className="section-title">
            <Icono nombre="star" />
            <span>Obras Destacadas</span>
          </h2>
          <Link to="/catalogo" className="btn btn-outline">
            <span>Explorar Catálogo Completo</span>
            <Icono nombre="arrow-right" className="icon-sm" />
          </Link>
        </div>

        <div className="cards-grid">
          {destacados.map((libro) => (
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
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;