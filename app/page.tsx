"use client"

import Navigation from "@/components/site/Navigation"
import { Topbar } from "@/components/site/Topbar"
import { HeroSection } from "@/components/site/Hero"
import ServicesStrip from "@/components/site/ServicesStrip"
import AboutUs from "@/components/site/AboutUs"
import { Benefits } from "@/components/site/Benefits"
import Services from "@/components/site/Services"
import DigitalInvitationServices from "@/components/site/DigitalInvitationServices"
import Portfolio from "@/components/site/Portfolio"
import Testimoni from "@/components/site/Testimoni"
import { FAQ } from "@/components/site/Faq"
import Contact from "@/components/site/Contact"
import Footer from "@/components/site/Footer"

export default function RangkaiWebPortfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Topbar */}
      <Topbar
        instagram={`https://instagram.com/rangkaiweb`}
        tiktok={`https://tiktok.com/@rangkaiweb`}
      />
      
      {/* Navigation */}
      <Navigation />

      <main>
        {/* Hero Section */}
        <HeroSection />

        <div className="relative md:-mt-6">
          <ServicesStrip />
        </div>

        {/* About Us Section */}
        <AboutUs />

        {/* Benefits Section */}
        <Benefits />

        {/* Services Section */}
        <Services />

        {/* Digital Invitation Services Section */}
        <DigitalInvitationServices />

        {/* Portfolio Section */}
        <Portfolio />
        
        {/* Testimonials Section */}
        <Testimoni />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
