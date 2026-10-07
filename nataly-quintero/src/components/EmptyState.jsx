const estiloCaja = {
  gridColumn: "1 / -1",
  padding: "48px",
  background: "white",
  borderRadius: "12px",
  textAlign: "center",
  border: "1px dashed var(--border-medium)"
};

function EmptyState({ mensaje, textoBoton, onLimpiar }) {
  return (
    <div className="cards-grid">
      <div style={estiloCaja}>
        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", marginBottom: "16px" }}>
          {mensaje}
        </p>
        <button className="btn btn-secondary" onClick={onLimpiar}>
          {textoBoton}
        </button>
      </div>
    </div>
  );
}

export default EmptyState;
