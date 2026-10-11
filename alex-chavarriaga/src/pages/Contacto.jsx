import HeroBanner from "../components/HeroBanner.jsx";
import InfoContacto from "../components/InfoContacto.jsx";
import FormularioContacto from "../components/FormularioContacto.jsx";

const canales = [
  { icono: "mail", titulo: "Correo Electrónico", valor: "contacto@libreria-archivo.org" },
  { icono: "phone", titulo: "Teléfono de Sala", valor: "+57 (604) 444-2020" },
  { icono: "map-pin", titulo: "Sede Principal", valor: "Calle 48 #72-10, Edificio Bauhaus" },
  { icono: "clock", titulo: "Horario de Consulta", valor: "Lunes a Viernes: 08:00 - 18:00" },
];

const motivos = [
  { valor: "prestamo", texto: "Consulta de libro en sala" },
  { valor: "donacion", texto: "Donación de archivo" },
  { valor: "investigacion", texto: "Apoyo en investigación académica" },
  { valor: "general", texto: "Información general" },
];

export default function Contacto() {
  return (
    <>
      <HeroBanner
        titulo="Contacto & Consultas del Archivo"
        subtitulo="Ponte en comunicación con el equipo de curaduría bibliográfica o solicita acceso a títulos en préstamo especial."
      />

      <section className="contact-layout">
        <InfoContacto canales={canales} />
        <FormularioContacto motivos={motivos} />
      </section>
    </>
  );
}
