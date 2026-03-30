const steps = [
  {
    number: '01',
    title: 'Data & Business Diagnosis',
    description: 'We analyze the current state of your data, systems, and processes. We identify quick wins with the highest impact potential in the first 30 days.',
  },
  {
    number: '02',
    title: 'Solution Design',
    description: 'We define the architecture, stack, and deliverables. No over-engineering: the right solution for the real problem, not the most technologically impressive.',
  },
  {
    number: '03',
    title: 'Iterative Development',
    description: 'We deliver in short sprints. Each iteration produces something measurable and usable by the team. We validate with real business users, not just technicians.',
  },
  {
    number: '04',
    title: 'Knowledge Transfer & Scaling',
    description: 'We document, train, and leave the solution operating autonomously. Your internal team can maintain and extend what was built without depending on us.',
  },
]

export default function HowWeWork() {
  return (
    <section className="section-pad" style={{ background: 'var(--surface-1)' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — sticky only on desktop; on mobile renders normally in flow */}
          <div className="lg:sticky lg:top-28">
            <div className="badge badge-neon mb-4">Methodology</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Quick to implement.<br />
              <span className="gradient-text">Easy to operate.</span>
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Our projects generate measurable results from the first weeks. We don't build solutions that end up in a drawer: we build tools your team uses every day.
            </p>
            <div className="p-5 rounded-xl border-l-4" style={{ borderColor: 'var(--neon)', background: 'var(--neon-glow)' }}>
              <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                &ldquo;80% of impact comes from 20% of your data. We identify that 20% before writing a single line of code.&rdquo;
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>— GivraTech Working Principle</p>
            </div>
          </div>

          {/* Right: steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-5 top-12 bottom-0 w-px"
                    style={{ background: 'var(--border-light)' }}
                  />
                )}

                {/* Number bubble */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-mono z-10"
                  style={{ background: 'var(--neon)', color: 'var(--surface-0)' }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
