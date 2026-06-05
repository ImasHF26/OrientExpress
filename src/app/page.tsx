'use client'

import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import OrientationSection from '@/components/landing/OrientationSection'
import ProblemSection from '@/components/landing/ProblemSection'
import SolutionSection from '@/components/landing/SolutionSection'
import TestimonialsSection from '@/components/landing/TestimonialsSection'
import CTAFinal from '@/components/landing/CTAFinal'
import ContactSection from '@/components/landing/ContactSection'
import Footer from '@/components/landing/Footer'
import WhatsAppButton from '@/components/landing/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1F3A]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OrientationSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <CTAFinal />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
