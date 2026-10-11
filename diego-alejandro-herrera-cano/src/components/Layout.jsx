import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const enlaces = [
  { ruta: '/', texto: 'Inicio', icono: 'home' },
  { ruta: '/catalogo', texto: 'Catálogo', icono: 'grid' },
  { ruta: '/contacto', texto: 'Contacto', icono: 'mail' },
]

function Layout() {
  return (
    <>
      <Navbar marca="Librería Archivo" enlaces={enlaces} />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer
        marca="Librería Archivo"
        descripcion="Catálogo bibliográfico de diseño"
        nota="Colección abierta para consulta"
      />
    </>
  )
}

export default Layout
