import ItemContacto from "./ItemContacto.jsx";

// Tarjeta con los canales de atención. Recibe la lista por props.
export default function InfoContacto({ canales }) {
  return (
    <article className="contact-card">
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "var(--text-main)",
          marginBottom: "8px",
        }}
      >
        Canales de Atención
      </h2>
      <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
        Nuestros bibliotecarios e investigadores responden consultas en días
        hábiles.
      </p>

      <div className="contact-info-list">
        {canales.map((canal) => (
          <ItemContacto
            key={canal.titulo}
            icono={canal.icono}
            titulo={canal.titulo}
            valor={canal.valor}
          />
        ))}
      </div>
    </article>
  );
}
