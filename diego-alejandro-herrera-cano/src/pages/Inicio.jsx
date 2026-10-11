import { Link } from 'react-router-dom'
import { datos } from '../data/datos'
import HeroBanner from '../components/HeroBanner'
import StatCard from '../components/StatCard'
import BookCard from '../components/BookCard'
import Icono from '../components/Icono'

function Inicio() {
  const totalLibros = datos.length
  const categoriasUnicas = new Set(datos.map((d) => d.categoria)).size
  const promedioRating = (datos.reduce((acc, d) => acc + d.calificacion, 0) / totalLibros).toFixed(1)
  const totalPaginas = datos.reduce((acc, d) => acc + d.paginas, 0)

  const stats = [
    { label: 'Libros Indexados', valor: totalLibros, icono: 'book', bg: '#eef2ff', color: '#4f46e5' },
    { label: 'Categorías Temáticas', valor: categoriasUnicas, icono: 'tag', bg: '#e0f2fe', color: '#0284c7' },
    { label: 'Calificación Promedio', valor: promedioRating, icono: 'star', bg: '#fef3c7', color: '#d97706' },
    { label: 'Páginas Totales', valor: totalPaginas.toLocaleString(), icono: 'file-text', bg: '#ecfdf5', color: '#059669' },
  ]

  const destacados = datos.filter((d) => d.destacado)

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
          {stats.map((st) => (
            <StatCard key={st.label} {...st} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '44px' }}>
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
            <BookCard key={libro.id} {...libro} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Inicio
