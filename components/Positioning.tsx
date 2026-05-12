export default function Positioning() {
  return (
    <section className="py-28 md:py-36 px-6 bg-brown text-cream">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-px h-16 bg-gold mx-auto mb-12" />

        <h2 className="font-serif font-light text-4xl md:text-5xl leading-snug mb-8">
          The wellness space has no shortage<br />
          <em>of coaches who don&apos;t deliver.</em>
        </h2>

        <p className="font-sans font-light text-sm md:text-base text-cream/60 leading-relaxed mb-6 max-w-xl mx-auto">
          Most sell information you could find for free. A plan handed over on a call,
          a PDF you never open, check-ins that trail off after week three.
        </p>
        <p className="font-sans font-light text-sm md:text-base text-cream/60 leading-relaxed mb-12 max-w-xl mx-auto">
          I work differently. I go deep, I stay with you, and I don&apos;t take
          clients I don&apos;t believe I can genuinely help.
        </p>

        <div className="w-8 h-px bg-gold mx-auto mb-12" />

        <p className="font-serif italic text-2xl md:text-3xl text-cream/90 leading-snug mb-10">
          &ldquo;This isn&apos;t for everyone. But if you&apos;re ready to actually do the work —<br />
          I&apos;ll show you exactly how.&rdquo;
        </p>

        <a
          href="#book"
          className="inline-block font-sans text-[11px] tracking-[0.25em] uppercase border border-gold text-gold px-10 py-4 hover:bg-gold hover:text-white transition-all duration-300"
        >
          See if we&apos;re a fit
        </a>
      </div>
    </section>
  )
}
