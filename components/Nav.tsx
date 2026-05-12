'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-taupe'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-wide text-brown">
          Heal with Izabela
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Services', 'Retreats', 'FAQ'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans text-[11px] tracking-[0.25em] uppercase text-brown/60 hover:text-brown transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#book"
            className="font-sans text-[11px] tracking-[0.25em] uppercase bg-gold text-white px-7 py-3 hover:bg-gold-dark transition-colors duration-200"
          >
            Book a free call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-brown transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-brown transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-brown transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-cream border-t border-taupe ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col px-8 py-6 gap-6">
          {['About', 'Services', 'Retreats', 'FAQ'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-[11px] tracking-[0.25em] uppercase text-brown/60"
            >
              {link}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-[11px] tracking-[0.25em] uppercase bg-gold text-white px-7 py-3 text-center"
          >
            Book a free call
          </a>
        </div>
      </div>
    </nav>
  )
}
