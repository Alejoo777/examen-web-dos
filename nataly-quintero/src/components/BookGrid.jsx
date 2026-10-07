import BookCard from "./BookCard";

// Recibe la lista de libros por props y pinta una tarjeta por cada uno con .map()
function BookGrid({ libros }) {
  return (
    <div className="cards-grid">
      {libros.map((libro) => (
        <BookCard
          key={libro.id}
          titulo={libro.titulo}
          autor={libro.autor}
          categoria={libro.categoria}
          icono={libro.icono}
          anio={libro.anio}
          paginas={libro.paginas}
          calificacion={libro.calificacion}
          editorial={libro.editorial}
          isbn={libro.isbn}
          resumen={libro.resumen}
        />
      ))}
    </div>
  );
}

export default BookGrid;
