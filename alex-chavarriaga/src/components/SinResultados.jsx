// Mensaje cuando los filtros no encuentran libros. El botón limpia los filtros.
export default function SinResultados({ onLimpiar }) {
  return (
    <div
      style={{
        gridColumn: "1 / -1",
        padding: "48px",
        background: "white",
        borderRadius: "12px",
        textAlign: "center",
        border: "1px dashed var(--border-medium)",
      }}
    >
      <p
        style={{
          fontSize: "1.05rem",
          color: "var(--text-muted)",
          marginBottom: "16px",
        }}
      >
        No se encontraron registros con los filtros actuales.
      </p>
      <button className="btn btn-secondary" onClick={onLimpiar}>
        Limpiar Filtros
      </button>
    </div>
  );
}
