function HeroBanner({ titulo, subtitulo }) {
  return (
    <section className="hero-banner">
      <h1 className="hero-title">{titulo}</h1>
      <p className="hero-subtitle">{subtitulo}</p>
    </section>
  )
}

export default HeroBanner
