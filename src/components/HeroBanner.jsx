export default function HeroBanner({ titulo, subtitulo, estiloExtra }) {
    return (
        <section className="hero-banner" style={estiloExtra}>
            <h1 className="hero-title">{titulo}</h1>
            <p className="hero-subtitle">{subtitulo}</p>
        </section>
    )
}