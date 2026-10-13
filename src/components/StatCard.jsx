import { Book, Tag, Star, FileText } from 'lucide-react'

const iconos = { Book, Tag, Star, FileText }

export default function StatCard({ label, valor, icono, bg, color }) {
    const Icono = iconos[icono] || Book

    return (
        <article className="stat-card">
            <div className="stat-icon-wrapper" style={{ backgroundColor: bg, color }}>
                <Icono size={24} />
            </div>
            <div className="stat-content">
                <span className="stat-number">{valor}</span>
                <span className="stat-label">{label}</span>
            </div>
        </article>
    )
}