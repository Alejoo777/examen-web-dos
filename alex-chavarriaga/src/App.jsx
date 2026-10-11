import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

// Componente principal: solo entrega el enrutador a React.
// "future" activa un comportamiento de React Router 7 y evita una advertencia en la consola.
export default function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}
