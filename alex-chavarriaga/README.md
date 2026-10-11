# Librería Archivo (React)

Migración de la aplicación Vanilla JavaScript "Librería Archivo" a React.

## Tecnologías
- React 18 + Vite
- React Router DOM 6 (`createBrowserRouter`, `Layout` con `<Outlet />`)
- Único hook utilizado: `useState`

## Ejecutar
```bash
npm install
npm run dev
```

## Estructura
```text
src/
├── components/   # Componentes reutilizables (Layout, Navbar, Footer, tarjetas, formulario...)
├── pages/        # Vistas: Inicio, Catálogo y Contacto
├── routes/       # Configuración del enrutador (createBrowserRouter)
├── data/         # Mock de datos (arreglo de libros) e íconos SVG
├── styles/       # Hoja de estilos
├── App.jsx       # Provee el RouterProvider
└── main.jsx      # Punto de entrada
```

## Rutas
| Ruta | Vista |
|---|---|
| `/` | Inicio |
| `/catalogo` | Catálogo (búsqueda y filtro por categoría) |
| `/contacto` | Contacto (formulario controlado con `useState` por campo) |
