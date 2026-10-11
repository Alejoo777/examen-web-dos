// Banner con título y subtítulo. "compacto" reduce el relleno (usado en el catálogo).
export default function HeroBanner({ titulo, subtitulo, compacto = false }) {
  return (
    <section
      className="hero-banner"
      style={compacto ? { padding: "28px 36px" } : undefined}
    >
      <h1 className="hero-title">{titulo}</h1>
      <p className="hero-subtitle">{subtitulo}</p>
    </section>
  );
}
