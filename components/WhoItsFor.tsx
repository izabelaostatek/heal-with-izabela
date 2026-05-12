const symptoms = [
  {
    num: '01',
    title: 'Your gut is running the show',
    body: 'Bloating, discomfort, food sensitivities you navigate around every day. This has become your normal — but it shouldn\'t be.',
  },
  {
    num: '02',
    title: 'You\'re sleeping but not recovering',
    body: 'Wired at midnight, exhausted by 10am. High cortisol, disrupted rhythms. You wake up already behind.',
  },
  {
    num: '03',
    title: 'Your body is inflamed and you can feel it',
    body: 'Joint stiffness, brain fog, skin flares, weight you can\'t shift. Inflammation sits underneath all of it.',
  },
  {
    num: '04',
    title: 'Your energy crashed and hasn\'t come back',
    body: 'You\'ve tried cutting things out, adding things in. Still running on empty. Ready to understand why.',
  },
]

export default function WhoItsFor() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-sage mb-5">Who this is for</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-brown">
            If any of this sounds familiar,<br />
            <em>you&apos;re in the right place.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-taupe">
          {symptoms.map((s) => (
            <div key={s.num} className="bg-cream p-10 md:p-14">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold block mb-6">{s.num}</span>
              <h3 className="font-serif text-2xl md:text-3xl font-light mb-4 leading-snug text-brown">{s.title}</h3>
              <p className="font-sans text-sm text-brown/55 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
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
