'use client'

import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import VideoSection from '@/components/landing/VideoSection'
import OrientationSection from '@/components/landing/OrientationSection'
import DomainesSection from '@/components/landing/DomainesSection'
import WhyUsSection from '@/components/landing/WhyUsSection'
import ProblemSection from '@/components/landing/ProblemSection'
import SolutionSection from '@/components/landing/SolutionSection'
import TestimonialsSection from '@/components/landing/TestimonialsSection'
import FAQSection from '@/components/landing/FAQSection'
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
        <VideoSection />
        <OrientationSection />
        <DomainesSection />
        <WhyUsSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <FAQSection />
        <CTAFinal />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
