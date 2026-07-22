import { testimonials } from '@/data/content'

const differentiators = [
  {
    icon: '◎',
    title: 'Negocio Primero, Tecnología Segundo',
    description: 'Comenzamos comprendiendo qué decisión necesita tomar el negocio, no eligiendo el modelo más sofisticado.',
  },
  {
    icon: '◈',
    title: 'De Extremo a Extremo Sin Silos',
    description: 'De datos crudos a panel ejecutivo. Un equipo, sin entregas parciales.',
  },
  {
    icon: '◉',
    title: 'Resultados en Semanas, No Meses',
    description: 'Metodología ágil con victorias rápidas validadas desde el primer sprint. El cliente ve el impacto antes de la entrega final.',
  },
  {
    icon: '◆',
    title: 'Soluciones que tu Equipo Puede Operar',
    description: 'Documentamos, capacitamos y diseñamos para la autonomía. No creamos dependencia.',
  },
]

export default function DifferentiatorsSection() {
  return (
    <>
      {/* Differentiators */}
      <section className="section-pad relative overflow-hidden" style={{ background: 'var(--surface-0)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 60%)',
        }} />
        <div className="container-wide relative z-10">
          <div className="text-center mb-14">
            <div
              className="badge mb-4 text-xs"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}
            >
              Por qué GivraTech
            </div>
            <h2
              className="font-display text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Diferencias que se ven en los resultados
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              No somos una fábrica de software ni un equipo de investigación. Somos consultores que construimos soluciones que funcionan en el mundo real.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="p-6 rounded-xl border transition-all hover:border-neon/30"
                style={{ background: 'var(--surface-2)', borderColor: 'var(--border-light)' }}
              >
                <span
                  className="text-2xl block mb-4"
                  style={{ color: 'var(--neon)' }}
                >
                  {d.icon}
                </span>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: 'var(--text-primary)' }}>
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad" style={{ background: 'var(--surface-1)' }}>
        <div className="container-wide">
          <div className="max-w-xl mb-12">
            <div className="badge badge-neon mb-4">Testimonios</div>
            <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Qué dicen nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-7 flex flex-col gap-5">
                <div
                  className="text-3xl font-display leading-none"
                  style={{ color: 'var(--neon)' }}
                >
                  &ldquo;
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {t.quote}
                </p>
                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{t.role} — {t.company}</div>
                  <div className="badge badge-neutral mt-2 text-[10px]">{t.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
