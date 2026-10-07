import Icono from "./Icono";

function ContactInfoItem({ icono, titulo, valor }) {
  return (
    <div className="contact-info-item">
      <div className="contact-icon-box">
        <Icono nombre={icono} />
      </div>
      <div>
        <strong style={{ display: "block", fontSize: "0.9rem", color: "var(--text-main)" }}>{titulo}</strong>
        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{valor}</span>
      </div>
    </div>
  );
}

export default ContactInfoItem;
