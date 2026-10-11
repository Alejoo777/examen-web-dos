import { Link } from "react-router-dom";
import { datos } from "../data/datos.js";
import HeroBanner from "../components/HeroBanner.jsx";
import EncabezadoSeccion from "../components/EncabezadoSeccion.jsx";
import TarjetaMetrica from "../components/TarjetaMetrica.jsx";
import GridLibros from "../components/GridLibros.jsx";
import Icono from "../components/Icono.jsx";

export default function Inicio() {
  // Métricas calculadas a partir del arreglo de datos.
  const totalLibros = datos.length;
  const categoriasUnicas = new Set(datos.map((d) => d.categoria)).size;
  const promedioRating = (
    datos.reduce((acc, d) => acc + d.calificacion, 0) / totalLibros
  ).toFixed(1);
  const totalPaginas = datos.reduce((acc, d) => acc + d.paginas, 0);

  const metricas = [
    { etiqueta: "Libros Indexados", valor: totalLibros, icono: "book", fondo: "#eef2ff", color: "#4f46e5" },
    { etiqueta: "Categorías Temáticas", valor: categoriasUnicas, icono: "tag", fondo: "#e0f2fe", color: "#0284c7" },
    { etiqueta: "Calificación Promedio", valor: promedioRating, icono: "star", fondo: "#fef3c7", color: "#d97706" },
    { etiqueta: "Páginas Totales", valor: totalPaginas.toLocaleString(), icono: "file-text", fondo: "#ecfdf5", color: "#059669" },
  ];

  // Solo los libros marcados como destacados.
  const destacados = datos.filter((d) => d.destacado);

  return (
    <>
      <HeroBanner
        titulo="Biblioteca de Diseño & Teoría Visual"
        subtitulo="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      />

      <section>
        <EncabezadoSeccion icono="bar-chart-3" titulo="Resumen del Repositorio" />
        <div className="stats-grid">
          {metricas.map((metrica) => (
            <TarjetaMetrica
              key={metrica.etiqueta}
              etiqueta={metrica.etiqueta}
              valor={metrica.valor}
              icono={metrica.icono}
              fondo={metrica.fondo}
              color={metrica.color}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "44px" }}>
        <EncabezadoSeccion icono="star" titulo="Obras Destacadas">
          <Link to="/catalogo" className="btn btn-outline">
            <span>Explorar Catálogo Completo</span>
            <Icono nombre="arrow-right" className="icon-sm" />
          </Link>
        </EncabezadoSeccion>

        <GridLibros libros={destacados} />
      </section>
    </>
  );
}
