'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/demos',     label: 'Demos' },
  { href: '/about',  label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b shadow-lg' : 'bg-transparent'
      }`}
      style={{
        background: scrolled ? 'rgba(6,8,13,0.85)' : 'transparent',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <div className="container-wide flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold tracking-tight" style={{ color: 'var(--neon)' }}>
            Givra<span style={{ color: 'var(--text-primary)' }}>Tech</span>
          </span>
          <span className="hidden sm:inline text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)', letterSpacing: '0.14em' }}>
            Data & AI
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
              style={{
                color: pathname === link.href ? 'var(--neon)' : 'var(--text-secondary)',
                background: pathname === link.href ? 'var(--neon-glow)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/demos"
            className="text-sm font-medium px-4 py-2 rounded-lg border transition-all hover:border-neon/40"
            style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}
          >
            See Demos
          </Link>
          <Link href="/contact"
            className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:shadow-neon-sm"
            style={{ background: 'var(--neon-dark)', color: '#fff' }}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 rounded-lg" style={{ color: 'var(--text-secondary)' }}
          onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-b px-6 py-4 flex flex-col gap-1"
          style={{ background: 'var(--surface-1)', borderColor: 'var(--border)' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium"
              style={{
                color: pathname === link.href ? 'var(--neon)' : 'var(--text-secondary)',
                background: pathname === link.href ? 'var(--neon-glow)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t mt-2 pt-3 flex flex-col gap-2" style={{ borderColor: 'var(--border)' }}>
            <Link href="/demos" onClick={() => setOpen(false)}
              className="text-sm font-medium text-center py-2.5 rounded-lg border"
              style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
              See Demos
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}
              className="text-sm font-semibold text-center py-2.5 rounded-lg text-white"
              style={{ background: 'var(--neon-dark)' }}>
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
