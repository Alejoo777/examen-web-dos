import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Inicio from '../pages/Inicio.jsx'
import Catalogo from '../pages/Catalogo.jsx'
import Contacto from '../pages/Contacto.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Inicio /> },
            { path: 'catalogo', element: <Catalogo /> },
            { path: 'contacto', element: <Contacto /> }
        ]
    }
])