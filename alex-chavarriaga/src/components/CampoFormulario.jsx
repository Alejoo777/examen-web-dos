// Envuelve una etiqueta y un control del formulario (input, select o textarea).
export default function CampoFormulario({ id, etiqueta, children }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {etiqueta}
      </label>
      {children}
    </div>
  );
}
