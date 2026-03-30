'use client'

import { useState } from 'react'
import DemoRFM from '@/components/demos/DemoRFM'
import DemoGeo from '@/components/demos/DemoGeo'
import DemoLogistics from '@/components/demos/DemoLogistics'
import DemoRetention from '@/components/demos/DemoRetention'
import DemoTransformer from '@/components/demos/DemoTransformer'
import { TrendingUp, MapPin, Truck, Users, Sparkles } from 'lucide-react'

const demos = [
  {
    id: 'rfm',
    icon: TrendingUp,
    title: 'Marketing & RFM',
    subtitle: 'Segmentation & churn',
    problem: 'Generic campaigns that don\'t convert and customers who leave without warning.',
    solution: 'Automatic RFM segmentation with propensity scores and recommended actions by customer.',
    value: 'Up to 4x conversion and -32% churn rate.',
  },
  {
    id: 'geo',
    icon: MapPin,
    title: 'Geolocation',
    subtitle: 'Address quality',
    problem: 'Dirty address databases that cause failed deliveries and hidden costs.',
    solution: 'Normalization, validation and geocoding with confidence score per record.',
    value: 'Up to 94% validation. -60% in failed deliveries.',
  },
  {
    id: 'logistics',
    icon: Truck,
    title: 'Logistics',
    subtitle: 'Route optimization',
    problem: 'Manual routes with underutilized vehicles and out-of-control logistics costs.',
    solution: 'Routing algorithms that minimize distance, time and cost while respecting operational constraints.',
    value: '-38% in logistics costs. +42% in fleet utilization.',
  },
  {
    id: 'retention',
    icon: Users,
    title: 'Retention',
    subtitle: 'Commercial actions',
    problem: 'Strategic customers who decrease usage without the team noticing until they\'re gone.',
    solution: 'Risk signal monitoring with suggested actions per customer and executive dashboard.',
    value: 'Early alerts. Recovery of 70% of revenue at risk.',
  },
  {
    id: 'transformer',
    icon: Sparkles,
    title: 'AI Transformer',
    subtitle: 'Your company with AI',
    problem: 'What would your company look like if you truly implemented data & AI?',
    solution: 'Enter your website URL and our AI generates a concrete vision of the possible transformation.',
    value: 'Personalized vision + use cases + investment estimate.',
    highlight: true,
  },
]

export default function DemosPage() {
  const [activeDemo, setActiveDemo] = useState('rfm')
  const active = demos.find((d) => d.id === activeDemo)!

  return (
    <div className="pt-16" style={{ background: 'var(--surface-0)' }}>
      {/* Header */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'var(--surface-1)' }}>
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.08) 0%, transparent 55%)',
        }} />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="badge mb-4" style={{ background: 'var(--neon-glow)', color: 'var(--neon)' }}>
              Interactive Demos
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Touch the data.<br />
              <span className="gradient-text">Understand the impact.</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Five interactive demos with realistic mock data. Explore the solutions we would build for your company.
            </p>
          </div>
        </div>
      </section>

      {/* Demo selector + content */}
      <section className="section-pad">
        <div className="container-wide">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {demos.map((demo) => {
              const Icon = demo.icon
              return (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                    demo.highlight && activeDemo !== demo.id ? 'ring-1 ring-neon/30' : ''
                  }`}
                  style={activeDemo === demo.id
                    ? { background: 'var(--neon)', color: 'var(--surface-0)', borderColor: 'transparent' }
                    : { background: 'var(--surface-2)', color: 'var(--text-secondary)', borderColor: 'var(--border-light)' }
                  }
                >
                  <Icon size={15} />
                  {demo.title}
                  {demo.highlight && (
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full"
                      style={activeDemo === demo.id
                        ? { background: 'rgba(0,0,0,0.2)', color: 'white' }
                        : { background: 'var(--neon-glow)', color: 'var(--neon)' }
                      }
                    >
                      AI
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Active demo header */}
          <div
            className="p-6 rounded-2xl mb-6 grid grid-cols-1 lg:grid-cols-3 gap-5"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border-light)' }}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Problem</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{active.problem}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Solution</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{active.solution}</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--neon)' }}>
                Business Value
              </div>
              <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--neon)' }}>
                {active.value}
              </p>
            </div>
          </div>

          {/* Demo content */}
          {activeDemo === 'rfm'         && <DemoRFM />}
          {activeDemo === 'geo'         && <DemoGeo />}
          {activeDemo === 'logistics'   && <DemoLogistics />}
          {activeDemo === 'retention'   && <DemoRetention />}
          {activeDemo === 'transformer' && <DemoTransformer />}
        </div>
      </section>
    </div>
  )
}
