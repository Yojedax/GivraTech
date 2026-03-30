"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const nav = [
  { label: "Services",  href: "/services" },
  { label: "Demos",      href: "/demos" },
  { label: "About",   href: "/about" },
  { label: "Contact",   href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-bordeaux-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-semibold text-sm">G</span>
          </div>
          <span className="font-display text-xl font-semibold text-charcoal tracking-wide">
            Givra<span className="text-bordeaux-700">Tech</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className={clsx(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                pathname === n.href
                  ? "text-bordeaux-700 bg-bordeaux-50"
                  : "text-gray-600 hover:text-bordeaux-700 hover:bg-bordeaux-50"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/demos" className="text-sm font-medium text-bordeaux-700 hover:text-bordeaux-800 transition-colors">
            See Demos
          </Link>
          <Link href="/contact" className="btn-primary text-sm">
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          {nav.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              className={clsx(
                "block px-4 py-2.5 rounded-lg text-sm font-medium",
                pathname === n.href ? "text-bordeaux-700 bg-bordeaux-50" : "text-gray-700"
              )}>
              {n.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
