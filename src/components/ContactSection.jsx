import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-blue-50 py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
            Contacto
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Estamos aquí para ayudarte. Contacta con Clínica Dental Dentopia
            para reservar tu cita en Arganzuela.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-800">Dirección</h3>
              <p className="mt-2 text-lg text-neutral-600">
                Paseo de las Delicias, 44, Arganzuela, 28045 Madrid
              </p>
            </div>
          </div>

          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-800">Teléfono</h3>
              <a
                href="tel:911680037"
                className="mt-2 block whitespace-nowrap text-lg text-neutral-600 transition hover:text-blue-700"
              >
                911 68 00 37
              </a>
            </div>
          </div>

          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaWhatsapp />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-800">WhatsApp</h3>
              <a
                href="https://wa.me/34660058377"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg text-neutral-600 transition hover:text-blue-700"
              >
                +34 660 05 83 77
              </a>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl bg-white px-4 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)] sm:gap-5 sm:px-6">
            <div className="pt-1 text-xl text-blue-700">
              <FaClock />
            </div>

            <div className="w-full min-w-0">
              <h3 className="text-xl font-bold text-blue-800">Horario</h3>

              <div className="mt-4 space-y-4 text-base text-neutral-700 sm:text-lg">
                {[
                  ['Lunes', '10:30–14:00 · 16:00–20:00'],
                  ['Martes', '10:30–14:00 · 16:00–20:00'],
                  ['Miércoles', '10:30–14:00 · 16:00–20:00'],
                  ['Jueves', '10:30–14:00 · 16:00–20:00'],
                  ['Viernes', '10:30–14:00 · 16:00–20:00'],
                  ['Sábado', 'Cerrado'],
                  ['Domingo', 'Cerrado'],
                ].map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex flex-col border-b border-blue-100 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <span className="font-semibold text-blue-800">{day}</span>
                    <span className="mt-1 leading-7 text-neutral-700 sm:mt-0 sm:text-right">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection