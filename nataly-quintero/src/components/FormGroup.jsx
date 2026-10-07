// Envuelve cada campo del formulario con su etiqueta
function FormGroup({ id, label, children }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">{label}</label>
      {children}
    </div>
  );
}

export default FormGroup;
