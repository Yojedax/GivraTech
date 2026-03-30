'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { faqs, techStack } from '@/data/content'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b cursor-pointer group"
      style={{ borderColor: 'var(--border)' }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{question}</span>
        <ChevronDown
          size={16}
          className="flex-shrink-0 transition-transform duration-200"
          style={{
            color: 'var(--text-muted)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>
      {open && (
        <div className="pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {answer}
        </div>
      )}
    </div>
  )
}

const stackCategories = Array.from(new Set(techStack.map((t) => t.category)))

export default function FAQAndCTA() {
  return (
    <>
      {/* Tech Stack */}
      <section className="section-pad" style={{ background: 'var(--surface-1)' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="badge badge-neutral mb-4">Tools</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Tech Stack
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We select the most suitable tools for each project. No stack dogma.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {stackCategories.map((cat) => (
              <div key={cat} className="flex items-start gap-4">
                <div
                  className="text-xs font-semibold uppercase tracking-widest w-32 flex-shrink-0 pt-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {cat}
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack
                    .filter((t) => t.category === cat)
                    .map((t) => (
                      <span
                        key={t.name}
                        className="px-3 py-1 rounded-lg text-xs font-medium border"
                        style={{
                          borderColor: 'var(--border-light)',
                          color: 'var(--text-secondary)',
                          background: 'var(--surface-3)',
                        }}
                      >
                        {t.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: 'var(--surface-0)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <div className="badge badge-neon mb-4">FAQ</div>
              <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                The most common questions before starting a data project.
              </p>
            </div>
            <div className="lg:col-span-2">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--surface-0) 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(0,212,255,0.1) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
        <div className="container-tight relative z-10 text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-6"
            style={{ borderColor: 'var(--border-neon)', color: 'var(--neon)' }}
          >
            From Data to Decision
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            How much money are you leaving on the table?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            A 30-minute call is enough to identify the three highest-impact projects for your company this year.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:shadow-neon hover:-translate-y-0.5"
              style={{ background: 'var(--neon)', color: 'var(--surface-0)' }}
            >
              Book Exploratory Call <ArrowRight size={14} />
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm border transition-all hover:bg-white/5"
              style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}
            >
              See Demos First
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
