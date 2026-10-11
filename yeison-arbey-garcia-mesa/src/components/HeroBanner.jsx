function HeroBanner({ titulo, subtitulo, compacto = false }) {
  return (
    <section className={compacto ? "hero-banner hero-banner-compact" : "hero-banner"}>
      <h1 className="hero-title">{titulo}</h1>
      <p className="hero-subtitle">{subtitulo}</p>
    </section>
  );
}

export default HeroBanner;