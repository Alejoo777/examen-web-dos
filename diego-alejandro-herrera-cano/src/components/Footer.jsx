function Footer({ marca, descripcion, nota }) {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <span>
          <strong>{marca}</strong> &bull; {descripcion}
        </span>
        <span>{nota}</span>
      </div>
    </footer>
  )
}

export default Footer
