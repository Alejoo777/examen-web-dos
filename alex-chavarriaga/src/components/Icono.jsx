import { iconos } from "../data/iconos.js";

// Dibuja un ícono SVG a partir de su nombre. Usa las mismas clases que
// generaba Lucide ("lucide") para conservar los estilos del CSS original.
export default function Icono({ nombre, className = "" }) {
  const formas = iconos[nombre] || [];

  return (
    <svg
      className={`lucide lucide-${nombre} ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {formas.map(([Forma, atributos], indice) => (
        <Forma key={indice} {...atributos} />
      ))}
    </svg>
  );
}
