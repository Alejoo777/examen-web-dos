import { useState } from 'react'
import { datos } from '../data/datos'
import HeroBanner from '../components/HeroBanner'
import FiltrosCatalogo from '../components/FiltrosCatalogo'
import BookCard from '../components/BookCard'

function Catalogo() {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('')

  const categorias = Array.from(new Set(datos.map((d) => d.categoria))).sort()

  const termino = busqueda.toLowerCase().trim()
  const resultados = datos.filter((item) => {
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
      />

      <FiltrosCatalogo
        busqueda={busqueda}
        onCambiarBusqueda={setBusqueda}
        categoria={categoria}
        onCambiarCategoria={setCategoria}
        categorias={categorias}
        cantidad={resultados.length}
        total={datos.length}
      />

      <section>
        <div className="cards-grid">
          {resultados.length === 0 ? (
            <div className="empty-state">
              <p>No se encontraron registros con los filtros actuales.</p>
              <button type="button" className="btn btn-secondary" onClick={limpiarFiltros}>
                Limpiar Filtros
              </button>
            </div>
          ) : (
            resultados.map((libro) => <BookCard key={libro.id} {...libro} />)
          )}
        </div>
      </section>
    </>
  )
}

export default Catalogo
