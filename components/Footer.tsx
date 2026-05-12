export default function Footer() {
  return (
    <footer id="book" className="bg-cream border-t border-taupe">
      {/* Book CTA strip */}
      <div className="py-20 px-6 text-center border-b border-taupe">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-sage mb-6">Ready to start?</p>
        <h2 className="font-serif font-light text-4xl md:text-5xl text-brown mb-8">
          Let&apos;s see if we&apos;re a fit.
        </h2>
        <p className="font-sans text-sm text-brown/50 mb-10 max-w-sm mx-auto leading-relaxed">
          A free 30-minute call to understand where you are, where you want to be, and whether I can help.
        </p>
        <a
          href="mailto:hello@healwithizabela.com"
          className="inline-block font-sans text-[11px] tracking-[0.25em] uppercase bg-gold text-white px-14 py-4 hover:bg-gold-dark transition-colors duration-300"
        >
          Book a free call
        </a>
      </div>

      {/* Footer bar */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif text-lg tracking-wide text-brown">Heal with Izabela</span>

        <p className="font-sans text-[10px] text-brown/30 tracking-wide">
          © 2026 Heal with Izabela. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <a href="#" className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/40 hover:text-brown transition-colors">Instagram</a>
          <a href="#" className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/40 hover:text-brown transition-colors">Privacy</a>
          <a href="mailto:hello@healwithizabela.com" className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown/40 hover:text-brown transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
