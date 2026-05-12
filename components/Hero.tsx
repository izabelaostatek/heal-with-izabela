export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-cream-mid pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-sage/5 pointer-events-none" />
      <div className="absolute bottom-1/3 -right-24 w-96 h-96 rounded-full bg-gold/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="fade-up font-sans text-[10px] tracking-[0.4em] uppercase text-sage mb-10">
          Wellness Coaching · Retreats · Digital Programs
        </p>

        {/* Headline */}
        <h1 className="fade-up-delay-1 font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 text-brown">
          You&apos;ve done<br />
          everything right.<br />
          <em className="text-gold">You&apos;re still exhausted.</em>
        </h1>

        {/* Sub */}
        <p className="fade-up-delay-2 font-sans font-light text-sm md:text-base text-brown/60 max-w-lg mx-auto leading-relaxed mb-14">
          Gut issues. Broken sleep. Inflammation that won&apos;t quit.<br />
          You&apos;ve tried the protocols. The supplements. Maybe a coach.<br />
          If you&apos;re still here — something didn&apos;t work. That changes now.
        </p>

        {/* CTAs */}
        <div className="fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="font-sans text-[11px] tracking-[0.25em] uppercase bg-gold text-white px-12 py-4 hover:bg-gold-dark transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Book a free call
          </a>
          <a
            href="#guide"
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-brown/50 hover:text-brown transition-colors duration-300 border-b border-brown/20 pb-0.5"
          >
            Get the free gut reset guide
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fade-up-delay-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-brown/30">Scroll</span>
        <div className="w-px h-10 bg-gold/40 scroll-line" />
      </div>
    </section>
  )
}
