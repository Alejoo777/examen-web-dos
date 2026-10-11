import TarjetaLibro from "./TarjetaLibro.jsx";
import SinResultados from "./SinResultados.jsx";

// Cuadrícula de tarjetas. Recorre la lista con .map(); si está vacía, avisa.
export default function GridLibros({ libros, onLimpiar }) {
  return (
    <div className="cards-grid">
      {libros.length === 0 ? (
        <SinResultados onLimpiar={onLimpiar} />
      ) : (
        libros.map((libro) => <TarjetaLibro key={libro.id} libro={libro} />)
      )}
    </div>
  );
}
