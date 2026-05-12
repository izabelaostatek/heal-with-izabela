'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How is this different from other wellness coaches?',
    a: 'Most coaches sell a generic plan and move on. I build a protocol around your specific symptoms, history and lifestyle — and I stay with you through the process. Gut, sleep, cortisol and inflammation are treated together, not in isolation.',
  },
  {
    q: 'I\'ve tried so many things. Why would this be different?',
    a: 'Because most approaches treat symptoms, not root causes. If you\'ve been addressing sleep without looking at cortisol, or fixing your diet without understanding your gut environment, results won\'t stick. We go deeper.',
  },
  {
    q: 'How long before I see real results?',
    a: 'Most clients notice meaningful shifts within 4–6 weeks. Full protocols run 3–6 months depending on where you\'re starting from. I\'ll be honest with you about timelines from the first call.',
  },
  {
    q: 'Do I need to change everything at once?',
    a: 'No. We prioritise what will give you the fastest traction and build from there. The goal is sustainable change, not a dramatic overhaul you can\'t maintain.',
  },
  {
    q: 'Is coaching available online?',
    a: 'Yes. 1:1 coaching is fully online, available worldwide. Retreats are in-person at curated locations. Digital products are self-paced and accessible immediately after purchase.',
  },
  {
    q: 'Is this coaching or medical treatment?',
    a: 'This is wellness coaching, not medical treatment or diagnosis. I work alongside your medical care, not instead of it. If you\'re dealing with a diagnosed condition, I\'ll always encourage you to keep your doctor in the loop.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 md:py-36 px-6 bg-cream-mid">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-sage mb-5">FAQ</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-brown">
            Questions worth asking<br />
            <em>before you commit.</em>
          </h2>
        </div>

        <div className="divide-y divide-taupe">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-7 flex items-start justify-between gap-6 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-serif text-xl font-light text-brown group-hover:text-gold transition-colors duration-200 leading-snug">
                  {faq.q}
                </span>
                <span className="font-sans text-gold text-xl mt-1 flex-shrink-0">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === i ? 'max-h-60 pb-7' : 'max-h-0'
                }`}
              >
                <p className="font-sans text-sm text-brown/60 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="font-sans text-sm text-brown/50 mb-6">Still have questions?</p>
          <a
            href="#book"
            className="inline-block font-sans text-[11px] tracking-[0.25em] uppercase bg-gold text-white px-12 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            Book a free call
          </a>
        </div>
      </div>
    </section>
  )
}
