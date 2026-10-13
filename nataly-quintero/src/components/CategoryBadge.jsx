const clases = {
  "Arquitectura": "badge-arquitectura",
  "Diseño Industrial": "badge-industrial",
  "Diseño Gráfico": "badge-grafico",
  "Estética": "badge-estetica",
  "Tipografía": "badge-tipografia"
};

function CategoryBadge({ categoria }) {
  const clase = clases[categoria] || "badge-industrial";
  return (
    <span className={`badge ${clase}`} style={{ marginBottom: "12px" }}>
      {categoria}
    </span>
  );
}

export default CategoryBadge;
