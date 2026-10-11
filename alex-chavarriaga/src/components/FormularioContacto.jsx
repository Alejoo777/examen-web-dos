import { useState } from "react";
import Icono from "./Icono.jsx";
import CampoFormulario from "./CampoFormulario.jsx";

// Formulario controlado: un useState independiente por cada campo.
// No usa el evento submit; el botón ejecuta limpiarFormulario con onClick.
export default function FormularioContacto({ motivos }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <article className="contact-card">
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "var(--text-main)",
          marginBottom: "8px",
        }}
      >
        Enviar Mensaje
      </h2>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.92rem",
          marginBottom: "24px",
        }}
      >
        Completa el siguiente formulario para radicar tu inquietud.
      </p>

      <form>
        <CampoFormulario id="nombre" etiqueta="Nombre Completo">
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Ej. Ana María Gómez"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          />
        </CampoFormulario>

        <CampoFormulario id="email" etiqueta="Correo Electrónico">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="nombre@ejemplo.com"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </CampoFormulario>

        <CampoFormulario id="asunto" etiqueta="Motivo de Consulta">
          <select
            id="asunto"
            className="form-control"
            value={asunto}
            onChange={(evento) => setAsunto(evento.target.value)}
          >
            <option value="">Selecciona un motivo...</option>
            {motivos.map((motivo) => (
              <option key={motivo.valor} value={motivo.valor}>
                {motivo.texto}
              </option>
            ))}
          </select>
        </CampoFormulario>

        <CampoFormulario id="mensaje" etiqueta="Mensaje">
          <textarea
            id="mensaje"
            className="form-control"
            placeholder="Describe brevemente tu solicitud..."
            value={mensaje}
            onChange={(evento) => setMensaje(evento.target.value)}
          ></textarea>
        </CampoFormulario>

        <button
          type="button"
          className="btn btn-primary"
          style={{ width: "100%" }}
          onClick={limpiarFormulario}
        >
          <Icono nombre="send" className="icon-sm" />
          <span>Enviar Formulario</span>
        </button>
      </form>
    </article>
  );
}
