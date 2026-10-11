import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalogo", element: <Catalog /> },
      { path: "contacto", element: <Contact /> },
    ],
  },
]);

