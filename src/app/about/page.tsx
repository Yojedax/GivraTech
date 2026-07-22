import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Acerca de — GivraTech',
  description: 'Consultoría de datos e IA.',
}

const values = [
  {
    title: 'Negocio antes que Tecnología',
    description: 'Cada proyecto comienza con una pregunta de negocio, no con una elección tecnológica. El modelo más sofisticado es el que mejor responde la pregunta correcta.',
  },
  {
    title: 'Impacto desde la Semana Uno',
    description: 'Priorizamos las victorias rápidas que demuestran valor inmediato. No esperamos hasta el final del proyecto para mostrar resultados.',
  },
  {
    title: 'Claridad sobre Complejidad',
    description: 'Preferimos soluciones simples que tu equipo pueda operar antes que arquitecturas brillantes que nadie entiende.',
  },
  {
    title: 'Transferencia Real de Conocimiento',
    description: 'Documentamos, capacitamos y diseñamos para la autonomía. El cliente no debería depender de nosotros indefinidamente.',
  },
]

const team = [
  {
    name: 'Equipo Data Science',
    focus: 'Modelos predictivos, ML y estadística aplicada al negocio',
    stack: 'Python · scikit-learn · XGBoost · PyTorch',
  },
  {
    name: 'Equipo Data Engineering',
    focus: 'Pipelines, arquitectura de datos y calidad de datos',
    stack: 'dbt · Airflow · BigQuery · Snowflake',
  },
  {
    name: 'Equipo IA y Agentes',
    focus: 'IA generativa, automatización de flujos y agentes conversacionales',
    stack: 'LangChain · Anthropic · OpenAI · RAG',
  },
  {
    name: 'Equipo Analytics y BI',
    focus: 'Dashboards ejecutivos, KPIs y reportes automatizados',
    stack: 'Looker Studio · Power BI · Next.js',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16" style={{ background: 'var(--surface-0)' }}>
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--surface-1)' }}>
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.06) 0%, transparent 55%)',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="badge mb-4" style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}>
              Acerca de GivraTech
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Construimos soluciones de datos que el negocio puede usar
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              GivraTech es una firma de consultoría en datos e inteligencia artificial especializada en traducir información compleja en decisiones concretas para empresas de logística, retail y e-commerce en Argentina y la región.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad" style={{ background: 'var(--surface-0)' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge badge-neon mb-4">Nuestro Enfoque</div>
            <h2 className="font-display text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Consultores que hablan el idioma del negocio y los datos
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                La brecha más cara en las empresas no es entre tener datos o no tenerlos. Es entre tener datos y saber qué decisión tomar con ellos.
              </p>
              <p>
                Nos especializamos en cerrar esa brecha. Nuestro equipo combina experiencia técnica profunda en datos y machine learning con comprensión real de los procesos empresariales.
              </p>
              <p>
                No somos una fábrica de software. No somos un laboratorio de investigación. Somos consultores que construyen cosas que funcionan en el mundo real, que tu equipo puede usar desde el primer día.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: '◎', label: 'Negocio + Datos', desc: 'Entendemos el negocio antes de modelar.' },
              { icon: '◈', label: 'Implementación Real', desc: 'Desde el modelo hasta el dashboard que tu equipo usa.' },
              { icon: '◉', label: 'Victorias Rápidas Primero', desc: 'Impacto en semanas, no meses.' },
              { icon: '◆', label: 'Escalabilidad', desc: 'Soluciones que crecen con tu negocio.' },
            ].map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-neon/20"
                style={{ background: 'var(--surface-2)', borderColor: 'var(--border-light)' }}
              >
                <span
                  className="text-xl w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}
                >
                  {p.icon}
                </span>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{p.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: 'var(--surface-1)' }}>
        <div className="container-wide">
          <div className="max-w-xl mb-12">
            <div className="badge badge-neon mb-4">Valores</div>
            <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Cómo pensamos el trabajo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={v.title} className="card p-6">
                <div
                  className="text-xs font-bold font-mono mb-3"
                  style={{ color: 'var(--neon)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="section-pad" style={{ background: 'var(--surface-0)' }}>
        <div className="container-wide">
          <div className="max-w-xl mb-12">
            <div className="badge badge-neutral mb-4">Capacidades</div>
            <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Equipos especializados, soluciones integradas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {team.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl border transition-all hover:border-neon/20"
                style={{ borderColor: 'var(--border-light)', background: 'var(--surface-2)' }}
              >
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t.name}</h3>
                <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t.focus}</p>
                <div className="text-xs font-mono" style={{ color: 'var(--neon)' }}>{t.stack}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--surface-1)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 60%)',
        }} />
        <div className="container-tight text-center relative z-10">
          <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            ¿Trabajemos juntos?
          </h2>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Cuéntanos el desafío y en 30 minutos te diremos si podemos ayudarte y cómo.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:shadow-neon hover:-translate-y-0.5"
            style={{ background: 'var(--neon)', color: 'var(--surface-0)' }}
          >
            Agendar Llamada Exploratoria <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
