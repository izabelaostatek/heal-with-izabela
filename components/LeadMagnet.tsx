'use client'

import { useState } from 'react'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire to your email provider here (ConvertKit, Mailchimp, etc.)
    setSubmitted(true)
  }

  return (
    <section id="guide" className="py-28 md:py-36 px-6 bg-brown text-cream">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-px h-14 bg-gold mx-auto mb-12" />
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold mb-6">Free resource</p>
        <h2 className="font-serif font-light text-4xl md:text-5xl leading-snug mb-6">
          The Gut Reset<br />
          <em>Starter Guide</em>
        </h2>
        <p className="font-sans text-sm text-cream/55 leading-relaxed mb-12 max-w-md mx-auto">
          Understand what&apos;s actually driving your symptoms — and where to start.
          The first thing I share with every new client, free.
        </p>

        {submitted ? (
          <div className="border border-gold/30 px-10 py-8">
            <p className="font-serif italic text-2xl text-cream mb-2">It&apos;s on its way.</p>
            <p className="font-sans text-sm text-cream/50">Check your inbox — and your spam folder just in case.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-cream/20 text-cream placeholder-cream/30 px-5 py-4 font-sans text-sm focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              type="submit"
              className="font-sans text-[11px] tracking-[0.25em] uppercase bg-gold text-white px-8 py-4 hover:bg-gold-dark transition-colors duration-300 whitespace-nowrap"
            >
              Send it to me
            </button>
          </form>
        )}

        <p className="font-sans text-[10px] text-cream/25 tracking-wide mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
