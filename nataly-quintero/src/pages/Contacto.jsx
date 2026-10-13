import { useState } from "react";
import { canales } from "../data/canales";
import { motivos } from "../data/motivos";
import HeroBanner from "../components/HeroBanner";
import ContactInfoItem from "../components/ContactInfoItem";
import FormGroup from "../components/FormGroup";
import Icono from "../components/Icono";

const estiloTitulo = { fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "8px" };

function Contacto() {
  // Un useState independiente por cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Se ejecuta con el onClick del botón: limpia todos los campos
  const handleEnviar = () => {
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <>
      <HeroBanner
        titulo="Contacto & Consultas del Archivo"
        subtitulo="Ponte en comunicación con el equipo de curaduría bibliográfica o solicita acceso a títulos en préstamo especial."
      />

      <section className="contact-layout">
        <article className="contact-card">
          <h2 style={estiloTitulo}>Canales de Atención</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
            Nuestros bibliotecarios e investigadores responden consultas en días hábiles.
          </p>

          <div className="contact-info-list">
            {canales.map((canal) => (
              <ContactInfoItem
                key={canal.id}
                icono={canal.icono}
                titulo={canal.titulo}
                valor={canal.valor}
              />
            ))}
          </div>
        </article>

        <article className="contact-card">
          <h2 style={estiloTitulo}>Enviar Mensaje</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "24px" }}>
            Completa el siguiente formulario para radicar tu inquietud.
          </p>

          <div>
            <FormGroup id="nombre" label="Nombre Completo">
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Ej. Ana María Gómez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </FormGroup>

            <FormGroup id="email" label="Correo Electrónico">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup id="asunto" label="Motivo de Consulta">
              <select
                id="asunto"
                className="form-control"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              >
                <option value="">Selecciona un motivo...</option>
                {motivos.map((motivo) => (
                  <option key={motivo.valor} value={motivo.valor}>{motivo.texto}</option>
                ))}
              </select>
            </FormGroup>

            <FormGroup id="mensaje" label="Mensaje">
              <textarea
                id="mensaje"
                className="form-control"
                placeholder="Describe brevemente tu solicitud..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </FormGroup>

            <button type="button" className="btn btn-primary" style={{ width: "100%" }} onClick={handleEnviar}>
              <Icono nombre="send" className="icon-sm" />
              <span>Enviar Formulario</span>
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default Contacto;
