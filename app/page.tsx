import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Positioning from '@/components/Positioning'
import WhoItsFor from '@/components/WhoItsFor'
import Services from '@/components/Services'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import LeadMagnet from '@/components/LeadMagnet'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-cream text-brown overflow-x-hidden">
      <Nav />
      <Hero />
      <Positioning />
      <WhoItsFor />
      <Services />
      <About />
      <FAQ />
      <LeadMagnet />
      <Footer />
    </main>
  )
}
