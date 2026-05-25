import { Link } from 'react-router-dom'

const plans = [
  {
    title: 'Empaste dental',
    price: '70€',
    subtitle: 'Tratamiento conservador para reparar caries o pequeñas fracturas.',
    badge: 'Precio orientativo',
  },
  {
    title: 'Endodoncia',
    price: '220€',
    subtitle: 'Tratamiento para salvar dientes dañados o con infección.',
    badge: 'Desde',
  },
  {
    title: 'Corona de porcelana',
    price: '270€',
    subtitle: 'Solución estética y resistente para restaurar dientes dañados.',
    badge: 'Desde',
  },
  {
    title: 'Férula dental',
    price: '420€',
    subtitle: 'Tratamiento personalizado para proteger tu dentadura y mejorar tu descanso.',
    badge: 'Desde',
  },
]

const conditions = [
  'Estos son algunos de nuestros precios orientativos.',
  'Cada tratamiento requiere una valoración clínica previa.',
  'El presupuesto final puede variar según las necesidades del paciente.',
  'Te explicaremos todas las opciones disponibles antes de comenzar.',
  'Consulta con Dentopia para conocer más tratamientos y tarifas.',
]

const Pricing = () => {
  return (
    <section id="tarifas" className="scroll-mt-28 bg-blue-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white">
            Tarifas orientativas
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-blue-800 sm:text-4xl">
            Algunos de nuestros precios
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Queremos ofrecerte transparencia desde el primer momento. Estos
            precios son orientativos y pueden ajustarse tras la valoración
            personalizada.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white px-6 py-8 text-center shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)]"
            >
              {plan.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                  {plan.badge}
                </span>
              )}

              <h3 className="mt-6 text-xl font-extrabold text-blue-800">
                {plan.title}
              </h3>

              <p className="mt-5 text-5xl font-extrabold tracking-tight text-blue-700">
                {plan.price}
              </p>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                {plan.subtitle}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white px-8 py-8 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
          <h3 className="text-center text-2xl font-extrabold text-blue-800">
            Información importante
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                  ✓
                </span>
                <p className="text-base leading-7 text-neutral-700">
                  {condition}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/tratamientos"
              className="inline-flex rounded-xl bg-blue-700 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-blue-800"
            >
              Consultar más precios
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing