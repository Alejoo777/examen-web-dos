// Cada categoría tiene su clase de color en el CSS.
const clasesPorCategoria = {
  Arquitectura: "badge-arquitectura",
  "Diseño Industrial": "badge-industrial",
  "Diseño Gráfico": "badge-grafico",
  Estética: "badge-estetica",
  Tipografía: "badge-tipografia",
};

export default function EtiquetaCategoria({ categoria }) {
  const clase = clasesPorCategoria[categoria] || "badge-industrial";

  return (
    <span className={`badge ${clase}`} style={{ marginBottom: "12px" }}>
      {categoria}
    </span>
  );
}
