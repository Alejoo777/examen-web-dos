import Icono from './Icono'

function ContactInfoItem({ icono, titulo, valor }) {
  return (
    <div className="contact-info-item">
      <div className="contact-icon-box">
        <Icono nombre={icono} />
      </div>
      <div>
        <strong>{titulo}</strong>
        <span>{valor}</span>
      </div>
    </div>
  )
}

export default ContactInfoItem
