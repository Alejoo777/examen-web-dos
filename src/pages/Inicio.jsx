import { Link } from 'react-router-dom'
import { BarChart3, Star, ArrowRight } from 'lucide-react'
import { libros } from '../data/libros.js'
import HeroBanner from '../components/HeroBanner.jsx'
import StatCard from '../components/StatCard.jsx'
import BookCard from '../components/BookCard.jsx'

export default function Inicio() {
    const totalLibros = libros.length
    const categoriasUnicas = new Set(libros.map(l => l.categoria)).size
    const promedioRating = (libros.reduce((acc, l) => acc + l.calificacion, 0) / totalLibros).toFixed(1)
    const totalPaginas = libros.reduce((acc, l) => acc + l.paginas, 0)

    const stats = [
        { label: "Libros Indexados", valor: totalLibros, icono: "Book", bg: "#eef2ff", color: "#4f46e5" },
        { label: "Categorías Temáticas", valor: categoriasUnicas, icono: "Tag", bg: "#e0f2fe", color: "#0284c7" },
        { label: "Calificación Promedio", valor: promedioRating, icono: "Star", bg: "#fef3c7", color: "#d97706" },
        { label: "Páginas Totales", valor: totalPaginas.toLocaleString(), icono: "FileText", bg: "#ecfdf5", color: "#059669" }
    ]

    const destacados = libros.filter(l => l.destacado)

    return (
        <>
            <HeroBanner
                titulo="Biblioteca de Diseño & Teoría Visual"
                subtitulo="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
            />

            <section>
                <div className="section-header">
                    <h2 className="section-title">
                        <BarChart3 size={20} />
                        <span>Resumen del Repositorio</span>
                    </h2>
                </div>
                <div className="stats-grid">
                    {stats.map((st, i) => <StatCard key={i} {...st} />)}
                </div>
            </section>

            <section style={{ marginTop: '44px' }}>
                <div className="section-header">
                    <h2 className="section-title">
                        <Star size={20} />
                        <span>Obras Destacadas</span>
                    </h2>
                    <Link to="/catalogo" className="btn btn-outline">
                        <span>Explorar Catálogo Completo</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
                <div className="cards-grid">
                    {destacados.map(item => <BookCard key={item.id} item={item} />)}
                </div>
            </section>
        </>
    )
}