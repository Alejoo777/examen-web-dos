import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import HeroBanner from '../components/HeroBanner.jsx'

export default function Contacto() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [asunto, setAsunto] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleEnviar = () => {
        setNombre('')
        setEmail('')
        setAsunto('')
        setMensaje('')
    }

    const infoItems = [
        { icono: Mail, titulo: 'Correo Electrónico', valor: 'contacto@libreria-archivo.org' },
        { icono: Phone, titulo: 'Teléfono de Sala', valor: '+57 (604) 444-2020' },
        { icono: MapPin, titulo: 'Sede Principal', valor: 'Calle 48 #72-10, Edificio Bauhaus' },
        { icono: Clock, titulo: 'Horario de Consulta', valor: 'Lunes a Viernes: 08:00 - 18:00' }
    ]

    return (
        <>
            <HeroBanner
                titulo="Contacto & Consultas del Archivo"
                subtitulo="Ponte en comunicación con el equipo de curaduría bibliográfica o solicita acceso a títulos en préstamo especial."
            />

            <section className="contact-layout">
                <article className="contact-card">
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                        Canales de Atención
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                        Nuestros bibliotecarios e investigadores responden consultas en días hábiles.
                    </p>

                    <div className="contact-info-list">
                        {infoItems.map((item, i) => {
                            const Icono = item.icono
                            return (
                                <div className="contact-info-item" key={i}>
                                    <div className="contact-icon-box">
                                        <Icono size={20} />
                                    </div>
                                    <div>
                                        <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                                            {item.titulo}
                                        </strong>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                            {item.valor}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </article>

                <article className="contact-card">
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                        Enviar Mensaje
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
                        Completa el siguiente formulario para radicar tu inquietud.
                    </p>

                    <div>
                        <div className="form-group">
                            <label className="form-label">Nombre Completo</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ej. Ana María Gómez"
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Correo Electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="nombre@ejemplo.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Motivo de Consulta</label>
                            <select
                                className="form-control"
                                value={asunto}
                                onChange={e => setAsunto(e.target.value)}
                            >
                                <option value="">Selecciona un motivo...</option>
                                <option value="prestamo">Consulta de libro en sala</option>
                                <option value="donacion">Donación de archivo</option>
                                <option value="investigacion">Apoyo en investigación académica</option>
                                <option value="general">Información general</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Mensaje</label>
                            <textarea
                                className="form-control"
                                placeholder="Describe brevemente tu solicitud..."
                                value={mensaje}
                                onChange={e => setMensaje(e.target.value)}
                            />
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                            onClick={handleEnviar}
                        >
                            <Send size={14} />
                            <span>Enviar Formulario</span>
                        </button>
                    </div>
                </article>
            </section>
        </>
    )
}