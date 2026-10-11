import { useState } from 'react'
import { Search, Layers } from 'lucide-react'
import { libros } from '../data/libros.js'
import HeroBanner from '../components/HeroBanner.jsx'
import BookCard from '../components/BookCard.jsx'

export default function Catalogo() {
    const [busqueda, setBusqueda] = useState('')
    const [categoria, setCategoria] = useState('')

    const categorias = Array.from(new Set(libros.map(l => l.categoria))).sort()

    const termino = busqueda.toLowerCase().trim()
    const resultados = libros.filter(item => {
        const coincideTexto =
            item.titulo.toLowerCase().includes(termino) ||
            item.autor.toLowerCase().includes(termino) ||
            item.resumen.toLowerCase().includes(termino) ||
            item.editorial.toLowerCase().includes(termino)

        const coincideCategoria = categoria === '' || item.categoria === categoria

        return coincideTexto && coincideCategoria
    })

    const limpiarFiltros = () => {
        setBusqueda('')
        setCategoria('')
    }

    return (
        <>
            <HeroBanner
                titulo="Colección de Textos & Documentos"
                subtitulo="Explora el catálogo completo de publicaciones, ensayos y tratados de diseño."
                estiloExtra={{ padding: '28px 36px' }}
            />

            <section className="filter-toolbar">
                <div className="search-group">
                    <Search size={14} className="search-icon-pos" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Buscar por título, autor o concepto..."
                        value={busqueda}
                        onChange={e => setBusqueda(e.target.value)}
                    />
                </div>

                <select
                    className="select-category"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                >
                    <option value="">Todas las categorías</option>
                    {categorias.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                <span className="badge badge-neutral">
                    <Layers size={14} />
                    <span>{resultados.length} de {libros.length} registros</span>
                </span>
            </section>

            <section>
                <div className="cards-grid">
                    {resultados.length === 0 ? (
                        <div style={{
                            gridColumn: '1 / -1',
                            padding: '48px',
                            background: 'white',
                            borderRadius: '12px',
                            textAlign: 'center',
                            border: '1px dashed var(--border-medium)'
                        }}>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                                No se encontraron registros con los filtros actuales.
                            </p>
                            <button className="btn btn-secondary" onClick={limpiarFiltros}>
                                Limpiar Filtros
                            </button>
                        </div>
                    ) : (
                        resultados.map(item => <BookCard key={item.id} item={item} />)
                    )}
                </div>
            </section>
        </>
    )
}