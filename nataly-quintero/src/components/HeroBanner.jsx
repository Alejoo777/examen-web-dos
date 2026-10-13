function HeroBanner({ titulo, subtitulo, compacto }) {
  return (
    <section className="hero-banner" style={compacto ? { padding: "28px 36px" } : undefined}>
      <h1 className="hero-title">{titulo}</h1>
      <p className="hero-subtitle">{subtitulo}</p>
    </section>
  );
}

export default HeroBanner;
