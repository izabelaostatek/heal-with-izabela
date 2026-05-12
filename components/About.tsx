export default function About() {
  return (
    <section id="about-izabela" className="py-28 md:py-36 px-6 bg-cream">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image placeholder */}
        <div className="relative">
          <div className="aspect-[3/4] bg-cream-mid border border-taupe flex items-end p-8">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/25">
              Photo — replace with yours
            </p>
          </div>
          {/* Decorative offset border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-taupe -z-10" />
        </div>

        {/* Text */}
        <div>
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-sage mb-8">About Izabela</p>
          <div className="w-8 h-px bg-gold mb-8" />

          <h2 className="font-serif font-light text-4xl md:text-5xl leading-snug mb-8 text-brown">
            I know what it feels like<br />
            <em>to live in a body that isn&apos;t working.</em>
          </h2>

          <p className="font-sans text-sm text-brown/60 leading-relaxed mb-5">
            I&apos;m an architect, interior designer and wellness coach. I&apos;ve spent years working at the intersection of how spaces affect health — and how deeply your internal environment shapes everything else.
          </p>

          <p className="font-sans text-sm text-brown/60 leading-relaxed mb-5">
            I got into this work because I went through it myself. The exhaustion, the gut issues, the feeling of doing everything right and still not recovering. I found what works — and I build that into every protocol.
          </p>

          <p className="font-sans text-sm text-brown/60 leading-relaxed mb-10">
            I work with people who are serious about change. Not looking for a quick fix. Ready to understand their body and commit to the process.
          </p>

          <a
            href="#book"
            className="inline-block font-sans text-[11px] tracking-[0.25em] uppercase bg-gold text-white px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            Book a free call
          </a>
        </div>
      </div>
    </section>
  )
}
