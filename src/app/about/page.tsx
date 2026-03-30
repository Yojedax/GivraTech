import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About — GivraTech',
  description: 'Data & AI consulting.',
}

const values = [
  {
    title: 'Business Before Technology',
    description: 'Every project begins with a business question, not a technology choice. The most sophisticated model is the one that best answers the right question.',
  },
  {
    title: 'Impact From Week One',
    description: 'We prioritize quick wins that demonstrate fast value. We don\'t wait until the end of the project to show results.',
  },
  {
    title: 'Clarity Over Complexity',
    description: 'We prefer simple solutions your team can operate over brilliant architectures nobody understands.',
  },
  {
    title: 'Real Knowledge Transfer',
    description: 'We document, train, and design for autonomy. The client shouldn\'t depend on us indefinitely.',
  },
]

const team = [
  {
    name: 'Data Science Team',
    focus: 'Predictive models, ML and statistics applied to business',
    stack: 'Python · scikit-learn · XGBoost · PyTorch',
  },
  {
    name: 'Data Engineering Team',
    focus: 'Pipelines, data architecture and data quality',
    stack: 'dbt · Airflow · BigQuery · Snowflake',
  },
  {
    name: 'AI & Agents Team',
    focus: 'Generative AI, workflow automation and conversational agents',
    stack: 'LangChain · Anthropic · OpenAI · RAG',
  },
  {
    name: 'Analytics & BI Team',
    focus: 'Executive dashboards, KPIs and automated reporting',
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
              About GivraTech
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              We build data solutions the business can actually use
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              GivraTech is a data & artificial intelligence consulting firm specializing in translating complex information into concrete decisions for logistics, retail, and e-commerce companies in Argentina and the region.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad" style={{ background: 'var(--surface-0)' }}>
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge badge-neon mb-4">Our Approach</div>
            <h2 className="font-display text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Consultants who speak both the language of business and data
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                The most expensive gap in companies isn't between having data or not having it. It's between having data and knowing what decision to make with it.
              </p>
              <p>
                We specialize in closing that gap. Our team combines deep technical expertise in data and machine learning with real understanding of business processes.
              </p>
              <p>
                We're not a software factory. We're not a research lab. We're consultants who build things that work in the real world, that your team can use from day one.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: '◎', label: 'Business + Data', desc: 'We understand business before modeling.' },
              { icon: '◈', label: 'Real Implementation', desc: 'From model to dashboard your team uses.' },
              { icon: '◉', label: 'Quick Wins First', desc: 'Impact in weeks, not months.' },
              { icon: '◆', label: 'Scalability', desc: 'Solutions that grow with your business.' },
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
            <div className="badge badge-neon mb-4">Values</div>
            <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
              How we think about work
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
            <div className="badge badge-neutral mb-4">Capabilities</div>
            <h2 className="font-display text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Specialized teams, integrated solutions
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
            Let's work together?
          </h2>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Tell us the challenge and in 30 minutes we'll tell you if we can help and how.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:shadow-neon hover:-translate-y-0.5"
            style={{ background: 'var(--neon)', color: 'var(--surface-0)' }}
          >
            Book Exploratory Call <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
