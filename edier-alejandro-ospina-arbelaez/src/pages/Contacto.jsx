import { useState } from 'react';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const limpiarFormulario = () => {
    setNombre('');
    setCorreo('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <div className="container">
      <section className="hero-banner">
        <h1 className="hero-title">Contacto</h1>
        <p className="hero-subtitle">
          ¿Tienes alguna consulta sobre nuestra colección? Escríbenos.
        </p>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">Envíanos un mensaje</h2>
        </div>

        <div className="contact-form-container">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <input
              id="asunto"
              type="text"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              placeholder="Motivo de tu consulta"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe tu mensaje..."
              rows="5"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={limpiarFormulario}
          >
            Limpiar formulario
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contacto;