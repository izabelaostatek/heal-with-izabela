const services = [
  {
    num: '01',
    title: '1:1 Coaching',
    tag: 'Most personal',
    body: 'A protocol built entirely around you — your gut, your sleep, your cortisol, your history. We go deep and we stay there until it shifts. Limited spots open each quarter.',
    cta: 'Apply to work together',
    href: '#book',
  },
  {
    num: '02',
    title: 'Retreats',
    tag: 'Coming soon',
    body: 'Immersive experiences in locations chosen for their capacity to restore. Real rest. Guided protocols. Spaces designed to heal as much as the programs inside them.',
    cta: 'Join the waitlist',
    href: '#guide',
  },
  {
    num: '03',
    title: 'Digital Products',
    tag: 'Start today',
    body: 'Self-paced guides and protocols you can begin immediately. Everything I\'d tell a 1:1 client in the first four weeks, packaged so you can start now.',
    cta: 'Browse the shop',
    href: '#shop',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 bg-cream-mid">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="w-px h-14 bg-gold mx-auto mb-10" />
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-sage mb-5">Ways to work together</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-brown">
            One step at a time.<br />
            <em>Your pace, your way.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.num} className="bg-cream p-10 flex flex-col group">
              <div className="flex items-center justify-between mb-8">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">{s.num}</span>
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-brown/30 border border-brown/15 px-3 py-1">{s.tag}</span>
              </div>
              <div className="w-6 h-px bg-gold mb-8" />
              <h3 className="font-serif text-3xl font-light mb-4 text-brown">{s.title}</h3>
              <p className="font-sans text-sm text-brown/55 leading-relaxed flex-1 mb-8">{s.body}</p>
              <a
                href={s.href}
                className="font-sans text-[10px] tracking-[0.25em] uppercase text-brown/50 hover:text-gold transition-colors duration-300 border-b border-brown/15 hover:border-gold pb-1 w-fit"
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
