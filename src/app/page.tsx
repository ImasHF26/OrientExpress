'use client'

import Navbar from '@/components/landing/Navbar'
import CalendarTickerBanner from '@/components/landing/CalendarTickerBanner'
import Hero from '@/components/landing/Hero'
import VideoSection from '@/components/landing/VideoSection'
import EligibilitySimulator from '@/components/landing/EligibilitySimulator'
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
import CookieConsent from '@/components/landing/CookieConsent'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1F3A]">
      <CalendarTickerBanner />
      <Navbar />
      <main className="flex-1 pt-12 sm:pt-16">
        <Hero />
        <VideoSection />
        <EligibilitySimulator />
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
      <CookieConsent />
    </div>
  )
}
