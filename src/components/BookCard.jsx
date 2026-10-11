import { Star, BookMarked, Calendar, Landmark, Sliders, LayoutGrid, Moon, Type, Box } from 'lucide-react'

const iconos = {
    Landmark, Sliders, LayoutGrid, Moon, Type, Box
}

function obtenerClaseCategoria(categoria) {
    switch (categoria) {
        case "Arquitectura": return "badge-arquitectura"
        case "Diseño Industrial": return "badge-industrial"
        case "Diseño Gráfico": return "badge-grafico"
        case "Estética": return "badge-estetica"
        case "Tipografía": return "badge-tipografia"
        default: return "badge-industrial"
    }
}

export default function BookCard({ item }) {
    const claseBadge = obtenerClaseCategoria(item.categoria)
    const Icono = iconos[item.icono] || Landmark

    return (
        <article className="book-card">
            <div>
                <div className="card-top">
                    <div className="card-icon-container">
                        <Icono size={18} />
                    </div>
                    <span className="card-rating-badge">
                        <Star size={13} fill="currentColor" />
                        <span>{item.calificacion.toFixed(1)}</span>
                    </span>
                </div>

                <span className={`badge ${claseBadge}`} style={{ marginBottom: '12px' }}>
                    {item.categoria}
                </span>
                <h3 className="card-title">{item.titulo}</h3>
                <p className="card-author">Por {item.autor} ({item.anio})</p>
                <p className="card-summary">{item.resumen}</p>

                <div className="card-details-box">
                    <span>Editorial: <strong>{item.editorial}</strong></span>
                    <span>ISBN: <code>{item.isbn}</code></span>
                </div>
            </div>

            <div className="card-footer">
                <span className="card-meta">
                    <BookMarked size={14} />
                    <span>{item.paginas} páginas</span>
                </span>
                <span className="card-meta" style={{ color: 'var(--text-muted)' }}>
                    <Calendar size={14} />
                    <span>Edición {item.anio}</span>
                </span>
            </div>
        </article>
    )
}